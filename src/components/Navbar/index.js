import {useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image1 from '../../Images/olx1.png'
import Image2 from '../../Images/olx2.png'
import { IoCarSport } from 'react-icons/io5'
import { BsBuilding, BsSearch } from 'react-icons/bs'
import './index.css'
import Button from '../Button/index'
import swal from 'sweetalert';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import Login from '../../views/Login'
import { useNavigate } from 'react-router-dom';
import { SettingsSuggestRounded } from '@mui/icons-material'
// import Footer from '../Footer'


export default function Navbar(props) {
    const [screen, setScreen] = useState(false)
    const navigate = useNavigate();
    
    useEffect(() => {
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
      }, [])
    
      const [user, setUser] = useState()
    
    //   user={user}

    const logout = async () => {
        const auth = getAuth();
        signOut(auth)
          // console.log(auth)
          .then(() => {
            setUser()
            swal({
              title: "Log Out!",
              text: "",
              icon: "success",
              button: "Ok",
            });
            // setScreen(true);
            navigate('/login')
            
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
      const createAd = () => {
        // setCreateScreen(true)
        navigate('/createad')
      }
      const profile = () => {
        // setMyProfileScreen(true)
        navigate('/profile')
      }
      const dashboard = () => {
        // setMyProfileScreen(true)
        navigate('/dashboard')
      }
      const myads = () =>{
        navigate('/myads')
      }
    return (
        <div>
             {screen ? <div>loading</div>
        : <div>
            <Container>
                <Row>
                    <Col
                        xs={11}
                        sm={11}
                        md={12}
                        lg={4}
                        xl={4}
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <div><img src={Image1}
                         onClick={dashboard}
                        style={{cursor:"pointer"}} /> </div>
                        <div
                            className='icon-div'>
                            <IoCarSport size={25} />
                            <p>MOTORS</p></div>
                        <div
                            className='icon-div'>
                            <BsBuilding size={25} />
                            <p>PROPERTY</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className='col'
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    //     style={{ display: "flex", justifyContent: "space-around" 
                    // ,alignItems:"center"}}
                    >
                        <Col
                            xs={1}
                            sm={1}
                            md={4}
                            lg={1}
                            xl={1}
                        >
                            <img src={Image2}
                             onClick={dashboard}
                            style={{cursor:"pointer"}} />
                        </Col>
                        <Col
                            xs={11}
                            sm={11}
                            md={4}
                            lg={3}
                            xl={3}
                        >
                            <select style={{
                                height: "40px", width: "100%",
                                border: "solid black", borderRadius: "5px"
                            }}>
                                <option>Pakistan</option>
                            </select>
                        </Col>
                        <Col
                            style={{
                                display: "flex",
                                margin: "10px",

                            }}
                            xs={11}
                            sm={11}
                            md={4}
                            lg={5}
                            xl={5}

                        >
                            <input
                                className='search-input'
                                placeholder='  Find Cars ,Mobile Phones and More...'
                            />
                            <Col
                                style={{
                                    backgroundColor: "black", height: "40px",
                                    // borderLeft: "none",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                }}
                                xs={1}
                                sm={1}
                                md={1}
                                lg={1}
                                xl={1}
                            >
                                <BsSearch style={{
                                    color: "white",
                                    backgroundColor: "black",
                                    height: "32px",
                                    width: "35px",
                                    margin: "5px",

                                }} />

                            </Col>
                        </Col>
                        <Row>
                            <Col
                                xs={6}
                                sm={6}
                                md={4}
                                lg={4}
                                xl={4}

                            >
                                <Button
                                    title="login"
                                    className="login-but"
                                />
                            </Col>
                            <Col
                                xs={6}
                                sm={6}
                                md={4}
                                lg={8}
                                xl={8}

                            >
                                <Button
                                    title="+ sell"
                                    className="sell"
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Row>
                        <Col
                        className='but'
                        >
                             <Button
                            onClick={dashboard}
                                title="Home"
                                className="login-but"
                            />
                            <Button
                            onClick={createAd}
                                title="CreateAd"
                                className="login-but"
                            />
                             <Button
                             onClick={logout}
                                title="LogOut"
                                className="login-but"
                            /> 
                            <Button
                            onClick={myads}
                                title="MyAds"
                                className="login-but"
                            /> 
                           
                             <Button
                            onClick={profile}
                                title="Profile"
                                className="login-but"
                            />
                            
                        </Col>
                    </Row>
                </Row>
            </Container>
            </div>}
        
        </div>
    )
}
