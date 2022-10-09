import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './index.css'
// import Button from '../Button';
import Image from '../../Images/pic.png'
import Button from 'react-bootstrap/Button';
import Login from '../../views/Login';
import { getAuth, signOut, } from "firebase/auth";
import swal from 'sweetalert';
import { useState } from 'react';



export default function Card(props) {
    const [screen, setScreen] = useState(false)
    const logout = async () => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            swal({
              title: "Log Out!",
              text: "",
              icon: "success",
              button: "Ok",
            });
            setScreen(true);
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
    
    return (
        <>
        {screen ? <div><Login/></div>
        :<div>
        <div>
      <Row>
            <Col
                xs={12}
                sm={12}
                md={11}
                lg={11}
                xl={11}
                className="card-main-col">
                <img style={{width:"103%",height:"150px",marginTop:"10px"}} src={props.Image}  />
                <hr/>
                <Col 
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                >
                    {/* <input type="price" /> */}
                    <h5 style={{paddingLeft:"10px",fontFamily:"unset"}}>{props.title}</h5>

                </Col>
                <Col
                 xs={12}
                 sm={12}
                 md={12}
                 lg={12}
                 xl={12}
                >
                    {/* <input type={"text"}/> */}
                    <h3 >Pkr.{props.price}</h3>

                    {/* Festina Chronograph watch */}
                </Col>
                <Col
                 xs={12}
                 sm={12}
                 md={12}
                 lg={12}
                 xl={12}
                >
                    {/* <input type={"text"}/> */}
                    <p style={{fontFamily:"sans-serif",paddingLeft:"10px"}}>{props.description}</p>
                        {/* Seiko sports */}
                        {/* 7s36 movement
                        Rotating bezel  */}
                </Col>
               

            </Col>
            </Row>

        </div>
        </div>}
        </>
    )
}
