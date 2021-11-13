import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup ,updateProfile  } from "firebase/auth";

// initialize firebase app
initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');
    const [admin,setAdmin]=useState(false);


    const auth = getAuth();

// register user----------------------------------------
    const registerUser=(email,password,name,history)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setAuthError('');
          const newUser={email, displayName: name};
           setUser(newUser);
          //  save user to db
          saveUser(email,name);
          //  send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          history.replace('/')

        })
        .catch((error) => {
          setAuthError(error.message);
          // ..
        })
        .finally(()=>setIsLoading(false));
        
      
     
    }

    const loginUser=(email, password,location,history)=>{
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const destination=location?.state?.from || '/';
          history.replace(destination)
        setAuthError('');

      })
      .catch((error) => {
        setAuthError(error.message);

      })
      .finally(()=>setIsLoading(false));

    }
// check admin or not
  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))

  },[user.email])
    // observe user state
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        // ...
      } else {
        setUser({})
      }
      setIsLoading(false)

    });
    return()=> unsubscribe;
  },[])
   const logOut=()=>{
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=>setIsLoading(false));

   }

   const saveUser=(email,displayName)=>{
           const user={email, displayName}
           fetch('http://localhost:5000/users',{
             method:"POST",
             headers:{
               "content-type":"application/json"
             },
             body:JSON.stringify(user)
           })
           .then(res => res.json())
           .then(result => {
             console.log(result);
           })
   }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        admin,
        logOut
       
    }
}
export default useFirebase;