import * as firebase from "firebase/app";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";
import { 
  getStorage, 
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { 
  getDatabase, 
  ref, 
  onValue, 
  set,
  push,
  update,
  remove,
  // off,
  // get,
  // child,
  // onChildAdded,
  // onChildChanged
} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCHRnuI7G-Tb9dG4kr-pPPlqHPN0viNTRo",
  authDomain: "accounting-app-4240c.firebaseapp.com",
  projectId: "accounting-app-4240c",
  storageBucket: "accounting-app-4240c.appspot.com",
  messagingSenderId: "947003439190",
  appId: "1:947003439190:web:3bcef371d64684c9fde3f7"
}


let firebaseApp = firebase.initializeApp(firebaseConfig);
let auth= getAuth(firebaseApp);
let db= getDatabase(firebaseApp);
let storage= getStorage(firebaseApp)
export { 
    auth, 
    db, 
    ref, 
    onValue, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    set,
    push,
    update,
    remove
    // storage,
    // off,
    // get,
    // child,
    // onChildAdded,
    // onChildChanged,
    
    // storageRef,
    // uploadBytes,
    // getDownloadURL,
}
