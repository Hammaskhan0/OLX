import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { getMyAds } from '../../FirebaseConfig/firebase'
import Card from '../Card'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function MyAds() {
  const [myAds, setMyAds] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const currentUserAds = async () => {
      try {
        setLoading(true)
        var result = await getMyAds();
        setMyAds(result);
      } catch (e) {
        alert(e.message);
      } finally {
        setLoading(false)
      }
      return result;
    };

    currentUserAds()
  }, [])
  // const show = async () =>{
  //   var result = await getMyAds()
  //   setMyAds(result)
  //   console.log("-------->",result)
  // }
  //    console.log(myAds)


  return (
    <div>
      <Navbar />
      {loading ?<div style={{display:"flex",justifyContent:"center"}}> <img width={510}
        
        src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>
        </div>
        :
      <Container style={{display:"flex",justifyContent:"center"
      ,alignItems:'center'}}>
        <Row style={{marginLeft:'10px'}}>
          {/* <Col 
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}> */}

          {myAds.map((item) => {
            return (
              <>
                <Col xs={11} sm={11} md={4} lg={3} xl={3}>
                  <Card
                    Image={item.url}
                    title={item.Title}
                    price={item.price}
                  // description={item.Description}
                  />
                </Col>
              </>
            );
          })}
          {/* <button onClick={show}c>Show</button> */}
          {/* </Col> */}

        </Row>
      </Container>
}
      <Footer />

    </div>
  )
}
