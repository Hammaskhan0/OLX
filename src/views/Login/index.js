import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Button from '../../components/Button';
import './index.css'
import { login } from '../../FirebaseConfig/firebase'
import { useState } from 'react';
import Dashboard from '../../views/Dashboard';
import { async } from '@firebase/util';
import Signup from '../Signup';
import Profile from '../profile';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [form, setForm] = useState({})
  const [laoding, setLoading] = useState(false)
  // const [screen, setScreen] = useState(false)
  // const [screens,setScreens] = useState(false)
const navigate = useNavigate()

  const signin = async () => {
    // const { email, password } = form
    // login(email, password)
    // console.log(email)
    try {
      setLoading(true)
      var result = await login(form)
      // setScreen(true)
      navigate('/dashboard')
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
    
  }
  const updateForm = (e, key) => {
    setForm({ ...form, [key]: e.target.value })
  }
  const signUpPage = () =>{
    // setScreens(true)
    navigate('/signup')
  }

  return (
    <>
    {/* {screens ? <div><Signup/></div> */}
    {/* // :<div> */}
    {/* {screen ? <div><Dashboard/></div> */}
    {/* :<div> */}
      <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "600px" }}>
        <Col
          className="login-Col"
          xs={10}
          sm={10}
          md={7}
          lg={4}
          xl={4}
        >
          <Col className="button-Main-Col"
            xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col xs={12} sm={12} md={12} lg={5} xl={5}>
              {/* <button className="face-Button">
                <FaFacebookF size={24} />
              </button> */}
              <Button className="face-Button" icon={<FaFacebookF size={24} />} />
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Col className="icon-Col-Google" xs={12} sm={12} md={12} lg={12} xl={12}>
                <FcGoogle size={32} />
                <Col xs={11} sm={11} md={11} lg={10} xl={10}>
                  <Button
                    className="goog-button"
                    title="Sign in with  Google"
                  />
                </Col>
              </Col>
            </Col>
          </Col>

          <Col className="email-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <input onChange={(e) => updateForm(e, 'email')}
              className="email-Input" placeholder="  Enter your Email.." />
          </Col>
          <Col className="email-Col" style={{ height: "50px" }} xs={12} sm={12} md={12} lg={12} xl={12}>
            <input onChange={(e) => updateForm(e, 'password')}
              className="password-Input" type="password" placeholder="Enter your password.." />
          </Col>
          
        {!laoding ? <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}>
            <Button
              className="login-button"
              title="Login"
              onClick={signin}

            />
            <Button
           title="Go to Signup page"
           onClick={signUpPage}
           className="Signup-button"
           />
          </Col>
          :<div style={{
            display: "flex", justifyContent: "center", alignItems: "center",}}>
        <img width={110}
        
         src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>
              
              {/* <h4>loading...</h4> */}
            </div>}

        



        </Col>
      </Row>
      {/* </div>} */}
      {/* </div>} */}
    </>
  )
}
