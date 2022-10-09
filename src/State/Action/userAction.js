import { collection, query, onSnapshot } from "firebase/firestore"
import { db } from '../../FirebaseConfig/firebase'

function addUser(user){
    console.log("user inside function",user)
// alert("action chala")

    return{
    type : "ADD_USER",
    payload : user
}
}
function removeUser(){
    return{
    type : "REMOVE_USER",
}
}
function setAds(){
    return (dispatch) => {
        const q = query(collection(db, "ads"))
        onSnapshot(q, (querySnapshot) => {
            const data = []
            querySnapshot.forEach((doc) => {
                const ad = { ...doc.data() , id: doc.id }
                console.log('ad', ad)
                data.push(ad)
            });
            dispatch({
                type: 'SET_ADS',
                payload: data
            })
        });
    }
}
export{
    addUser,
    removeUser,
    setAds
}
/*
Problems
1. can't get realtime data in firebase.js because
onSnapshot isn't a promise and thus we can't use async/await
2. same problem faced in redux

Solution:
Redux Thunk: 
1. Allow us to use APIs (async methods) inside Action.
2. It will provide dispatch that will help the data to be sent to reducer
*/