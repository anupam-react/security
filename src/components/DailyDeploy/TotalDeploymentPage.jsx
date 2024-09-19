import React, { useEffect, useState } from "react";
import TotalDeploymentTable from "./TotalDeploymentTable";
import { useNavigate } from "react-router-dom";
import { fetchApiData } from "../../utiils";

const TotalDeploymentPage = () => {

const [deploy , setDeploy] = useState({})

const getSiteWiseDailyDeployment = async() =>{
const data =  await fetchApiData('https://royal-security-backend.vercel.app/api/v1/admin/getSiteWiseDailyDeployment')
setDeploy(data?.data)
}

useEffect(()=>{
  getSiteWiseDailyDeployment()
},[])

console.log(deploy)

  const navigate = useNavigate()
  const columns = [
    { Header: "Sites", accessor: "siteName" },
    { Header: "Supervisor", accessor: "deployments.C.securitySupervisors" },
    { Header: "Total Guards", accessor: "deployments.C.securityGuards" },
    { Header: "Locations", accessor: "Locations" },

  ];

 
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <img src="../Vector (68).png" alt="" className="w-[34px] h-fit cursor-pointer" onClick={()=>navigate('/daily-deploy')}/>
        <div className="flex items-center gap-[20px]">
          <p className="font-bold text-[40px]">Total Deployment</p>
          <p className="font-bold text-[24px] pt-4">10k</p>
        </div>
      </div>
      <TotalDeploymentTable columns={columns} data={deploy}/>
    </div>
  );
};

export default TotalDeploymentPage;
