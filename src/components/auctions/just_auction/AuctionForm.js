import * as React from "react";
import { Box, Card } from "@mui/material";
import styled from "styled-components";
import tether from "../../images/tether.svg";
import ethurum from "../../images/ethurum.svg";

export default function AuctionForm() {
  return (
    <form action="#" className="formAuction">
      <h2>Place Order</h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "25px 0px 10px",
          alignItems: "center",

          padding: "0px 10px",
        }}
      >
        <h5>You pay</h5>
        <p>
          Balance: <strong>22.60 ETH</strong> <span>MAX</span>{" "}
        </p>
      </Box>
      <div className="boxOfamount">
        <Box>
          <span>Amount</span>
          <input type="text" placeholder="21.20349" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img src={ethurum} alt="" />
          <p>SOL</p>
        </Box>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "25px 0px 10px",
          alignItems: "center",

          padding: "0px 10px",
        }}
      >
        <h5>Max Bid Price</h5>
        <p>
          Balance: <strong>22.60 ETH</strong> <span>MAX</span>{" "}
        </p>
      </Box>
      <div className="boxOfamount">
        <Box>
          <span>Amount</span>
          <input type="text" placeholder="46,766" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img src={tether} alt="" />
          <p>ETH</p>
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "25px 0px 10px",
          alignItems: "center",

          padding: "0px 30px",
        }}
      >
        <span>Fees</span>
        <p>0.0004552</p>
      </Box>
      <input type="submit" value="Bid" />
    </form>
  );
}
