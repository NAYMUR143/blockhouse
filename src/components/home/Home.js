import React from "react";
import { Container } from "@mui/system";
// import styled from "@emotion/styled";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";
import heroImg from "../images/heroscbg.png";

import PrivateSection from "./PrivateSection";
import ProductSection from "./ProductSection";
import Application from "./Application";
import Footer from "./Footer";
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 25px 0px;
  h4 {
    font-weight: 400;
    font-size: 1.5em;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 25px;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 1em;
        border-bottom: 1px solid transparent;
        transition: 0.3s;
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
      svg {
        color: #fff;
        font-size: 1.4em;
      }
      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  height: 100%;
`;
const WrapTxt = styled.div`
  h1 {
    font-size: 4em;
  }
  p {
    padding: 45px 0px 30px;
    font-size: 1em;
    font-weight: 300;
    line-height: 155%;
    opacity: 0.8;
  }
  button {
    padding: 15px 20px;
    border: 2px solid #659beb;
    background: rgba(101, 155, 235, 0.06);
    color: #659beb;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: rgba(101, 155, 235, 1);
      color: #fff;
    }
  }
`;
const Wrap_img = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
    margin-top: 50px;
  }
  &::before {
    content: "";
    position: absolute;
    top: -5%;
    left: 70%;
    width: 40%;
    transform: translate(-50%, -50%) rotate(18.36deg);
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12)
    );
    filter: blur(156px);
  }
  // @media (max-width: 1100px) {
  //   width: 50%;
  // }
`;

function Home() {
  return (
    <>
      <div className="heroSection">
        <Container sx={{ height: "100%" }}>
          <Header>
            <div className="logo">
              <h4>blockhouse</h4>
            </div>
            <ul className="header_mdl">
              <li>
                <a href="#">For Borrowers</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
            <ul className="header_lst">
              <li>
                <button>
                  <RiMoonFill />
                </button>
              </li>
              <li>
                <a href="#">Launch Exchange</a>
              </li>
            </ul>
          </Header>
          <Wrapper>
            <WrapTxt>
              <h1>
                Tap Into the <br />
                <span> Next Generation</span> <br />
                of Credit Trading
              </h1>
              <p>
                Trade bonds electronically with blazing fast <br /> settlement,
                minimal trading fees, novel HY investment <br /> products and
                trading strategies.
              </p>
              <button>
                <FiDownload />
                <span>See Active Deals</span>
              </button>
            </WrapTxt>
          </Wrapper>
        </Container>
        <Wrap_img>
          <img src={heroImg} alt="" />
        </Wrap_img>
      </div>
      {/* Private Credit */}
      <PrivateSection />
      {/* Product Section */}
      <ProductSection />
      {/* Product Section */}
      <Application />
      {/* footer */}
      <Footer />
    </>
  );
}

export default Home;
