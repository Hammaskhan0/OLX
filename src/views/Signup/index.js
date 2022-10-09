import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '../../components/Button';
import './index.css'
import Image from '../../Images/logo.png'
import { useState } from 'react';
import { login, register,useAuth} from '../../FirebaseConfig/firebase'
import Login from '../Login';
import Dashboard from '../../views/Dashboard';
import Profile from '../profile';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../State/Action/userAction';


export default function Signup() {
  const [form, setForm] = useState({})
  // const [screen, setScreen] = useState(false)
  const [laoding, setLoading] = useState(false)
  // const [screens,setScreens] =useState(false)
  // const [screen,setScreen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signup = async () => {
    // register(form)
    // setScreen(true)
    setLoading(true)
    try {
      var result = await register(form)
      // setScreen(true)
      // const userObj = {form}
      // dispatch(addUser(userObj))
    navigate('/dashboard')

    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

 const loginPage =() =>{
  // setScreens(true)
  navigate('/login')
 }

  const updateForm = (e, key) => {
    setForm({ ...form, [key]: e.target.value })
  }

  return (

    <>
    {/* {screens ? <div><Login/></div>
    :<div>
    
      {screen ? <div><Dashboard /></div>
        : <div> */}
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "700px" }}>
            <Col
              className="login-Col"
              xs={10}
              sm={10}
              md={7}
              lg={4}
              xl={4}
            >
              <Col>
                <img src={Image} height={80} />
              </Col>
              <Col className="email-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
                <input onChange={(e) => updateForm(e, 'name')} className="email-Input" placeholder="  your First name" />
              </Col>
              <Col className="email-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
                <input className="email-Input" placeholder="  Your Number" />
              </Col>
              <Col className="email-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
                <input onChange={(e) => updateForm(e, 'email')} className="email-Input" placeholder="  Enter your Email.." />
              </Col>

              <Col className="email-Col" style={{ height: "50px" }} xs={12} sm={12} md={12} lg={12} xl={12}>
                <input onChange={(e) => updateForm(e, 'password')} className="password-Input" type="password" placeholder="Enter your password.." />
              </Col>

              {!laoding ? <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              >

                <Button
                  className="login-button"
                  title="SignUp"
                  onClick={signup}
                  disabled={laoding}
                />
                 <Button
           title="Go to Login page"
           onClick={loginPage}
           className="login-button"
           />

              </Col>
                : <div style={{
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
