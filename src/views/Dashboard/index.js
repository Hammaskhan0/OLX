import React from 'react'
import Button from '../../components/Button'
import { getAuth, signOut, } from "firebase/auth";
import { getdata, getAdData, registerAd } from '../../FirebaseConfig/firebase';
import { initializeApp } from "firebase/app";
import { useState, useEffect } from 'react';
import { login } from '../../FirebaseConfig/firebase'
import { Form } from 'react-bootstrap';
import swal from 'sweetalert';
import Login from '../Login';
import CreateAd from '../../components/CreateAd';
import Card from '../../components/Card';
import { Row, Col, Container } from "react-bootstrap"
import Navbar from '../../components/Navbar/index'
import './index.css'
import { uploadImage, updateProfile } from '../../FirebaseConfig/firebase'
import Profile from '../profile';
import { useNavigate } from 'react-router-dom';
import Image1 from '../../Images/olx1.png'
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../State/Action/themeAction';
import { setAds } from '../../State/Action/userAction';

export default function Dashboard() {
  const [sara, setSara] = useState([])
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(false)
  const [imageURI, setImageURI] = useState()
  const [picUrl, setPicUrl] = useState()

  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const user = useSelector(state => a)
  // const theme = useSelector(state => themeReducer.theme)
  const user = useSelector(state => state.userReducer.user)
  const theme = useSelector(state => state.themeReducer.theme)
  // const ads = useSelector(state => state.userReducer.ads )
  // console.log("teri maaki",ads)

  const logout = async () => {
    const auth = getAuth();
    signOut(auth)
      // console.log(auth)
      .then(() => {
        swal({
          title: "Log Out!",
          text: "",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((e) => {
        swal({
          title: e.message,
          text: "",
          icon: "error",
          button: "Ok",
        });
      });
  };

  const recieveData = async () => {
    const result = await getdata()
    // console.log("--->", result)
    setSara(result)
    console.log("state", sara)
  }
  const recieveAdData = async () => {
    setLoading(true)
    const result = await getAdData()
    console.log("--->", result)
    setAds(result)
    setLoading(false)
  }
  // const createAd = async ( )=>{
  //   const loginID = await login()
  //   console.log(loginID)

  //   // if (use) {

  //   // }
  // }
  const createAd = () => {
    // setCreateScreen(true)
    navigate('/createad')
  }
  const profile = () => {
    // setMyProfileScreen(true)
    navigate('/profile')
  }
  useEffect(() => {
  //  dispatch(setAds())
    recieveAdData()
  }, [])

  return (
    <>

      <Navbar />
      <div onClick={() => dispatch(setTheme('black'))} style={{ backgroundColor: 'black', height: 30, width: 30, display: 'inline-block' }} ></div>
      <div onClick={() => dispatch(setTheme('green'))} style={{ backgroundColor: 'green', height: 30, width: 30, display: 'inline-block' }} ></div>
      <div onClick={() => dispatch(setTheme('blue'))} style={{ backgroundColor: 'blue', height: 30, width: 30, display: 'inline-block' }} ></div>
      {loading ? <div style={{ display: "flex", justifyContent: "center" }}> <img width={510}

        src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' />
      </div>
        :
        <Container style={{
          background: theme || 'white', display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          paddingTop: "20px"
        }}>

          {/* <Row> */}

          {/* </Row> */}
          <Row
            style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              marginLeft: "10px"
            }}>
            {/* <Col
      
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                >
                  {sara.map((item) => {
                    return (<>
                      <Col
                         xs={12}
                         sm={12}
                         md={12}
                         lg={12}
                         xl={12}>
                        <h1>name = {item.name}</h1>
                        <h1>email = {item.email}</h1>
                      </Col>
                    </>
                    )
                  })}
                </Col> */}

            {/* </div>} */}
            {/* <Container>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{ display: "flex" }> */}
                  <Row>
            <Col>
              <h4>{user && user.name}</h4>
              <h4>{user && user.email}</h4>

            </Col>
            </Row>

            {ads.map((item) => {
              return (<>
                <Col
                  onClick={() => navigate(`/detail/${item.id}`)}
                  xs={11}
                  sm={11}
                  md={6}
                  lg={3}
                  xl={3}
                  className='dash-card-col'
                  style={{
                    // margin:"10px"
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >

                  {/* <p>{item.id}</p> */}
                  <Card
                    Image={item.url}
                    title={item.Title}
                    // description={item.Description}
                    price={item.price}
                    className="card-main-col"
                  />

                </Col>
              </>
              )
            })}
          </Row>
        </Container>
      }

      <Footer />
    </>




  )
}
