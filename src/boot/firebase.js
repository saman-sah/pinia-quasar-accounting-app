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
  update,
  off,
  push,
  get,
  child,
  onChildAdded,
  onChildChanged
} from "firebase/database";


const firebaseConfig = {
  apiKey: "",
  authDomain: "accounting-app-4240c.firebaseapp.com",
  projectId: "accounting-app-4240c",
  storageBucket: "accounting-app-4240c.appspot.com",
  messagingSenderId: "",
  appId: ""
}

let firebaseApp = firebase.initializeApp(firebaseConfig);
let auth= getAuth(firebaseApp);
let db= getDatabase(firebaseApp);
let storage= getStorage(firebaseApp)
export { 
    auth, 
    db, 
    storage,
    update,
    ref, 
    onValue, 
    set,
    off,
    push,
    get,
    child,
    onChildAdded,
    onChildChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    storageRef,
    uploadBytes,
    getDownloadURL,
}
