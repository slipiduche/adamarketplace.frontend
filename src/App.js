import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './layouts/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import RankingStats from './layouts/RankingStats/RankingStats';
import ActivityStats from './layouts/ActivityStats/ActivityStats';
import ArtCollection from './layouts/Collections/ArtCollection';
import DomainNames from './layouts/Collections/DomainNames';
import Collectibles from './layouts/Collections/Collectibles';
import MusicCollection from './layouts/Collections/MusicCollection';
import SportsCollection from './layouts/Collections/SportsCollection';
import UtilityCollection from './layouts/Collections/UtilityCollection';
import PhotographyCollection from './layouts/Collections/PhotographyCollection';
import VirtualWorlds from './layouts/Collections/VirtualWorlds';
import TradingCards from './layouts/Collections/TradingCards';
import GasMarket from './layouts/GasMarket/GasMarket';
import Partners from './layouts/Partners/Partners';
import Blog from './layouts/Blog/Blog';
import HelpCenter from './layouts/HelpCenter/HelpCenter';
import PlatformStats from './layouts/PlatformStats/PlatformStats';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CollectionItem from './layouts/CollectionItem/CollectionItem';
import ConnectWallet from './layouts/ConnectWallet/ConnectWallet';
import { useEffect } from 'react';
import AllCollections from './layouts/Collections/AllCollections';

function App() {

  useEffect(() => {
    let resizeTimer;
    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    });
  })

  return (
    <div className="ff_poppins">

      <Router>

        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rankingstats" element={<RankingStats />} />
          <Route exact path="/activitystats" element={<ActivityStats />} />
          <Route exact path="/gasmarket" element={<GasMarket />} />
          <Route exact path='/partners' element={<Partners/>} />
          <Route exact path = '/blog' element={<Blog/>} />
          <Route exact path = '/helpcenter' element={<HelpCenter/>} />
          <Route exact path = '/platformstats' element={<PlatformStats/>} />
          <Route exact path = '/connectwallet' element={<ConnectWallet/>} />
          <Route path = '/collection/:id' element = {<CollectionItem/>} />
          <Route path = "/collections/*" element = {
            <Routes>
                <Route path={`/art`} element={<ArtCollection />} />
                <Route path={`/collectibles`} element={<Collectibles/>} />
                <Route path={`/domainnames`} element={<DomainNames />} />
                <Route path={`/music`} element={<MusicCollection/>} />
                <Route path={`/photography`} element={<PhotographyCollection/>} />
                <Route path={`/virtualworlds`} element={<VirtualWorlds/>} />
                <Route path={`/sports`} element={<SportsCollection/>} />
                <Route path={`/tradingcards`} element={<TradingCards/>} />
                <Route path={`/utility`} element={<UtilityCollection/>} />
                <Route path={`/all`} element={<AllCollections/>} />
            </Routes>
          } />


        </Routes>

        <Footer />

      </Router>


    </div>
  );
}

export default App;
