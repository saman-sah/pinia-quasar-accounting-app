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
  apiKey: "AIzaSyDi37RWuD7-sGh04TJhymoKe3IMsnSF3YY",
  authDomain: "accounting-app-ae63d.firebaseapp.com",
  projectId: "accounting-app-ae63d",
  storageBucket: "accounting-app-ae63d.appspot.com",
  messagingSenderId: "693030658179",
  appId: "1:693030658179:web:a894b26b4935089dc5bbb6"
};


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
