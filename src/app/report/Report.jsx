import React, { useState } from 'react'
import LeftSidebar from '../../components/Sidebar';
import { VscThreeBars } from 'react-icons/vsc';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import { Line } from 'react-chartjs-2';
// import {Chart as ChartJS} from 'chart.js/auto'
// import analysisData from '../../services/analysisData.json';
import { IoIosArrowForward } from 'react-icons/io';

export default function Report() {
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

        <main>
        <div className="flex justify-between items-center p-4 ">
          <h1 className="font-bold text-2xl ">Add Attribute </h1>
          <div className="flex gap-4 items-center ">
            <h1>Dashboard </h1>
            <IoIosArrowForward />
            <h1>Report</h1>
            <IoIosArrowForward />
            <h1> Report </h1>
          </div>
        </div>

        
         
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
    </div>
  )
}
