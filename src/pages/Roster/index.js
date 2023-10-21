import React from "react";
import TableData from "../../Component/Elements/Table";
import ArrowButton from "../../Component/Elements/ArrowButton";
import Select from "../../Component/Elements/Select button";

const Home = () => {
  return (
    <>
      <div className="Main-right-side">
        <div className="table-heading">
          <div className="d-flex justify-content-between">
            <h2>Roster</h2>
          </div>
          <div className="dataTable p-3 my-4">
            <div className="d-flex justify-content-between mb-3 ">
              <div className="d-flex gap-2 ">
                <Select seltitle="Department"></Select>
                <Select seltitle="Department"></Select>
                <Select seltitle="Department"></Select>
              </div>
                <ArrowButton ArrowBtntitle="Week 31 31.07-06.08" />
            </div>
            <TableData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
