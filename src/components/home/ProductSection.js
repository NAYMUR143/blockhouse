import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { Container } from "@mui/system";
import { Box, Card } from "@mui/material";
import borrow from "../images/borrow.png";
import trade from "../images/trade.png";
import blck1 from "../images/blck1.png";
import blck2 from "../images/blck2.png";
import blck3 from "../images/blck3.png";
import blck4 from "../images/blck4.png";
import blck5 from "../images/blck5.png";
import blck6 from "../images/blck6.png";

const BlckHs_h1 = styled.h1`
  font-size: 2.5em;
  padding-bottom: 30px;
  padding-top: 80px;
`;
const Card_img = styled.span`
  width: 120px;
  display: inline-block;
`;
const Card_h1 = styled.h1`
  font-weight: 300;
  font-size: 1.5em;
  opacity: 0.8;
  padding: 10px 0px 20px;
  strong {
    font-weight: 800;
  }
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
const Heading = styled.h1`
  font-size: 2.5em;
  padding: 20px 0px 40px;
`;

// data

function ProductSection() {
  const data = [
    {
      id: 1,
      name: "Atomic Settlement",
      description:
        "All assets purchased have T + 0 settlement, payment vs delivery system",
      img: `${blck1}`,
    },
    {
      id: 2,
      name: "End to end Trading",
      description:
        "Automated issuance, securitization, and trading workflows through tech",
      img: `${blck2}`,
    },
    {
      id: 3,
      name: "Flexible Deployment",
      description: "Can deploy infra on permissioned / permissionless pools",
      img: `${blck3}`,
    },
    {
      id: 4,
      name: "Post trade reporting",
      description:
        "Automate post trade workflows, TRACE reporting, reconciliation",
      img: `${blck4}`,
    },
    {
      id: 5,
      name: "Unique Products",
      description:
        "Create and redeem custom bundled exposures to various credit pools",
      img: `${blck5}`,
    },
    {
      id: 6,
      name: "Real-time asset data",
      description:
        "Providing standard trading data as well as real time alternative data for pricing",
      img: `${blck6}`,
    },
  ];
  const [dataList, setDataList] = useState(data);
  return (
    <>
      <div className="ProductSection">
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item md={4} sx={{ padding: "30px" }}>
              <span style={{ color: "#659BEB" }}>Products</span>
              <Heading>
                A Better Bond <br />
                <span>Trading</span> System
              </Heading>
              <Card_p>
                Providing a two sided marketplace that simplifies the issuance
                and trading process with technology driven solutions.
              </Card_p>
            </Grid>
            <Grid item md={8}>
              <Box sx={{ display: "flex", justifyContent: "end", gap: "25px" }}>
                <Card
                  sx={{
                    width: {
                      //   sm: 100,
                      md: 280,
                    },
                    padding: "20px",
                    border: "1px solid rgba(255,255,255,.15)",
                    background: "transparent",
                    color: "#fff",
                    borderRadius: "10px",
                    background: "linear-gradient(to right,#1e2533, #191c24)",
                  }}
                >
                  <Card_img>
                    <img src={borrow} alt="" />
                  </Card_img>
                  <Card_h1>
                    Blockhouse <br /> <strong>Borrow+</strong>
                  </Card_h1>
                  <Card_p>
                    Providing borrowers a full CRM to onboard their deals, as
                    well as a bond auction mechanism for seamless issuance on
                    public or private pools to reduce their cost of capital
                  </Card_p>
                </Card>
                <Card
                  sx={{
                    width: {
                      //   sm: 100,
                      md: 280,
                    },
                    padding: "20px",
                    border: "1px solid rgba(255,255,255,.15)",
                    color: "#fff",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(to right, #38322c, #282628, #1b1b21)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <Card_img>
                    <img src={trade} alt="" />
                  </Card_img>
                  <Card_h1>
                    Blockhouse <br /> <strong>Trade+</strong>
                  </Card_h1>
                  <Card_p>
                    Providing investors a traditional bond trading interface
                    with additional capabilities to create custom yield boosted
                    structured products as well as algorithmic HY investment
                    strategies
                  </Card_p>
                </Card>
              </Box>
            </Grid>
          </Grid>

          {/* data section of blockhouse */}
          <BlckHs_h1>
            Why Use <span>Blockhouse?</span>
          </BlckHs_h1>
          <div>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              {dataList.map((itm) => {
                const { id, name, description, img } = itm;
                return (
                  <Grid item md={4} key={id}>
                    <Card
                      sx={{
                        padding: "20px",
                        border: "1px solid rgba(255,255,255,.15)",
                        background: "transparent",
                        color: "#fff",
                        background:
                          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "70% auto",
                        }}
                      >
                        <div>
                          <Card_h1>{name}</Card_h1>
                          <Card_p>{description}</Card_p>
                        </div>

                        <Card_img>
                          <img src={img} alt="" />
                        </Card_img>
                      </Box>
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

export default ProductSection;
