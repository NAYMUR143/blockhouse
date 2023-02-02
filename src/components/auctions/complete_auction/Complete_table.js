import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const GraySpan = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`;
const WhiteSpan = styled.span`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
`;
function createData(id, Quantity, Price, Tx) {
  return { id, Quantity, Price, Tx };
}

const rows = [
  createData(1, "6,638.03", "0.06534", "0.05728"),
  createData(2, "6,638.03", "0.06534", "0.05728"),
  createData(3, "6,638.03", "0.06534", "0.05728"),
  createData(4, "6,638.03", "0.06534", "0.05728"),
  createData(5, "6,638.03", "0.06534", "0.05728"),
  createData(6, "6,638.03", "0.06534", "0.05728"),
  createData(7, "6,638.03", "0.06534", "0.05728"),
  createData(8, "6,638.03", "0.06534", "0.05728"),
];

export default function CompleteTable() {
  return (
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
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <WhiteSpan>#</WhiteSpan>
            </TableCell>
            <TableCell align="left">
              <WhiteSpan>Quantity</WhiteSpan>
            </TableCell>
            <TableCell align="right">
              <WhiteSpan> Price (ETH)</WhiteSpan>
            </TableCell>
            <TableCell align="right">
              <WhiteSpan> Tx(ETH)</WhiteSpan>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <WhiteSpan>{row.id}</WhiteSpan>
              </TableCell>
              <TableCell align="left">
                <GraySpan>{row.Quantity}</GraySpan>
              </TableCell>
              <TableCell align="right">
                <GraySpan>{row.Price}</GraySpan>
              </TableCell>
              <TableCell align="right">
                <WhiteSpan>{row.Tx}</WhiteSpan>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
