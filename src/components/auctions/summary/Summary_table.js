import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import grpNft from "../../images/grpNft.svg";
import Paper from "@mui/material/Paper";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Box } from "@mui/system";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import { BiSearch } from "react-icons/bi";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
const TableDiv = styled.div`
  span {
    display: block;
    font-size: 1.2em;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    padding: 5px 0px;
  }
  p {
    color: #fff;
    font-weight: 500;
  }
`;
function createData(
  id,
  img,
  symboltitle,
  sgd,
  interestttle,
  interest,
  yearntitle,
  year,
  statustitle,
  status,
  timelefttitle,
  timelft
) {
  return {
    id,
    img,
    symboltitle,
    sgd,
    interestttle,
    interest,
    yearntitle,
    year,
    statustitle,
    status,
    timelefttitle,
    timelft,
  };
}

const rows = [
  createData(
    1,
    `${grpNft}`,
    "Symbol",
    "SGD / USD",
    "Interest",
    "3.2%",
    "Tenor",
    "1 year",
    "Rating",
    "AA",
    "Expiry ",
    "04/12/23"
  ),
  createData(
    2,
    `${grpNft}`,
    "Symbol",
    "SGD / USD",
    "Interest",
    "3.2%",
    "Tenor",
    "1 year",
    "Rating",
    "AA",
    "Expiry ",
    "04/12/23"
  ),
  createData(
    3,
    `${grpNft}`,
    "Symbol",
    "SGD / USD",
    "Interest",
    "3.2%",
    "Tenor",
    "1 year",
    "Rating",
    "AA",
    "Expiry ",
    "04/12/23"
  ),
  createData(
    4,
    `${grpNft}`,
    "Symbol",
    "SGD / USD",
    "Interest",
    "3.2%",
    "Tenor",
    "1 year",
    "Rating",
    "AA",
    "Expiry ",
    "04/12/23"
  ),
  createData(
    5,
    `${grpNft}`,
    "Symbol",
    "SGD / USD",
    "Interest",
    "3.2%",
    "Tenor",
    "1 year",
    "Rating",
    "AA",
    "Expiry ",
    "04/12/23"
  ),
  createData(
    6,
    `${grpNft}`,
    "Symbol",
    "SGD / USD",
    "Interest",
    "3.2%",
    "Tenor",
    "1 year",
    "Rating",
    "AA",
    "Expiry ",
    "04/12/23"
  ),
];

export default function SummaryTable() {
  return (
    <TableDiv>
      <TableContainer
        component={Paper}
        sx={{
          background:
            "linear-gradient(270deg, #1B2538 0%, rgba(38, 41, 56, 0.81) 120.47%)",
          boxShadow: "0px",
          borderRadius: "10px",
          padding: "10px",
          color: "#fff",
          border: "1px solid rgba(255,255,255,.2)",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{
                      display: "flex",
                      gap: "40px",
                      alignItems: "center",
                    }}
                  >
                    <img src={row.img} alt="" className="imgwidth" />
                    <Box>
                      <span>{row.symboltitle}</span>
                      <p>{row.sgd}</p>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box>
                    <span>{row.interestttle}</span>
                    <p>{row.interest}</p>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box>
                    <span>{row.yearntitle}</span>
                    <p>{row.year}</p>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box>
                    <span>{row.statustitle}</span>
                    <p>{row.status}</p>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    paddingRight: "40px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                      justifyContent: "right",
                    }}
                  >
                    <Box>
                      <span>{row.timelefttitle}</span>
                      <p>{row.timelft}</p>
                    </Box>
                    <Box sx={{ fontSize: "3em", color: "#fff" }}>
                      <BsArrowRightSquareFill />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Select
            placeholder=" Item per page: 5"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: "200px",
              height: "100%",
              background: "#383b47",
              color: "#fff",
              fontWeight: "800",
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Box
              sx={{
                background: "#fff",
                color: "#000",
                padding: "0px",
                margin: "0px",
              }}
            >
              <Option
                sx={{
                  background: "#fff",
                  color: "#000",
                }}
                value="dog"
              >
                Item per page: 5
              </Option>
              <Option
                sx={{
                  background: "#fff",
                  color: "#000",
                }}
                value="fish"
              >
                Item per page:10
              </Option>
              <Option
                sx={{
                  background: "#fff",
                  color: "#000",
                }}
                value="bird"
              >
                Item per page:15
              </Option>
            </Box>
          </Select>
          <Pagination
            count={10}
            variant="outlined"
            sx={{
              background: "#fff",
              padding: "10px",
              borderRadius: "15px",
            }}
          />
        </Box>
      </TableContainer>
    </TableDiv>
  );
}
