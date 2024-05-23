import { createContext, useContext, useEffect, useState } from "react";
import {initializeApp} from 'firebase/app';
import { getDatabase,set,ref } from 'firebase/database'
import { 
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
   onAuthStateChanged
   } 
    from 'firebase/auth';

   const FirebaseConfig = {
    apiKey: "AIzaSyBHjCEfZN2OedI--KQoJ5vSACBmAoohiGY",
    authDomain: "e-commerce-37a20.firebaseapp.com",
    projectId: "e-commerce-37a20",
    storageBucket: "e-commerce-37a20.appspot.com",
    messagingSenderId: "24600192407",
    appId: "1:24600192407:web:db1b378bb759942e23d0d2",
    measurementId: "G-DF82HQWB2G",
    databaseURL :"https://e-commerce-37a20-default-rtdb.firebaseio.com",
  };


  const FirebaseApp = initializeApp(FirebaseConfig);
  const FirebaseAuth = getAuth(FirebaseApp);
  const database = getDatabase(FirebaseApp);
  const googleProvider = new GoogleAuthProvider();

  const FirebaseContext = createContext();
 

  export const useFirebase = () => useContext(FirebaseContext);


    export const FirebaseProvider = (props) =>{

    const signupUserWithEmailandPassword = (email,password) =>{
        return createUserWithEmailAndPassword(FirebaseAuth,email,password)
    };

    const signinuser = (email,password) =>{
      return (
      signInWithEmailAndPassword(FirebaseAuth,email,password)
      .then((value)=>alert(`signin sucessfully`))
      .catch((err)=>console.log(err))
      )
    };

    useEffect(()=>{
     onAuthStateChanged(FirebaseAuth,(user)=>{
       if(user){
        //user logged in
        
        console.log(`signed in`);
       }
       else{
        //user logged out
        console.log(`sign out`);
       }
     });
    },[]);

    const signUpWithGoogle = () =>{
     return signInWithPopup(FirebaseAuth,googleProvider);
    };

   const putData = (key,data) =>set(ref(database,key),data);

    return(
        <FirebaseContext.Provider 
        value={{signupUserWithEmailandPassword,
        putData,signUpWithGoogle,signinuser
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
