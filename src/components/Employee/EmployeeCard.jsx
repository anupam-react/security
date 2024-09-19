import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeCard = () => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-between gap-4 bg-white border border-t-[#F02946] rounded-lg shadow-lg p-4 mb-4">
      <div>
        <p className="text-[24px] font-bold">1.</p>
        <img
          src="../Ellipse 31 (1).png"
          alt=""
          className="w-[150px] h-[150px] rounded-full cursor-pointer"
          onClick={()=> navigate('/employee/profile')}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-bold">Name</p>
          <div className="shadow-lg p-4 w-[200px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Email</p>
          <div className="shadow-lg p-4 w-[200px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Aadhar No.</p>
          <div className="shadow-lg p-4 w-[200px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Father/Husband Name</p>
          <div className="shadow-lg p-4 w-[200px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Mobile</p>
          <div className="shadow-lg p-4 w-[200px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Pan No.</p>
          <div className="shadow-lg p-4 w-[200px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="font-bold">Assigned Sit</p>
          <p className="font-bold">Site Name</p>
        </div>
        <img
          src="../Group 1433 (1).png"
          alt=""
          className="w-[250px] h-[200px]"
        />
      </div>
    </div>
  );
};

export default EmployeeCard;
