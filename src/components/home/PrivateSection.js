import React, { useState } from "react";
import bank from "../images/bank.png";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { Container } from "@mui/system";
import { Card } from "@mui/material";
const LifeCycle = styled.h1`
  font-size: 2.5em;
  padding-bottom: 30px;
`;
const Private_txt = styled.div`
  padding-top: 100px;
  h1 {
    font-size: 2.5em;
    padding-bottom: 30px;
  }
  p {
    font-weight: 300;
    line-height: 150%;
    opacity: 0.9;
  }
`;
const Card_Span = styled.span`
  color: #f6af40;
  font-weight: 800;
  font-size: 2.1em;
  line-height: 58px;
  transform: rotate(-90deg);
  display: inline-block;
`;
const Card_h1 = styled.h1`
  font-weight: 400;
  font-size: 1.5em;
  opacity: 0.8;
  padding: 20px 0px;
`;
const Card_p = styled.p`
  font-weight: 300;
  font-size: 1em;
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
const Top_Hr = styled.hr`
  display: block;
  border: none;
  height: 1px;
  width: 100%;
  margin-bottom: 80px;
  background: linear-gradient(
    to right,
    #17181d,
    rgba(255, 255, 255, 0.2),
    #17181d
  );
`;

function PrivateSection() {
  const data = [
    {
      id: "01",
      name: "Tokenization",
      description: "Securitize and auction bounds in a streamlined process",
    },
    {
      id: " 02",
      name: "Trade Execution",
      description:
        "No difference from traditional process, get constant price discovery and instant execution on trades",
    },
    {
      id: "03",
      name: "Settlement",
      description: "Instant settlement with delivery vs payment method",
    },
    {
      id: "04",
      name: "Post Trade Process",
      description:
        "Post trade processing is done automatically, saving time and cost on compliance",
    },
  ];
  const [dataList, setDataList] = useState(data);
  return (
    <>
      <div className="PrivateCreditSection">
        <Container>
          <Top_Hr></Top_Hr>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={6} sx={{ padding: "30px" }}>
              <img src={bank} alt="" />
            </Grid>
            <Grid item md={6}>
              <Private_txt>
                <h1>
                  <span>Unlock</span> Private <br />
                  Credit with DeFi
                </h1>
                <p>
                  Blockhouse uses Defi to tokenize credit derivatives <br />
                  in a compliant manner to leverage <br /> the composablity and
                  settlement advantages of publick <br />
                  blockchain infrastructure
                </p>
              </Private_txt>
            </Grid>
          </Grid>
          <LifeCycle>
            The Asset <span>Lifecycle</span>
          </LifeCycle>
          <div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {dataList.map((itm) => {
                const { id, name, description } = itm;
                return (
                  <Grid item md={3} key={id}>
                    <Card
                      sx={{
                        height: {
                          //   sm: 100,
                          //   md: 100,
                          lg: 260,
                        },
                        padding: "20px",
                        border: "1px solid rgba(255,255,255,.15)",
                        background: "transparent",
                        color: "#fff",
                        background:
                          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                      }}
                    >
                      <Card_Span>{id}</Card_Span>
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

export default PrivateSection;
