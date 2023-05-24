import { defineStore } from 'pinia';
import { useRouter } from "vue-router";
import { useRoute } from 'vue-router'
import _ from 'lodash'
import { 
    auth, 
    db,
    ref,
    set,
    push,
    onValue,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from '../boot/firebase'
export const useFirebaseStore = defineStore('firebase', {
    state: () => ({
        user: null,
        route: useRoute(),
        router: useRouter(),
        userInfo: null,
        items: null,
        bar: null
    }),
    getters: {
        getIncomes:(state)=> {
            const filteredList={
                total:0,
                items:[]
            }
            if(state.items){
                Object.keys(state.items).forEach((key) => {
                    let item = state.items[key];
                    if(item.type== 'income') {
                        filteredList.items.push(item)
                        filteredList.total += item.amount
                    }
                });
                return filteredList
            }
        },
        getExpense:(state)=> {
            const filteredList={
                total:0,
                items:[]
            }
            if(state.items){
                Object.keys(state.items).forEach((key) => {
                    let item = state.items[key];
                    if(item.type== 'expense') {
                        filteredList.items.push(item)
                        filteredList.total += item.amount
                    }
                });
                return filteredList
            }
        },
        getDebts:(state)=> {
            const filteredList={
                total:0,
                items:[]
            }
            if(state.items){
                Object.keys(state.items).forEach((key) => {
                    let item = state.items[key];
                    if(item.type== 'debt') {
                        filteredList.items.push(item)
                        filteredList.total += item.amount
                    }
                });
                return filteredList
            }
        } ,       
        getSortedItems: (state) => {
            let dates = [];
            if(state.items){
                // Extract all dates from state.items objects
                Object.keys(state.items).forEach((key) => {
                    let item = state.items[key];
                    dates.push(item.date);
                });
                
                // Sort the dates in ascending order
                dates = _.sortBy(dates, (date) => {
                    return new Date(date);
                });
            
                // Remove duplicate dates
                let datesUnique = [...new Set(dates)];
                
                let objDates = {};
            
                // Create an empty object for each unique date
                datesUnique.forEach((date) => {
                    objDates[date] = {
                        subTotal: 0,
                        items:[]
                    };
                });
            
                // Assign each item to its corresponding date in objDates
                Object.keys(state.items).forEach((keyItem) => {
                    const item = state.items[keyItem];
                    const itemDate = item.date;
                    
                    if (objDates[itemDate]) {
                        objDates[itemDate].items.push(item);
                        if(item.type== 'income' || item.title== 'Borrow') {
                            objDates[itemDate].subTotal += item.amount
                        }else {
                            objDates[itemDate].subTotal -= item.amount
                        }
                    }
                });
                return objDates;
            }
            
        },        
        total:(state)=> {
            let total=0
            if(state.items && Object.keys(state.items)) {
                Object.keys(state.items).forEach((keyItem) => {
                    const item = state.items[keyItem];
                    if(item.type== 'income' || item.title== 'Borrow'){
                        total+=item.amount
                    }else {
                        total-=item.amount
                    }                    
                }); 
                return total               
            }
            return '0'
        },
    },
    actions: {
        createNewItem(data) {
            this.startBar(); 
            if(this.user) {
                let userId= auth.currentUser.uid
                set(push(ref(db,  'users/' + userId + '/items')), {
                    amount: data.amount,
                    date: data.date,
                    img: data.img,
                    time: data.time,
                    title: data.title,
                    type: data.type,
                    name: data.name
                });
            }
            this.stopBar(); 
        },
                
        // Check User Logged In
        handleAuthStateChange() {        
            auth.onAuthStateChanged(user=> {
                if(user) {
                    this.startBar(); 
                    let userId= auth.currentUser.uid 
                    this.user= user;
                    let currentPath=this.route.path
                    if(currentPath.includes('login') ) {
                        this.router.push('/')  
                    } 
                    onValue(ref(db, 'users/'+ userId), (snapshot) => {
                        const data = snapshot.val();
                        this.items=data.items
                        this.getSortedItems
                    });
                    this.stopBar(); 
                }else {                       
                    this.user= null;
                    this.router.replace('/login')  
                }
            })
        },
        //End--------- Check User Logged In


        login(userData) {
            this.startBar(); 
            signInWithEmailAndPassword(auth, userData.email, userData.password)
            .then(response=> {
                this.user= response.user;
                console.log('this.user');
                console.log(this.user);
            })
            .catch(error=> {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert("User not Found")
                        break;
                    case 'auth/wrong-password':
                        alert("Wrong Password")
                        break;
                    
                    default:
                        alert("Something went Wrong")                      
                }
                return
            })
            this.stopBar(); 
        },
        
        //Register Firebase Auth
        register(userData) {
            this.startBar(); 
            createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then(response=> {
                let userId= auth.currentUser.uid     
                set(ref(db, 'users/'+ userId), {
                    name: userData.name,
                    email: userData.email,
                    items: {}
                })
            })
            .catch(error=> {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert("Email already in use")
                        break;
                    case 'auth/invalid-email':
                        alert("Invalid Email")
                        break;
                    case 'auth/operation-not-allowed':
                        alert("Operation not allowes")
                        break;
                    case 'auth/weak-password':
                        alert("Week Password")
                        break;
                    
                    default:
                        alert("Something went Wrong")
                        
                }
                return
            })
            this.stopBar(); 
            
        },

        //Register Firebase Auth
        logOut() {
            this.startBar(); 
            signOut(auth).then(res=> {
                this.user= null
            })    
            this.stopBar(); 
        },
        //End--------- Logout Firebase Auth
        

        setBar(bar) {
            this.bar = bar;
        },
        startBar() {
            if (this.bar) {
              this.bar.start();
            }
        },
        stopBar() {
            if (this.bar) {
              this.bar.stop();
            }
        },
      
    },
});
