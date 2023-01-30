import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import img from "../images/footerImg.png";
import ftrLogo from "../images/flogo.png";
import { FiDownload } from "react-icons/fi";
import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
const FtrContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  position: relative;
`;
const DealsBtn = styled.button`
  font-size: 1.1em;
  padding: 10px 20px;
  border: none;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid #659beb;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  &:hover {
    background: #659beb;
  }
`;
const InfoBtn = styled.button`
  font-size: 1.1em;
  padding: 10px 20px;
  border: none;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #000;
  }
`;
const H1 = styled.h1`
  font-size: 4.5em;
`;
const BottomFooter = styled.footer`
  background: #17181d;
  backdrop-filter: blur(32px);
  img {
    width: 200px;
    object-fit: cover;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    li {
      a {
        font-size: 1.5em;
        color: #fff;
        transition: all 0.3s;
      }
      &:hover {
        a {
          color: #1da1f2;
        }
      }
      &:first-child:hover {
        a {
          color: #0077b5;
        }
      }
    }
  }
`;
function Footer() {
  return (
    <FtrContainer>
      <Container>
        <Box
          sx={{
            padding: "40px 0px",
            height: "400px",
            display: "grid",
            placeItems: "center",
            placeContent: "center",
            gap: "10px",
          }}
        >
          <H1>
            Want <span>Access?</span>
          </H1>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            <DealsBtn>
              <FiDownload />
              See Deals
            </DealsBtn>
            <InfoBtn>
              <FiDownload />
              More info
            </InfoBtn>
          </Box>
        </Box>
      </Container>
      <BottomFooter>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={ftrLogo} alt="" />
          <ul>
            <li>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <BsGlobe />
              </a>
            </li>
          </ul>
          <span>
            made by
            <a href="#" style={{ color: "#659beb" }}>
              roobinium.io
            </a>
          </span>
        </Container>
      </BottomFooter>
    </FtrContainer>
  );
}

export default Footer;
