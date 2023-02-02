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
import AuctionForm from "./AuctionForm";
import CircularProgress from "@mui/material/CircularProgress";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const TableDiv = styled.div`
  span {
    display: block;
    font-size: 0.8em;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    strong {
      font-size: 1.2em;
      color: #fff;
    }
  }
  p {
    color: #fff;
    font-weight: 400;
    font-size: 1em;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    gap: 4px;
    align-items: center;
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

const BtmHR = styled.hr`
  background: rgba(255, 255, 255, 0.12);
  height: 1px;
  width: 100%;
  border: none;
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
function JustAuction(props) {
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
          <FeatureH1>Auction</FeatureH1>

          <Box
            sx={{
              padding: "20px 20px 20px",
              borderRadius: "10px",
              margin: "25px 0px 10px",
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
              <Grid item md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRight: "1px solid rgba(255,255,255,.2)",
                  }}
                >
                  <TableDiv>
                    <span>
                      <strong>0.06535</strong> ETH
                    </span>
                    <p>Auctioned</p>
                  </TableDiv>
                  <Box
                    sx={{
                      width: "50px",
                    }}
                  >
                    <img src={tether} alt="" />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRight: "1px solid rgba(255,255,255,.2)",
                  }}
                >
                  <TableDiv>
                    <span>
                      <strong>1,862</strong>
                    </span>
                    <p>
                      Total lots <AiOutlineQuestionCircle />
                    </p>
                  </TableDiv>
                </Box>
              </Grid>
              <Grid item md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRight: "1px solid rgba(255,255,255,.2)",
                  }}
                >
                  <TableDiv>
                    <span>
                      <strong>5d 11h 50m</strong>
                    </span>
                    <p>End in</p>
                  </TableDiv>
                  <Box
                    sx={{
                      width: "80px",
                    }}
                  >
                    <CircularProgress variant="determinate" value={75} />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderRight: "1px solid rgba(255,255,255,.2)",
                  }}
                >
                  <TableDiv>
                    <span>
                      <strong>0.06535</strong> ETH per ETH
                    </span>
                    <p>
                      Current price <AiOutlineQuestionCircle />
                    </p>
                  </TableDiv>
                </Box>
              </Grid>
              <Grid item md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <TableDiv>
                    <span>
                      <strong>0.05273</strong> ETH per ETH
                    </span>
                    <p>
                      Minimum price <AiOutlineQuestionCircle />
                    </p>
                  </TableDiv>
                </Box>
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
              <Grid item xs={6}>
                <AuctionForm />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default JustAuction;
