// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged, updateProfile
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, where, query, setDoc, doc, getDoc} from 'firebase/firestore'
import { uploadBytes, getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFOK8zHB2qKZkfatqHaRvaTIYfEgEtFYI",
  authDomain: "fb-15-8eb88.firebaseapp.com",
  projectId: "fb-15-8eb88",
  storageBucket: "fb-15-8eb88.appspot.com",
  messagingSenderId: "545605740347",
  appId: "1:545605740347:web:64e4e9f612aceb4f5d391e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

// // const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     setUserUid(uid)
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// custom hook
function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unSub;
  }, [])
  return currentUser;
}

async function register(form) {
  const { email, password, name, } = form
  console.log("jharo")
  console.log("chae banna start")
  // console.log(form)
  const result = await createUserWithEmailAndPassword(auth, email, password,)
  console.log("chai ban gai")
  console.log("result", result.user.uid)
  const uid = result.user.uid
  await setDoc(doc(db, "users", uid), {
    email,
    name,
    uid,
  })
  console.log("bartan")
  console.log(doc)
  return "kam hogya"
}
async function login(form) {
  const { email, password } = form
  const logResult = await signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;logResult.user.uid
  //       // ...
  //       alert('Successfully logged in!')
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  let Id = []
  Id = (logResult.user.uid)
  console.log("log", logResult.user.uid)
  //       alert(errorMessage)
  //     });
  return "kam hogya"

}
async function getUserLogin() {
  const userid = auth.currentUser.uid;
  // console.log(currentUser.uid)
  // const uid = auth.currentUser.uid
  const docRef = doc(db, "users",userid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function registerAd(adForm, file,) {
  //  const { file } = adFile
  // console.log(">>>",adFile)
  const { Title, Description, price, } = adForm
  // console.log("firebase", adForm)
  const uid = auth.currentUser.uid
  console.log("currrent--->", uid)
  //   const imageRef = ref(storage, "addImages/" + file.name);

  const imageRef = ref(storage, "adImages/" + file.name)
  //   const imageUpload = await uploadBytes(imageRef, file);

  const uploadImage = await uploadBytes(imageRef, file)
  const url = await getDownloadURL(uploadImage.ref)
  console.log(url)
  await addDoc(collection(db, "Ads" ),{
    // merge: true,
    Title: Title,
    Description: Description,
    price: price,
    url: url,
    uid: uid,

    // currentUser:currentUser,
  })
  console.log("kam hua")
  // return "kam hogya"

}
// async function userAdds(adForm, file) {
//   const { Title, Description, price ,} = adForm
//   const url = await getDownloadURL(imageUpload.ref);
//   // const uid = auth.currentUser.uid;
//   // console.log("--->>>",uid)
//   try {
//     await addDoc(collection(db, "ads"), {
//       title: Title,
//       price: price,
//       detail: Description,
//       url: url,
//       // uid: uid,
//     });
//     await swal({
//       title: "Your data is add Successfully",
//       text: "",
//       icon: "success",
//       button: "Ok",
//     });
//   } catch (e) {
//     await swal({
//       title: e.message,
//       text: "",
//       icon: "warning",
//       button: "Ok",
//     });
//   }
//   return "Bhai";
// }
async function getdata() {
  const q = query(collection(db, "users"))
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    data = [...data, doc.data()]
  });
  return data
}
async function getAdData() {
  const q = query(collection(db, "Ads"))
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
  const  ad = {...doc.data(), id: doc.id}
  data.push(ad)
  console.log(data)

  });
  return data
} 
async function getAdById (id){
  const docRef = doc(db, "Ads", id);
  const docSnap = await getDoc(docRef);
  console.log(id
    )

  return docSnap.data()
}

async function uploadImage(file, currentUser) {
  console.log("file", file)
  const imageRef = ref(storage, "profileImages/" + currentUser.uid + "png");
  const uploadedImage = await uploadBytes(imageRef, file);
  console.log(currentUser.uid) 
  const photoURL = await getDownloadURL(imageRef)
  // console.log(photoURL)
  updateProfile(currentUser, { photoURL: photoURL })
  alert("uploaded")
  // const url = await getDownloadURL(uploadedImage.ref)
  // console.log(url)
  // return url ;
}
// async function updateProfile(data) {
//   console.log("currentuser--->" ,auth.currentUser.uid)
//   const uid = auth.currentUser.uid
//   await setDoc(doc(db,"users",uid),data,{ merge : true })
// }
async function getMyAds() {
  const uid = auth.currentUser.uid
  console.log(uid)
  const q = query(collection(db, "Ads"),where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  console.log("ad->",querySnapshot)

  let data = [];
  querySnapshot.forEach((doc) => {
    const ad = { ...doc.data(),uid};
    data.push(ad);
    console.log("firebase->",data )
    // alert("chala")
  });
  return data;
}



export {
  register,
  login,
  registerAd,
  getdata,
  getAdData,
  // updateProfile,
  getAdById,
  getMyAds,
  getUserLogin,
  uploadImage,
  useAuth,
  db

}