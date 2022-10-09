import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { uploadImage, updateProfile, useAuth, getUserLogin } from '../../FirebaseConfig/firebase'
import './index.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Row, Col } from 'react-bootstrap'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useDispatch } from 'react-redux'
import { addUser } from '../../State/Action/userAction'

export default function Profile() {
  const [imageURI, setImageURI] = useState()
  const [photoURL, setPhotoUrl] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg")
  const [userProfile, setUserProfile] = useState({})

  const currentUser = useAuth()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImageURI(e.target.files[0])
    }

  }
  const submit = () => {
  // try {
  //   const url = await uploadImage(imageURI,currentUser)
  //   // await updateProfile({ profilepic: url })
  //   // alert("image uploaded")
  //   // console.log(url)
  //   // setPhotoUrl(url)

  // } catch (e) {
  //   console.log("e:", e.message)
  // }

    uploadImage(imageURI,currentUser)
  }
  // const updatepro = (e, key) => {
  //   setUserProfile({ ...userProfile, [key]: e.target.value })
  // }
  //   useEffect(() =>{
  //  const auth = getAuth();
  //  onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //       const uid = user.uid
  //       console.log(user)
  //   }
  //  });
  //   },[])
  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoUrl(currentUser.photoURL)

    }
  }, [currentUser])
  // const auth = getAuth();
  // const user = auth.currentUser;
  // console.log(user)
  // if (user !== null) {
  //   user.providerData.forEach((profile) => {
  //     console.log("Sign-in provider: " + profile.providerId);
  //     console.log("  Provider-specific UID: " + profile.uid);
  //     console.log("  Name: " + profile.displayName);
  //     console.log("  Email: " + profile.email);
  //     console.log("  Photo URL: " + profile.photoURL);
  //   });
  // }

  const userdata = async () => {
    const result = await getUserLogin()
    setUserProfile(result)
    // const userObj = {...userProfile}
      dispatch(addUser(result))
      // console.log(userProfile)
  }
  useEffect(() => {
    userdata()
  }, [])
  // console.log(userProfile)
  return (

    <div>
      <div><Navbar /></div>
      <br />
      <Row style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Col
          className='profile-main-col'
          xs={12}
          sm={12}
          md={8}
          lg={5}
          xl={5}
        >
          <Col
            xs={8}
            sm={8}
            md={7}
            lg={5}
            xl={5} >
            <img alt='avatar' className='avatar' src={photoURL} />
            <Stack style={{marginLeft:"60px"}} direction="row" alignItems="center" spacing={1}>
              <Button variant="contained" component="label">
                Upload
                <input
                  onChange={(e) => setImageURI(e.target.files[0])}
                  // onChange={handleChange}
                  hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input
                  onChange={(e) => setImageURI(e.target.files[0])}
                  // onChange={handleChange}
                  hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Stack>
            <hr/>
            <p className='p'>Name : {userProfile.name}</p>
            <p className='p'>Email : {userProfile.email}</p>
            {/* <p>{userProfile.name}</p> */}

            {/* <div>Currenttly loggen in as :{currentUser?.email}</div> */}
            {/* <p>{displayName}</p> */}
            <button className="submit-button" onClick={submit}>Submit</button>

          </Col>


        </Col>
      </Row>
      <br /><br />

      <Footer />
     
    </div>
  )
}
