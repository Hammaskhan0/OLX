import React, { useEffect } from 'react'
import { useState } from 'react'
import { registerAd, useAuth } from '../../FirebaseConfig/firebase'
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Col, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function CreateAd() {
  const [adForm, setAdForm] = useState({})
  const [file, setFile] = useState()
  const [loading, setLoading] = useState(false)
  const currentUser = useAuth()




  const adAdds = async () => {
    // register(form)
    // setScreen(true)
    try {
      setLoading(true)
      var result = await registerAd(adForm, file,)
      // setScreen(true)
      alert("upload")
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }
  //   useEffect(()=>{
  //     const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;

  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });
  //   },[])

  const updatedForm = (e, key) => {
    setAdForm({ ...adForm, [key]: e.target.value })
  }
  // const updatedFile = (e, key)=>{
  //   setFile({...file, [key]: e.target.files[0]})
  //   // console.log(file)
  // }
  // console.log(file)


  return (
    <>
      <Navbar />
      <div>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col

            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <TextField label="Title"
                style={{ width: "100%" }}
                onChange={(e) => updatedForm(e, 'Title')}
                color="secondary" focused />
            </Col>
            <Col
              style={{ marginTop: "10px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}>
              <TextField label="Description"
                style={{ width: "100%", }}
                onChange={(e) => updatedForm(e, 'Description')}
                color="secondary" focused />
            </Col>
            <Col
              style={{ marginTop: "10px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}>
              <TextField label="price"
                style={{ width: "100%" }}
                onChange={(e) => updatedForm(e, 'price')}
                color="secondary" focused type="number" />
            </Col>
            <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
              style={{ marginTop: "10px",textAlign:"center" }}
            >
              {/* <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file" /> */}
                  <Button variant="contained" component="label">
                Upload Picture
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  hidden accept="image/*" multiple type="file" />
              </Button>
            </Col>
            <br />
            <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{textAlign:"center"}}
            >
              <Button variant="contained"
                onClick={adAdds}
                style={{ width: "30%", }}
                color="success">
                ADD
              </Button>
            </Col>
          </Col>
        </Row>
        <br/><br/><br/><br/>
      </div>

      <Footer />
    </>
  )
}
