


// import React, { useState } from 'react';

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     pucNumber: '',
//     profileImage: null,
//     username: '',
//     password: '',
//     email: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, profileImage: e.target.files[0] });
//   };

//   const handleSave = () => {
//     console.log('Save:', formData);
//     // Add save logic here
//   };

//   const handleUpdate = () => {
//     console.log('Update:', formData);
//     // Add update logic here
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">Form</h1>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="pucNumber" className="form-label">ENTER PUC NUMBER:</label>
//           <input
//             type="text"
//             id="pucNumber"
//             name="pucNumber"
//             className="form-control"
//             value={formData.pucNumber}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="profileImage" className="form-label">Profile Image:</label>
//           <input
//             type="file"
//             id="profileImage"
//             className="form-control"
//             onChange={handleImageChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="form-control"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="form-control"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="d-flex justify-content-between">
//           <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
//           <button type="button" className="btn btn-secondary" onClick={handleUpdate}>Update</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormComponent;












// import React, { useState } from "react";
// import axios from "axios";

// const ProfileForm = () => {
//   const [formData, setFormData] = useState({
//     pucNumber: "",
//     name: "",
//     password: "",
//     email: "",
//   });
//   const [profileImage, setProfileImage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setProfileImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("pucNumber", formData.pucNumber);
//     data.append("name", formData.name);
//     data.append("password", formData.password);
//     data.append("email", formData.email);
//     if (profileImage) {
//       data.append("profileImage", profileImage);
//     }

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/profile`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Profile saved successfully!");
//       console.log(response.data);
//     } catch (err) {
//       console.error("Error saving profile", err);
//       alert("Failed to save profile.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
//       <h2 style={{ textAlign: "center" }}>Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>ENTER PUC NUMBER:</label>
//         <input
//           type="text"
//           name="pucNumber"
//           value={formData.pucNumber}
//           onChange={handleChange}
//           className="form-control"
//         />

//         <br />
//         <label>Profile Image:</label>
//         <input type="file" onChange={handleFileChange} className="form-control" />

//         <br />
//         <label>Username:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="form-control"
//         />

//         <br />
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           className="form-control"
//         />

//         <br />
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="form-control"
//         />

//         <br />
//         <button type="submit" className="btn btn-primary">Save</button>
//         <button type="button" className="btn btn-secondary" style={{ float: "right" }}>Update</button>
//       </form>
//     </div>
//   );
// };

// export default ProfileForm;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProfileList = () => {
//   const [profiles, setProfiles] = useState([]);

//   // Fetch all profiles
//   const fetchProfiles = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/all-get-puc-profiles`);
//       setProfiles(response.data.data);
//     } catch (error) {
//       console.error("Error fetching profiles:", error);
//     }
//   };

//   // Delete a profile
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this profile?")) return;
//     try {
//       await axios.delete(`${process.env.REACT_APP_API_URL}/delete-profile/${id}`);
//       alert("Profile deleted successfully");
//       fetchProfiles(); // Refresh list
//     } catch (error) {
//       console.error("Error deleting profile:", error);
//       alert("Failed to delete profile");
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   return (
//     <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
//       <h2>All Profiles</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th>#</th>
//             <th>PUC Number</th>
//             <th>Profile Image</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {profiles.map((profile, index) => (
//             <tr key={profile._id}>
//               <td>{index + 1}</td>
//               <td>{profile.pucNumber}</td>
//               <td>
//                 {profile.profileImage ? (
//                   <img src={`${process.env.REACT_APP_API_URL}/${profile.profileImage}`} alt="Profile" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
//                 ) : (
//                   "N/A"
//                 )}
//               </td>
//               <td>{profile.name}</td>
//               <td>{profile.email}</td>
//               <td>{profile.password}</td>
//               <td>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(profile._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProfileList;







import React, { useState, useEffect } from "react";
import axios from "axios";
import ppclogo from './Assets/ppclogo.png';

const ProfileManager = () => {
  const [formData, setFormData] = useState({
    pucNumber: "",
    name: "",
    password: "",
    email: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [editId, setEditId] = useState(null); // Used to track update mode

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Fetch profiles
  const fetchProfiles = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/all-get-puc-profiles`);
      setProfiles(res.data.data);
    } catch (err) {
      console.error("Error fetching profiles:", err);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  // Save or Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("pucNumber", formData.pucNumber);
    data.append("name", formData.name);
    data.append("password", formData.password);
    data.append("email", formData.email);
    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    try {
      if (editId) {
        await axios.put(`${process.env.REACT_APP_API_URL}/update-profile/${editId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Profile updated successfully!");
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/profile`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Profile created successfully!");
      }

      // Reset form
      setFormData({ pucNumber: "", name: "", password: "", email: "" });
      setProfileImage(null);
      setEditId(null);
      fetchProfiles();
    } catch (err) {
      console.error("Error saving/updating profile", err);
      alert("Failed to save/update profile.");
    }
  };

  // Delete profile
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this profile?")) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/delete-profile/${id}`);
      alert("Profile deleted.");
      fetchProfiles();
    } catch (err) {
      console.error("Error deleting:", err);
      alert("Failed to delete.");
    }
  };

  // Edit profile (load into form)
  const handleEdit = (profile) => {
    setFormData({
      pucNumber: profile.pucNumber,
      name: profile.name,
      password: profile.password,
      email: profile.email,
    });
    setProfileImage(null); // user can re-upload or leave as-is
    setEditId(profile._id);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>{editId ? "Update Profile" : "Create Profile"}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>PUC Number:</label>
        <input
          type="text"
          name="pucNumber"
          value={formData.pucNumber}
          onChange={handleChange}
          className="form-control"
        />

        <br />
        <label>Profile Image:</label>
        <input type="file" onChange={handleFileChange} className="form-control" />

        <br />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />

        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
        />

        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />

        <br />
        <button type="submit" className="btn btn-success">
          {editId ? "Update" : "Save"}
        </button>
        {editId && (
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={() => {
              setEditId(null);
              setFormData({ pucNumber: "", name: "", password: "", email: "" });
              setProfileImage(null);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />

      <h3>All Profiles (With PUC Number)</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>PUC</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={profile._id}>
              <td>{index + 1}</td>
              <td>{profile.pucNumber}</td>
              <td>
  <img
    src={
      profile.profileImage
        ? `http://localhost:5000/${profile.profileImage}`
        : ppclogo
    }
    alt="profile"
    style={{ width: 50, height: 50, objectFit: "cover" }}
  />
</td>

            
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>{profile.password}</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEdit(profile)}>
                  Update
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(profile._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {profiles.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center">
                No profiles with PUC Number found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileManager;
