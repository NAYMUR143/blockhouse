import React, { useState } from "react";
import bank from "../images/bank.png";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { Container } from "@mui/system";
import { Card } from "@mui/material";
import applicationImg1 from "../images/application1.jpg";
import applicationImg2 from "../images/Application2.jpg";
import applicationImg3 from "../images/application3.jpg";
const Prf_h1 = styled.h1`
  font-size: 2.5em;
  padding-bottom: 30px;
`;
const Card_img = styled.span`
  width: 100%;
  display: inline-block;
  img {
    border-radius: 8px;
  }
`;

const Card_h1 = styled.h1`
  font-weight: 400;
  font-size: 1.4em;
  opacity: 0.8;
  padding: 20px 0px;
`;
const Card_p = styled.p`
  font-weight: 300;
  font-size: 0.9em;
  opacity: 0.65;
  line-height: 125%;
  font-family: "Open Sans", sans-serif;
`;
const Hr = styled.hr`
  margin-top: 100px;
  display: block;
  border: none;
  height: 1px;
  width: 100%;
  background: linear-gradient(
    to right,
    #17181d,
    rgba(255, 255, 255, 0.2),
    #17181d
  );
`;
// data

function Application() {
  const data = [
    {
      id: "01",
      name: "JPM Tokenizes on Aave",
      description:
        "In addition, the exhibition reverses the cultural conversion rate, realizing marketing as part of production. Targeted traffic produces a business plan. The interaction of the corporation and the client distorts institutional buying and selling",
      img: `${applicationImg1}`,
    },
    {
      id: " 02",
      name: "KKR Tokenizes on AVAX",
      description:
        "The interaction of the corporationand the client distorts institutional buyingand selling. In addition, the exhibitionreverses the cultural conversion rate, realizing marketing as part of production",
      img: `${applicationImg2}`,
    },
    {
      id: "03",
      name: "Apollo Prov HELOC",
      description:
        "Targeted traffic produces a business plan.The interaction of the corporationand the client distorts institutionalbuying and selling. Targeted trafficproduces a business plan.",
      img: `${applicationImg3}`,
    },
  ];
  const [dataList, setDataList] = useState(data);
  return (
    <>
      <div className="applicationSection">
        <Container>
          <Prf_h1>
            <span> The Proof</span> <br />
            is in the Application
          </Prf_h1>
          <div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {dataList.map((itm) => {
                const { id, name, description, img } = itm;
                return (
                  <Grid item md={4} key={id}>
                    <Card
                      sx={{
                        height: {
                          //   sm: 100,
                          //   md: 100,
                          lg: 400,
                        },
                        padding: "8px",
                        border: "1px solid rgba(255,255,255,.15)",
                        background: "transparent",
                        color: "#fff",
                        background:
                          " linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                        borderRadius: "10px",
                      }}
                    >
                      <Card_img>
                        <img src={img} alt="" />
                      </Card_img>
                      <Card_h1>{name}</Card_h1>
                      <Card_p>{description}</Card_p>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <Hr></Hr>
        </Container>
      </div>
    </>
  );
}

export default Application;
