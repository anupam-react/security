import React from "react";
import TotalDeploymentChart from "./TotalDeploymentChart";
import CheckOutChart from "./CheckOutChart";
import PresentChart from "./PresentChart";
import ShortageChart from "./ShortageChart";
import DoubleDuty from "./DoubleDuty";
import Late from "./Late";
import { useNavigate } from "react-router-dom";

const DailyDeploy = () => {
    const navigate = useNavigate()
  return (
    <div>
      <p className="font-bold text-[40px] pb-4">Daily Deployment</p>
      <div className="grid grid-cols-2 gap-4">
        <div className=" border-2 border-[#F02946] rounded-[20px] p-4 cursor-pointer" onClick={()=>navigate('/daily-deploy/total-deploy') }>
          <div className="flex gap-4 items-center mb-4">
            <img src="../Group 1361.png" alt="" />
            <p className="font-[500]">Total Deployment</p>
          </div>
          <TotalDeploymentChart />
        </div>
        <div className=" border-2 border-[#F02946] rounded-[20px] p-4 cursor-pointer" onClick={()=>navigate('/daily-deploy/checkout') }>
          <div className="flex gap-4 items-center mb-4">
            <img src="../Group 1363.png" alt="" />
            <p className="font-[500]">Early Check Out</p>
          </div>
          <CheckOutChart />
        </div>
        <div className=" border-2 border-[#F02946] rounded-[20px] p-4 cursor-pointer" onClick={()=>navigate('/daily-deploy/present') }>
          <div className="flex gap-4 items-center mb-4">
            <img src="../Group 1363 (1).png" alt="" />
            <p className="font-[500]">Present</p>
          </div>
          <PresentChart />
        </div>
        <div className=" border-2 border-[#F02946] rounded-[20px] p-4">
          <div className="flex gap-4 items-center mb-4">
            <img src="../Group 1363 (2).png" alt="" />
            <p className="font-[500]">Shortage</p>
          </div>
          <ShortageChart />

        </div>
        <div className=" border-2 border-[#F02946] rounded-[20px] p-4">
          <div className="flex gap-4 items-center mb-4">
            <img src="../Group 1363 (3).png" alt="" />
            <p className="font-[500]">Double Duty</p>
          </div>
          <DoubleDuty />

        </div>
        <div className=" border-2 border-[#F02946] rounded-[20px] p-4">
          <div className="flex gap-4 items-center mb-4">
            <img src="../Group 1363 (4).png" alt="" />
            <p className="font-[500]">Late</p>
          </div>
          <Late />

        </div>
        <div className=" border-2 border-[#F02946] rounded-[20px] p-4">
          <div className="flex gap-4 items-center mb-4">
            <img src="../Group 1363 (5).png" alt="" />
            <p className="font-[500]">Unmapped Site</p>
          </div>
         <img src="../Group 1428.png" alt="" className="w-full"/>

        </div>
       
      
       
      </div>
    </div>
  );
};

export default DailyDeploy;
