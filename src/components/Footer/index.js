import './index.css'
import React from 'react'
import { Row, Col } from "react-bootstrap";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { MdOutlinePlayCircle } from "react-icons/md";
import { TbBrandInstagram } from "react-icons/tb";
import { RiAppleLine } from "react-icons/ri";


export default function Footer() {
  return (
    <>
     <Row className="footer-Main-Row">
        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
          <h6>POPULAR CATEGORIES</h6>
          <p className="footer-Text">Cars</p>
          <p className="footer-Text">Flats for rent</p>
          <p className="footer-Text">Mobile Phones</p>
          <p className="footer-Text">Jobs</p>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
          <h6>TRENDING SEARCHES</h6>
          <p className="footer-Text">Bikes</p>
          <p className="footer-Text">Watches</p>
          <p className="footer-Text">Books</p>
          <p className="footer-Text">Dogs</p>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
          <h6>ABOUT US</h6>
          <p className="footer-Text">About EMPG</p>
          <p className="footer-Text">OLX Blog</p>
          <p className="footer-Text">Contact Us</p>
          <p className="footer-Text">OLX for Businesses</p>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
          <h6>OLX</h6>
          <p className="footer-Text">Help</p>
          <p className="footer-Text">Sitemap</p>
          <p className="footer-Text">Terms of use</p>
          <p className="footer-Text">Privacy Policy</p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3} xl={3}>
          <h6>FOLLOW US</h6>
          <TiSocialFacebookCircular color="#627f82" size={25} />
          <TiSocialTwitterCircular color="#627f82" size={25} />
          <MdOutlinePlayCircle color="#627f82" size={25} />
          <TbBrandInstagram color="#627f82" size={25} />
          {/* <Col style={{border:"solid red"}} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button 
                 className="app-Store-Button"
                 Icon={<RiAppleLine size={25} />}
                 Text={"App Store"} />
                <Button Text={"Google Play"} />
                <Button Text={"App Gallery"} />
            </Col> */}
        </Col>
      </Row>
    </>
  )
}
