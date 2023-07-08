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
  apiKey: "AIzaSyATyTsQ3DFTRnMSfyN73iLhgE0lofwepGw",
  authDomain: "accounting-app-1e205.firebaseapp.com",
  projectId: "accounting-app-1e205",
  storageBucket: "accounting-app-1e205.appspot.com",
  messagingSenderId: "224627538486",
  appId: "1:224627538486:web:8e3f6ca9e96494a052b697"
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
