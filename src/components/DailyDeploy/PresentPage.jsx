import React from "react";
import TotalDeploymentTable from "./TotalDeploymentTable";
import { useNavigate } from "react-router-dom";
import PresentTable from "./PresentTable";

const PresentPage = () => {

  const navigate = useNavigate()
  const columns = [
    { Header: "Sites", accessor: "Sites" },
    { Header: "Supervisor", accessor: "Supervisor" },
    { Header: "Total Guards", accessor: "TotalGuards" },
    { Header: "Locations", accessor: "Locations" },

  ];

  const data = [
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    {
      Sites: "Site 1",
      Supervisor: "02",
      TotalGuards: "14",
      Locations: "Lorem Ipsum",
    },
    
    
  ];
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <img src="../Vector (68).png" alt="" className="w-[34px] h-fit cursor-pointer" onClick={()=>navigate('/daily-deploy')}/>
        <div className="flex items-center gap-[20px]">
          <p className="font-bold text-[40px]">Present</p>
          <p className="font-bold text-[24px] pt-4">10k</p>
        </div>
      </div>
      <PresentTable columns={columns} data={data}/>
    </div>
  );
};

export default PresentPage;
