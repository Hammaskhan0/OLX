import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getAdById } from '../../FirebaseConfig/firebase'
import Navbar from '../Navbar'
import './index.css'
import Avatar from '../../Images/avatar.png'
import Button from '../Button'
import { useSelector } from 'react-redux'

export default function Detail() {
  const [ad, setAd] = useState()
  const params = useParams()
  const { adId } = params
  const user = useSelector(state => state.userReducer.user)
console.log("user in detail",user)
  useEffect(() => {
    getAdDetail()
  }, [])

  const getAdDetail = async () => {
    const result = await getAdById(adId)
    setAd(result)
    console.log(result)
  }

  if (!ad) {
    return <div><h1>loading..</h1></div>
  }
  console.log(ad)
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col
            xs={11}
            sm={11}
            md={12}
            lg={7}
            xl={7}
            className='detailCol'>
            <img

              className="detailImage"
              src={ad.url} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              // style={{ border: "solid green", height: "200px" }}
              className='priceCol'
            >
              <h1>redux {user && user.name}</h1>
              <h2>RS {ad.price}</h2>
              <p style={{ fontFamily: "sans-serif", color: "gray" }}>{ad.Title}</p>
              <br/>
              <br/>
              {/* <br/> */}
              <p>Karachi,Pakistan</p>

            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              // style={{ border: "solid red", height: "300px" }}
              className='descCol'
            >
              <h3>Seller Description</h3>
              <Col
              style={{marginTop:"20px"}}
              >
                <img src={Avatar} />
                <div style={{ marginRight: "70px", paddingRight: "120px" }}>
                  <h3>OLX USER</h3>
                  <label > member since</label>
                </div>

                {/* <br/> */}
              </Col>
              <Button
                className="chat-with-seller"
                title="chat-with-seller"
              />
            </Col>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col
            xs={11}
            sm={11}
            md={12}
            lg={7}
            xl={7}
            className='description'
          >
            <h3>Details</h3>
         <Col 
         className='deatil-col'
        //  style={{alignItems:"center",textAlign:"center",margin:"15px"}}
         >
            <span style={{color:"GrayText"}}>Title</span>
           <span> {ad.Title} </span>
           <span style={{color:"GrayText"}}>Price</span>
           <span>{ad.price}</span>
           </Col>
           <hr/>
           <h3>Description</h3>
           <p>{ad.Description}</p>
          </Col>
        </Row>
      </Container>


    </div>
  )
}
