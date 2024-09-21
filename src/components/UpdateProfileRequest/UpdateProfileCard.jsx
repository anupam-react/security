import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileDetailsCard from "./ProfileDetailsCard";

const UpdateProfileCard = ({requestNumber, user, department, contact, location,}) => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-between gap-2 bg-white border border-t-[#F02946] rounded-lg shadow-lg p-4 mb-4">
      <div>
      <ProfileDetailsCard requestNumber ={requestNumber} user={user} department={department} contact={contact} location = {location}/>
      </div>
      <div>
      <p className="text-[#F02946] text-[24px]">Profile Update</p>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="font-bold">Name</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Date Of Birth</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Address</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Aadhar No.</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Father/Husband Name</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">Bank Account Number</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">IFSC Code</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
        <div>
          <p className="font-bold">PDF</p>
          <div className="shadow-lg p-4 w-[150px] rounded-lg">
            Nolan Bergson
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className="flex flex-col  gap-4 mt-4">
        <div className="flex justify-end">
          <img src="../Vector (66).png" alt="" className="w-[20px] h-[25px]"/>
        </div>
          <button
             onClick={()=>{}}
            className="bg-[#94FF91] text-[32px] w-[150px] text-[#008E17]  py-2 rounded-[20px] hover:bg-green-600"
          >
            Approve
          </button>
          <button
            onClick={()=>{}}
            className="bg-[#FF9191] text-[32px] w-[150px] text-[#720202]  py-2 rounded-[20px] hover:bg-red-600"
          >
            Reject
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default UpdateProfileCard;
