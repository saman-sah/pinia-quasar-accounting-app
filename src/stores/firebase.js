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
    update,
    remove,
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
        bar: null,
        showModalStep1: false,
        showModalStep2: false,
        loading: true,
        searchedTxt: '',
        dataStep1: {
            type: "",
            data: {
                time: "",
                date: "",    
                amount: 0,
                name: "",
                title:"",
                type:"",
                img:""
            },
            action:'',
            itemKey: ''
        },
    }),
    getters: {
        getFilteredItems:(state)=> (type)=> {
            const filteredList={
                total:0,
                items:{}
            }
            if(state.items){
                Object.keys(state.items).forEach((key) => {
                    let foundedTitels=[];
                    let item = state.items[key];
                    if(item.type== type) {
                        if(state.searchedTxt !=''){
                            if((item.title).toLowerCase().indexOf(state.searchedTxt)== 0) {
                                filteredList.items[key]=item
                                if(item.title== 'Lend') {
                                    filteredList.total -= item.amount
                                }else{
                                    filteredList.total += item.amount
                                }                                
                                
                                foundedTitels.push(item.title)
                            }else {
                                const found = foundedTitels.some(el => el === item.title);
                                if (~(item.title).toLowerCase().indexOf(state.searchedTxt) && !found){
                                    filteredList.items[key]=item
                                    if(item.title== 'Lend') {
                                        filteredList.total -= item.amount
                                    }else{
                                        filteredList.total += item.amount
                                    }
                                }

                            }                  
                        }else {
                            filteredList.items[key]=item
                            if(item.title== 'Lend') {
                                filteredList.total -= item.amount
                            }else{
                                filteredList.total += item.amount
                            }
                        }
                        
                    }
                });
                return filteredList
            }
        },     
        getSortedItems: (state) => {
            console.log('getSortedItems');
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
                        items:{}
                    };
                });
            
                // Assign each item to its corresponding date in objDates
                Object.keys(state.items).forEach((keyItem) => {
                    const item = state.items[keyItem];
                    const itemDate = item.date;
                    
                    if (objDates[itemDate]) {
                        objDates[itemDate].items[keyItem]=item;
                        if(item.type== 'income' || item.title== 'Borrow') {
                            objDates[itemDate].subTotal += item.amount
                        }else {
                            objDates[itemDate].subTotal -= item.amount
                        }
                    }
                });
                state.loading=false                
                return objDates;
            }
            state.loading= false
            return false
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
        clearData: (state)=> {
            console.log('clear data');
            state.dataStep1= {
                type: "",
                data: {
                    time: "",
                    date: "",    
                    amount: 0,
                    name: "",
                    title:"",
                    type:"",
                    img:""
                },
                action:'',
                itemKey: ''
            }
        }
    },
    actions: {
        createNewItem() {
            this.startBar(); 
            if(this.user) {
                let userId= auth.currentUser.uid
                console.log('this.dataStep1');
                console.log(this.dataStep1);
                if(this.dataStep1.action== 'Update') {
                    update(ref(db, 'users/' + userId +'/items/'+ this.dataStep1.itemKey ), this.dataStep1.data);
                }else {
                    set(push(ref(db,  'users/' + userId + '/items')), {
                        amount: this.dataStep1.data.amount,
                        date: this.dataStep1.data.date,
                        img: this.dataStep1.data.img,
                        time: this.dataStep1.data.time,
                        title: this.dataStep1.data.title,
                        type: this.dataStep1.type,
                        name: this.dataStep1.data.name ? this.dataStep1.data.name : ""
                    });
                }                                
            }
            this.stopBar(); 
            this.clearData;
        },

        deleteItem() {
            if(this.user) {
                this.startBar();
                let userId= auth.currentUser.uid
                remove(ref(db, 'users/' + userId +'/items/'+ this.dataStep1.itemKey))
                .then(()=> {
                    this.showModalStep2= false
                    this.stopBar();
                    this.clearData;
                })
            }
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
                        this.getSortedItems;
                        this.userInfo= {
                            name: data.name,
                            email: data.email
                        }
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
        step2(params) {
            this.showModalStep2= true
            this.dataStep1= params;
        }
      
    },
});
