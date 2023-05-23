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
        saman: null
    }),
    getters: {
        getSortedItems: (state) => {
        let dates = [];
            if(state.saman){
                // Extract all dates from state.saman objects
                Object.keys(state.saman).forEach((key) => {
                    let item = state.saman[key];
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
                    objDates[date] = [];
                });
            
                // Assign each item to its corresponding date in objDates
                Object.keys(state.saman).forEach((keyItem) => {
                    const item = state.saman[keyItem];
                    const itemDate = item.date;
                    
                    if (objDates[itemDate]) {
                    objDates[itemDate].push(item);
                    }
                });
                console.log('objDates');
                console.log(objDates);
                return objDates;
            }
            
        },
    },
    actions: {
        createNewItem(data) {
            console.log('data');
            console.log(data);
            if(this.user) {
                let userId= auth.currentUser.uid
                // set(ref(db, 'users/' + userId + '/items'), {
                //     amount: data.amount,
                //     date: data.date,
                //     img: data.img,
                //     time: data.time,
                //     title: data.title,
                //     type: data.type
                // });
                set(push(ref(db,  'users/' + userId + '/items')), {
                    amount: data.amount,
                    date: data.date,
                    img: data.img,
                    time: data.time,
                    title: data.title,
                    type: data.type
                });
            }
        },
            
        
        // Check User Logged In
        handleAuthStateChange() {        
            auth.onAuthStateChanged(user=> {
                if(user) {
                    let userId= auth.currentUser.uid 
                    this.user= user;
                    let currentPath=this.route.path
                    if(currentPath.includes('login') ) {
                        this.router.push('/')  
                    } 
                    onValue(ref(db, 'users/'+ userId), (snapshot) => {
                        const data = snapshot.val();
                        console.log('database ');
                        console.log(data);
                        this.saman=data.items
                        this.getSortedItems
                    });
                }else {                       
                    this.user= null;
                    this.router.replace('/login')  
                }
            })
        },
        //End--------- Check User Logged In


        login(userData) {
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
            
        },
        
        //Register Firebase Auth
        register(userData) {
            console.log('register');
            createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then(response=> {
                let userId= auth.currentUser.uid     
                set(ref(db, 'users/'+ userId), {
                    name: userData.name,
                    email: userData.email,
                    items: {}
                })
                console.log('register response', response);
                console.log(userId);
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
            
        },

        //Register Firebase Auth
        logOut() {
            signOut(auth).then(res=> {
                this.user= null
            })    
        },
        //End--------- Logout Firebase Auth
    },
});