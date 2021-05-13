import React from "react";
import Icons from "./icons/iconReusable"
import {FaYoutube,FaTwitter,FaInstagram,FaFacebookF} from "react-icons/fa"
import {
  Footer,
  FooterColumn,
  FooterLink,
  FooterRow,
  FooterTitle,
  FooterWrapper,
} from "./utils";

const FooterContainer = () => {
  return (
    <Footer>
      <FooterWrapper color="red">
        <FooterRow>
          <FooterColumn>
            <FooterTitle>About</FooterTitle>
            <FooterLink>Story</FooterLink>
            <FooterLink>Clients</FooterLink>
            <FooterLink>Testimonilas</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLink>Story</FooterLink>
            <FooterLink>Clients</FooterLink>
            <FooterLink>Testimonilas</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterLink>Story</FooterLink>
            <FooterLink>Clients</FooterLink>
            <FooterLink>Testimonilas</FooterLink>
          </FooterColumn>
        
          <FooterColumn>    
                <FooterTitle>Social</FooterTitle>
                    <FooterLink href="#">  <FaFacebookF style={{fontSize:'18px',marginRight:'16px'}}/>Facebook</FooterLink>
                    <FooterLink href="#"><FaInstagram style={{fontSize:'18px',marginRight:'16px'}}/>Instagram</FooterLink>
                    <FooterLink href="#"><FaYoutube style={{fontSize:'18px',marginRight:'16px'}}/> Youtube</FooterLink>
                    <FooterLink href="#"><FaTwitter style={{fontSize:'18px',marginRight:'16px'}}/>Twitter</FooterLink>
                </FooterColumn>
        
        
        </FooterRow>        
      </FooterWrapper>
    </Footer>
  );
};

export { FooterContainer };
