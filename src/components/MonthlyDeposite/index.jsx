import React from "react";
import Table from "../common/Table";
import Select from "react-select";

const MonthlyDeposite = () => {
  const columns = [
    { Header: "Site Id", accessor: "siteId" },
    { Header: "Site Name", accessor: "siteName" },
    { Header: "City", accessor: "city" },
    { Header: "State", accessor: "state" },
    { Header: "Man Day Required", accessor: "manDayRequired" },
    { Header: "Duty Done", accessor: "dutyDone" },
    { Header: "Short Man Day", accessor: "shortManDay" },
    { Header: "Stability Coefficient", accessor: "stabilityCoefficient" },
  ];

  const data = [
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },
    {
      siteId: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      manDayRequired: "Jaxson Culhane",
      dutyDone: "01",
      shortManDay: "03-05-2024 At 06:00am",
      stabilityCoefficient: "Lorem Ipsum",
    },

    // Add more data objects as needed...
  ];

  const monthOptions = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];

  const yearOptions = Array.from(new Array(50), (val, index) => {
    const year = 2024 - index;
    return { label: year.toString(), value: year.toString() };
  });

  return (
    <div>
      <div className="flex justify-between px-4">
        <p className="font-bold text-[40px]">Monthly Deployment</p>
        <div className="flex gap-4">
          <div>
            <p className="font-bold pb-[5px]">Year</p>
            <Select
              className="basic-single w-[150px]"
              classNamePrefix="select"
              defaultValue={yearOptions[0]}
              name="month"
              options={yearOptions}
            />
          </div>
          <div>
            <p className="font-bold pb-[5px]">Month</p>
            <Select
              className="basic-single  w-[150px]"
              classNamePrefix="select"
              defaultValue={monthOptions[0]}
              name="month"
              options={monthOptions}
            />
          </div>
        </div>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default MonthlyDeposite;
