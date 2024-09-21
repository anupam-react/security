import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateProfileCard from "./UpdateProfileCard";

const UpdateProfileRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const requestData = [
    {
      requestNumber: 1,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      requestNumber: 2,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      requestNumber: 3,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      requestNumber: 4,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      requestNumber: 5,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      requestNumber: 6,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      requestNumber: 7,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  const rowsPerPage = 3;

  // Calculate pagination data
  const totalPages = Math.ceil(requestData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = requestData.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleApprove = (requestNumber) => {
    console.log(`Approved request ${requestNumber}`);
  };

  const handleReject = (requestNumber) => {
    console.log(`Rejected request ${requestNumber}`);
  };
  return (
    <div>
      <div className="flex justify-between mb-4">
        <p className="font-bold text-[40px]">Profile Update Request</p>
        <div className='flex items-center gap-4 '>
         <div className='bg-[#94FF91] rounded-[20px] px-3 py-2 font-bold h-fit'>
         Month
         </div>
         <div className='bg-[#A8A8A84D] rounded-[20px] px-3 py-2 font-bold h-fit'>
         Year
         </div>
         <img src="../Vector (66).png" alt="" className="w-[20px] h-[25px]"/>
        </div>
      </div>
      {currentData.map((request) => (
      <div className="flex flex-col gap-4">
      <UpdateProfileCard
              key={request.requestNumber}
              requestNumber={request.requestNumber}
              user={request.user}
              department={request.department}
              contact={request.contact}
              location={request.location}
              requestDetails={request.requestDetails}
              onApprove={() => handleApprove(request.requestNumber)}
              onReject={() => handleReject(request.requestNumber)}
            />
      </div>
      ))}
      <div className="flex justify-end items-center mt-4 space-x-2">
        <button
          className="px-4 py-2 rounded-lg text-black cursor-pointer"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <span className="flex items-center">
            <span className="mr-2 ">‹</span> Previous
          </span>
        </button>

        {/* Display page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#F02946] text-white"
                : "bg-[#FFAFBB] text-[#A0A0A0]"
            }`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 rounded-lg text-black cursor-pointer"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <span className="flex items-center">
            Next <span className="ml-2">›</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileRequest;
