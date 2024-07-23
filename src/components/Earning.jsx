import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Chart as ChartJS } from "chart.js/auto"   
import { Bar } from "react-chartjs-2";
import revenueData from "../services/revenueData.json";


export default function Earnings() {
  const [view, setView] = useState(false);
  const handleViewAll = () => {
    setView(!view);
  };

  return (
    <>
      <div className="border-2 w-[48%] m-2 h-[500px] bg-white rounded-2xl shadow-xl p-4 ">
        <div className="flex justify-between items-center py-2">
          <h1 className="font-bold text-xl"> Earnings </h1>
          <p
            onClick={handleViewAll}
            className="text-xl items-center flex gap-2 font-bold cursor-pointer text-gray-400"
          >
            ...
            <div className="absolute w-24 -translate-x-[90%] mt-20 ">
              {view && (
                <div className="shadow-xl bg-white p-1 border-2 cursor-pointer">
                  <p className="text-sm font-bold hover:text-sky-500 text-gray-700 ">
                
                    This Week 
                  </p>
                  <p className="text-sm font-bold hover:text-sky-500 text-gray-700 ">
                     
                    last Week 
                  </p>
                </div>
              )}
            </div>
          </p>
        </div>
        <div className="flex gap-4 my-4">
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-sky-500"></div>
              <div className="font-bold text-gray-400 ">
                <p>Revenue</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-xl">$37,802</p>
              <span className="text-xl text-green-500">
                <FaArrowTrendUp />
              </span>
              <p className="text-gray-400 font-bold">0.56%</p>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-sky-500"></div>
              <div className="font-bold text-gray-400 ">
                <p>Profit</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-xl">$28,305</p>
              <span className="text-xl text-green-500">
                <FaArrowTrendUp />
              </span>
              <p className="text-gray-400 font-bold">0.56%</p>
            </div>
          </div>
        </div>
        <Bar 
          data={{
            labels: revenueData.map((d) => d.label),
            datasets: [
              {
                label: "profit",
                data: revenueData.map((d) => d.profit),
              },
              {
                label: "revenue",
                data: revenueData.map((d) => d.revenue),
              },
            ]
          }}
        />
      </div>
    </>
  );
}
