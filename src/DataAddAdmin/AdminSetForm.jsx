





import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function AdminSetForm() {
  const [formData, setFormData] = useState({
    propertyMode: "",
    propertyType: "",
    bankLoan: "",
    negotiation: "",
    ownership: "",
    bedrooms: "",
    kitchen: "",
    kitchenType: "",
    balconies: "",
    floorNo: "",
    areaUnit: "",
    propertyApproved: "",
    propertyAge: "",
    postedBy: "",
    facing: "",
    salesMode: "",
    salesType: "",
    furnished: "",
    lift: "",
    attachedBathrooms: "",
    western: "",
    numberOfFloors: "",
    carParking: "",
    bestTimeToCall: "",
  });

  const [excelFile, setExcelFile] = useState(null);

  const [dataList, setDataList] = useState([]);
  const [activeField, setActiveField] = useState("propertyMode");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch`);
      setDataList(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  // Handle Excel File Selection
  const handleFileChange = (e) => {
    setExcelFile(e.target.files[0]);
  };

  // Upload Excel File
  const handleUploadExcel = async () => {
    if (!excelFile) {
      alert("Please select an Excel file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", excelFile); // This should match 'file' in backend

    console.log("Uploading file:", excelFile.name);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/upload-excel`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response:", response.data);
      alert(response.data.message);
      fetchData(); // Refresh the table if needed
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
    }
  };


  const handleAddField = async () => {
    if (!formData[activeField]) {
      alert(`Please enter a value for ${activeField}`);
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/add`, {
        field: activeField,
        value: formData[activeField],
      });

      alert(`${activeField} added successfully!`);
      setFormData({ ...formData, [activeField]: "" });
      fetchData();
    } catch (error) {
      console.error(`Error adding ${activeField}:`, error);
    }
  };

  const handleEditField = async (field, value) => {
    const newValue = prompt(`Enter the updated value for ${field}:`);
    if (!newValue) return;

    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/update`, {
        field,
        value,
        newValue,
      });

      alert(`${field} updated successfully!`);
      fetchData();
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
    }
  };

  const handleDeleteField = async (field, value) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete this ${field}?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/delete`, {
        data: { field, value },
      });

      alert(`${field} deleted successfully!`);
      fetchData();
    } catch (error) {
      console.error(`Error deleting ${field}:`, error);
    }
  };

  const handleSetActiveField = (field) => {
    setActiveField(field);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [activeField]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Property Management</h1>
      {/* <div className="col-md-6">
        <label className="form-label">Upload Excel File:</label>
        <input
          type="file"
          className="form-control"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          id="excelFile"
        />
      </div> */}

<div className="col-md-6">
<label className="form-label">Upload Excel File:</label>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: "2px dashedr gba(10, 90, 129, 0.72)",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#f8f9fa",
      cursor: "pointer",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    }}
    onClick={() => document.getElementById("excelFile").click()}
  >
    <i className="bi bi-file-earmark-arrow-up" style={{ fontSize: "2rem", color: "#007bff" }}></i>
    <span style={{ fontSize: "1rem", color: "#333" }}>Click to upload Excel file</span>
    <input
      type="file"
      id="excelFile"
      accept=".xlsx, .xls"
      onChange={handleFileChange}
      style={{ display: "none" }}
    />
  </div>
</div>


      <div className="col-md-6 d-flex align-items-end">
        <button className="btn mt-3 btn-success" onClick={handleUploadExcel}>
          Upload Excel
        </button>
      </div>

      <div className="row mb-4  mt-4">
        <div className="col-md-6">
          <label className="form-label">Select Field to Manage:</label>
          <select
            className="form-select"
            value={activeField}
            onChange={(e) => handleSetActiveField(e.target.value)}
          >
            {Object.keys(formData).map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">
            {activeField.charAt(0).toUpperCase() + activeField.slice(1)}:
          </label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              name={activeField}
              value={formData[activeField] || ""}
              onChange={handleFieldChange}
            />
          
          </div>
          
        </div>
       
      </div>
      <button className="btn" style={{backgroundColor:"#0b5f7b",color:"white"}} type="button" onClick={handleAddField}>
              Add {activeField}
            </button>

      <h2 className="mb-3 mt-3">Manage {activeField.charAt(0).toUpperCase() + activeField.slice(1)}</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>{activeField}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList
              .filter((item) => item.field === activeField)
              .map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.value}</td>
          
                                <td>
                                    <span className="edit text-primary" onClick={() => handleEditField(item.field, item.value)}> <FaEdit /></span>
                                    <span className="delete text-danger fs-5" onClick={() => handleDeleteField(item.field, item.value)}><MdDeleteForever /></span>
                                </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSetForm;
