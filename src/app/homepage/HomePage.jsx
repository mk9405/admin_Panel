import React, { useState } from "react";
import Header from "../../components/Header";
import AnalysisCart from "../../components/AnalysisCart";
import TopProducts from "../../components/TopProducts";
import TopCountrySales from "../../components/TopCountrySales";
import BestShopSeller from "../../components/BestShopSeller";
import ProductOverview from "../../components/ProductOverview";
import Orders from "../../components/Orders";
import Earnings from "../../components/Earning";
import NewComments from "../../components/NewComments";
import Footer from "../../components/Footer";
import LeftSidebar from "../../components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-row ">
      <div className={show ? "w-[250px] duration-500" : "w-0 duration-500"}>
        <LeftSidebar />
      </div>

      <div className={show ? " w-[60%]  flex-1": "w-full"}>
        <header className="flex items-center  justify-between">
          <div  className="text-3xl pl-2">
          <VscThreeBars onClick={handle}  />
          </div>
          <Header />
        </header>

        <main className="mx-5 justify-center dark:bg-slate-800">
          <div>
            <AnalysisCart />
          </div>
          <div className="flex">
            <TopProducts />
            <TopCountrySales />
          </div>
          <div className="flex">
            <BestShopSeller />
            <ProductOverview />
          </div>
          <div className="flex">
            <Orders />
            <Earnings />
          </div>
          <div>
            <NewComments />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
