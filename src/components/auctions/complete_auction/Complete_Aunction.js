import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Card } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../images/flogo.png";
import tether from "../../images/tether.svg";
import ethurum from "../../images/ethurum.svg";
import roundlogo from "../../images/roundlogo.png";
import grpNft from "../../images/grpNft.svg";
import { FiHome } from "react-icons/fi";
import styled from "styled-components";
import { TiEqualsOutline } from "react-icons/ti";
import { ImHammer2 } from "react-icons/im";
import { IoMdLock } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import { IoShapesOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { BiMoon } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import CompleteTable from "./Complete_table";
const TableDiv = styled.div`
  span {
    display: block;
    font-size: 1em;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
  }
  p {
    color: #fff;
    font-weight: 500;
    font-size: 1em;
  }
`;
const drawerWidth = 240;
const Ul = styled.ul`
  list-style: none;
  padding: 10px 10px;
  li {
    padding: 0px 0px;
  }
  a {
    text-decoration: none;
  }
`;
const Hr = styled.hr`
  background: rgba(255, 255, 255, 0.12);
  height: 2px;
  width: 100%;
  border: none;
`;
const BtmHR = styled.hr`
  background: rgba(255, 255, 255, 0.12);
  height: 1px;
  width: 100%;
  border: none;
`;

const Stutaspan = styled.div`
  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9em;
    padding: 20px 0px 10px;
    display: block;
    strong {
      color: #fff;
      font-weight: 500;
    }
  }
  border-radius: 50%;
`;
const FeatureH1 = styled.h1`
  font-size: 2em;
  font-weight: 300;
`;

const BtnHdr = styled.button`
  border-radius: 5px;
  font-size: 1.6em;
  color: rgba(255, 255, 255, 0.5);
  border: none;
  width: 30px;
  height: 30px;
  background: rgba(60, 62, 75, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.1em;
  display: grid;
  place-content: center;
  cursor: pointer;
  &:nth-child(3) {
    color: #659beb;
  }
  &:last-child {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    gap: 5px;
    img {
      width: 20px;
      border-radius: 50%;
      height: 20px;
    }
    span {
      font-size: 0.84em;
      color: #fff;
    }
  }
`;
function Complete_Aunction(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <img src={logo} alt="" className="sideBarlogo" />
      <Ul>
        <li>
          <a href="#">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": { backgroundColor: "#1B2538" },
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "1.1em",
                }}
              >
                <FiHome />
                <p>Home</p>
              </Box>
            </Box>
          </a>
        </li>
        <li>
          <a href="#">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": { backgroundColor: "#1B2538" },
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "1.1em",
                }}
              >
                <TiEqualsOutline />
                <p>Deals</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  color: "rgba(255,255,255,0.6)",
                  background: "rgba(0,0,0,.15)",
                }}
              >
                <span>9</span>
              </Box>
            </Box>
          </a>
        </li>
        <li>
          <a href="#">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": { backgroundColor: "#1B2538" },
                padding: "8px 15px",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  color: "rgba(255,255,255,1)",
                  fontSize: "1.1em",
                }}
              >
                <ImHammer2 />
                <p>Aunction</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "30px",
                  height: "30px",
                  color: "rgba(255,255,255,1)",
                  background: "rgba(0,0,0,.15)",
                }}
              >
                <IoMdLock />
              </Box>
            </Box>
          </a>
        </li>
      </Ul>
      <Box
        sx={{
          background: " rgba(60, 62, 75, 0.12)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "6px",
          margin: "0px 15px",
        }}
      >
        <Ul>
          <li>
            <a href="#">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 0px 5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1.1em",
                  }}
                >
                  <BsGrid />
                  <p>Products</p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "30px",
                    color: "rgba(255,255,255,0.6)",
                    background: "rgba(0,0,0,.15)",
                  }}
                >
                  <IoIosArrowUp />
                </Box>
              </Box>
            </a>
          </li>
          <li>
            <a href="#">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 0px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1.1em",
                  }}
                >
                  <SlDiamond />
                  <p>LP</p>
                </Box>
              </Box>
            </a>
          </li>
          <li>
            <a href="#">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px 0px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    color: "rgba(255,255,255,1)",
                    fontSize: "1.1em",
                  }}
                >
                  <IoShapesOutline />
                  <p>Structured</p>
                </Box>
              </Box>
            </a>
          </li>
        </Ul>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background:
            "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
          color: "#fff",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0px 0px 0px transparent",

          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              gap: "12px",
            }}
          >
            <BtnHdr>
              <BiMoon />
            </BtnHdr>
            <BtnHdr>
              <BsBellFill />
            </BtnHdr>
            <BtnHdr>
              <FaEthereum />
            </BtnHdr>
            <BtnHdr>
              <img src={roundlogo} alt="" />
              <span>0x6e07..137e</span>
            </BtnHdr>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
              color: "#fff",
              borderRight: "1px solid rgba(255, 255, 255, 0.12)",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
              color: "#fff",
              borderRight: " 1px solid rgba(255, 255, 255, 0.12)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </div>
      <Box
        component="main"
        sx={{
          background:
            "linear-gradient(322.59deg, #141517 5.89%,#35384D 86.41%)",
          color: "#fff",
        }}
      >
        {/* Completed section */}
        <Box
          sx={{
            marginLeft: "auto",
            p: 3,
            paddingTop: "110px",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <FeatureH1>Completed Auction</FeatureH1>
          <Stutaspan>
            <span>
              Status: <strong>Concluded on Mar 23, 5pm</strong>
            </span>
          </Stutaspan>
          <Box
            sx={{
              padding: "20px 20px 20px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,.2)",
              background:
                " linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              <Grid item md={2.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: "80px",
                    }}
                  >
                    <img src={grpNft} alt="" />
                  </Box>
                  <TableDiv>
                    <span>Isser</span>
                    <p>SGD / USD</p>
                  </TableDiv>
                </Box>
              </Grid>
              <Grid item md={1.8}>
                <TableDiv>
                  <span>Asset Type</span>
                  <p>Gov Bonds</p>
                </TableDiv>
              </Grid>
              <Grid item md={1.6}>
                <TableDiv>
                  <span> Interest Rate</span>
                  <p> 2.85%</p>
                </TableDiv>
              </Grid>
              <Grid item md={1.3}>
                <TableDiv>
                  <span> TVL </span>
                  <p> 20M</p>
                </TableDiv>
              </Grid>
              <Grid item md={1.5}>
                <TableDiv>
                  <span> Quantity </span>
                  <p> 6000 lots</p>
                </TableDiv>
              </Grid>
              <Grid item md={1.3}>
                <TableDiv>
                  <span> Filled </span>
                  <p> 100%</p>
                </TableDiv>
              </Grid>
              <Grid item md={2}>
                <TableDiv>
                  <span> Clearing Price </span>
                  <p> 4.215</p>
                </TableDiv>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <BtmHR></BtmHR>
        {/* Summery */}
        <Box
          sx={{
            padding: "30px 0px",
            marginLeft: "auto",
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <FeatureH1>Summary</FeatureH1>

          <Box
            sx={{
              width: "100%",
              padding: "30px 0px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <CompleteTable />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Complete_Aunction;
