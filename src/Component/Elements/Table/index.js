import Table from "react-bootstrap/Table";
import { BsEyeFill } from "react-icons/bs";
import { LiaPenSolid } from "react-icons/lia";
import { BiChevronDown } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";
import tableData from "../../utils/tableData/tableData.json";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "../Select button";

function TableData() {
  const [show, setShow] = useState(false);
  const [rowId , setRowId]=useState(null)

  const handleClose = () => setShow(false);
  const handleShow = (id) =>{
    console.log("this is id" ,id);
    setShow(true)
  }
  return (
    <div>
      <Table responsive="lg" className="table-bordered rounded">
        <thead>
          <tr className="tableHeading">
            <th className="text-center"></th>
            <th className="text-center">
              Mon 31.07
              <p className="text-center">
                <BsEyeFill />
              </p>
            </th>
            <th className="text-center">
              Tue 31.07
              <p className="text-center">
                <BsEyeFill />
              </p>
            </th>
            <th className="text-center">
              Wed 31.07
              <p className="text-center">
                <BsEyeFill />
              </p>
            </th>
            <th className="text-center">
              Th 31.07
              <p className="text-center">
                <BsEyeFill />
              </p>
            </th>
            <th className="text-center">
              Fri 31.07
              <p className="text-center">
                <BsEyeFill />
              </p>
            </th>
            <th className="text-center">
              Sat 31.07
              <p className="text-center">
                <BsEyeFill />
              </p>
            </th>
            <th className="text-center">
              Sun 31.07
              <p className="text-center">
                <BsEyeFill />
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={7}
              style={{ backgroundColor: "#FF891D", color: "white" }}
            >
              ProjectName 21 Shifts{" "}
            </td>
            <td
              className="d-flex justify-content-end"
              style={{
                backgroundColor: "#FF891D",
                color: "white",
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <span>
                <LiaPenSolid />
              </span>
              <span>
                <BiChevronDown />
              </span>
            </td>
          </tr>

          {tableData.map((row ,index) => (
            
            <tr >
             
              <td className="text-center align-middle" key={row.id}> <button onClick={ ()=>handleShow(index)} className="bg-transparent" style={{border:"none" , fontSize:"24px"}}>{row.value2}</button>{" "}</td>
              <td className="text-center align-middle ">
                <button onClick={handleShow} className="bg-transparent" style={{border:"none" , fontSize:"24px"}}>{row.value2}</button>{" "}
              </td>
              <td className="text-center align-middle "> <button onClick={handleShow} className="bg-transparent" style={{border:"none" , fontSize:"24px"}}>{row.value2}</button>{" "}</td>
              <td className="text-center align-middle "> <button onClick={handleShow} className="bg-transparent" style={{border:"none" , fontSize:"24px"}}>{row.value3}</button>{" "}</td>
              <td className="text-center align-middle "> <button onClick={handleShow} className="bg-transparent" style={{border:"none" , fontSize:"24px"}}>{row.value4}</button>{" "}</td>
              <td className="text-center align-middle "> <button onClick={handleShow} className="bg-transparent" style={{border:"none" , fontSize:"24px"}}>{row.value5}</button>{" "}</td>
              <td className="text-center align-middle "> <button onClick={handleShow} className="bg-transparent" style={{border:"none" , fontSize:"24px"}}>wrong</button>{" "}</td>
            </tr>
          ))}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Shift Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <label>First Name</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div>
                  <label>First Name</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="label-dropdown">
                  <label>Main activity</label>
                  <Select seltitle="Train Ride" />
                </div>
                <div className="label-dropdown">
                  <label>Overnight Stay</label>
                  <Select seltitle="Select Yes or No" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <label>From</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div>
                  <label>To</label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <p>Add Activity + -</p>
              <div>
                <label>Main Activity: Train Travel</label>
              </div>
              <div>
                <label>Activity: Travel Time Home</label>
              </div>
              <div className="mt-3">
              <label>Note</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Please book all activities correctly and include travel times before and after the main activity"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </tbody>
      </Table>
    </div>
  );
}

export default TableData;
