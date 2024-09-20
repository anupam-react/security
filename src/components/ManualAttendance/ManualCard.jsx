import React, { useRef, useState } from "react";
import ApprovalProfileCard from "../Approval/ApprovalProfileCard";
import Select from "react-select";

const ManualCard = ({
  requestNumber,
  user,
  department,
  contact,
  location,
  requestDetails,
  onApprove,
  onReject,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isAttendance, setIsAttendance] = useState(false);

  // Step 2: Reference to the hidden date input
  const dateInputRef = useRef(null);

  // Step 3: Handle the date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Step 4: Handle clicking the image to trigger the hidden input
  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Trigger the date picker
    }// Trigger click on hidden input
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="flex flex-col md:flex-row bg-[#EFEFEF] border rounded-lg shadow-lg p-4 mb-4">
      {/* Left Section */}
      <ApprovalProfileCard
        requestNumber={requestNumber}
        user={user}
        department={department}
        contact={contact}
        location={location}
      />

      {/* Right Section */}
      <div className="flex-1 mt-4 md:mt-0">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>
              <h2 className="text-[24px] font-bold ">
                Select Total Hours of Duty Today
              </h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="w-[80px] bg-[#F02946] text-white rounded-lg py-2 text-center font-bold">
                  8 Hrs
                </div>
                <div className="w-[80px] bg-white rounded-lg py-2 text-center font-bold">
                  9 Hrs
                </div>
                <div className="w-[80px] bg-white rounded-lg py-2 text-center font-bold">
                  10 Hrs
                </div>
                <div className="w-[80px] bg-white rounded-lg py-2 text-center font-bold">
                  11 Hrs
                </div>
                <div className="w-[80px] bg-white rounded-lg py-2 text-center font-bold">
                  12 Hrs
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6">
                <p className="text-[24px] font-bold">Date</p>
                <img
                  src="../Vector (75).png"
                  alt="Select Date"
                  onClick={openDatePicker}
                  className="h-fit cursor-pointer"
                />
                <input
                  ref={dateInputRef}
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="hidden"
                />
              </div>
              <p className="text-[20px] font-bold">{selectedDate}</p>
            </div>
            <button
              onClick={()=>{
                setIsAttendance(!isAttendance)
              }}
              className={isAttendance ? "bg-[#94FF91] w-[120px] px-4 text-[#008E17] h-fit  py-2 rounded-2xl" : "bg-[#BDBDBD] w-[120px] px-4  h-fit  py-2 rounded-2xl"}
            >
            {isAttendance ?  "Manual Attendance"  : "Add Manual Attendance"}
            </button>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="font-bold pb-2 text-[24px]">Site</p>
              <Select
                closeMenuOnSelect={false}
                className="w-[200px]"
                defaultValue={options[0]}
                options={options}
              />
            </div>
            <div>
              <p className="font-bold pb-2 text-[24px]">Check In Time</p>
              <input
                type="text"
                placeholder="Hours-Minutes-Seconds"
                className="shadow px-4 py-2 w-[200px] rounded-md"
              />
            </div>
            <div>
              <p className="font-bold pb-2 text-[24px]">Check Out Time</p>
              <input
                type="text"
                placeholder="Hours-Minutes-Seconds"
                className="shadow px-4 py-2 w-[200px] rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Approve / Reject Buttons */}
      </div>
    </div>
  );
};

export default ManualCard;
