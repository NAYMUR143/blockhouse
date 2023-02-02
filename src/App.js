import "./global/global.css";
import Home from "./components/home/Home";
import Feature_Aunction from "./components/auctions/featured_auctions/Feature_Aunction";
import Complete_Aunction from "./components/auctions/complete_auction/Complete_Aunction";
import JustAuction from "./components/auctions/just_auction/JustAuction";
import Summary from "./components/auctions/summary/Summary_deals";
function App() {
  return (
    <>
      <Feature_Aunction />
    </>
  );
}

export default App;
