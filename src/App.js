import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect,useState } from "react";
import Router from './FirebaseConfig/router'
import { Provider } from 'react-redux'
import {store,persistor} from './State/store'
import {PersistGate} from 'redux-persist/integration/react'


function App() {
  const [user, setUser] = useState()
  // const [screen, setScreen] = useState("")

  // const ChangeScreen = (CurrentScreen)=>{
  //   setScreen(CurrentScreen)
  // }

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("app ke andar user ", user)
        setUser(user)
        // ...
      } else {
        console.log("user not found")
        setUser(null)
        // User is signed out
        // ...
      }
    });
  },[])
//   const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//     console.log("user data -->",user)
//   } else {
//     // User is signed out
//     // ...
//     console.log("user not found")
//     setUser(null)
//   }
// });
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    {/* <h1>header</h1> */}
    {<Router user={user}/>}
    {/* {<Footer/>} */}
    {/* <h1>footer</h1> */}
    </PersistGate>
      </Provider>

    </>
 
  );
}

export default App;
