import { defineStore } from 'pinia';
import { useRouter } from "vue-router";
import { useRoute } from 'vue-router'
import _ from 'lodash'
import { 
    auth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from '../boot/firebase'
export const useFirebaseStore = defineStore('firebase', {
  state: () => ({
    user: null,
    route: useRoute(),
    router: useRouter(),
  }),
  getters: {
  },
  actions: {
    // Check User Logged In
    handleAuthStateChange() {
        
        auth.onAuthStateChanged(user=> {
            if(user) {
                this.user= user;
                let currentPath=this.route.path
                if(currentPath.includes('login') ) {
                    this.router.push('/')  
                } 
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

    register(userData) {
        console.log('register');
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then(response=> {
            let userId= auth.currentUser.uid     
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

    //Logout Firebase Auth
    logOut() {
        signOut(auth).then(res=> {
            this.user= null
        })    
    },
    //End--------- Logout Firebase Auth
  },
});
