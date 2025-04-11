




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import EditProperty from "./EditProperty";
import GetForm from "./DataAddAdmin/GetForm";
import AdminSetForm from "./DataAddAdmin/AdminSetForm";
import Plan from "./Plan";
import Detail from "./Detail";
import GetBuyerAssistance from "./GetBuyerAssistance";
import PropertyAssistance from "./PropertyAssistance";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/process" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

         <Route path="/edit-property" element={<EditProperty />} />
        <Route path="/mode" element={<GetForm />} />
        <Route path="/type" element={<AdminSetForm />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/property-assistance" element={<PropertyAssistance />} />

      </Routes>
    </Router>
  );
};

export default App;






// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Admin from "./Admin";
// import Dashboard from "./Dashboard";
// import EditProperty from "./EditProperty";
// import GetForm from "./DataAddAdmin/GetForm";
// import AdminSetForm from "./DataAddAdmin/AdminSetForm";
// import Plan from "./Plan";
// import Detail from "./Detail";
// import GetBuyerAssistance from "./GetBuyerAssistance";
// import PropertyAssistance from "./PropertyAssistance";

// const App = () => {
//   const [adminData, setAdminData] = useState(null);

//   // On reload, load admin data from localStorage if available
//   useEffect(() => {
//     const stored = localStorage.getItem("adminData");
//     if (stored) {
//       setAdminData(JSON.parse(stored));
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/process" element={<Navigate to="/admin" />} />

//         {/* Admin Login Page */}
//         <Route path="/admin" element={<Admin onLogin={(data) => {
//           setAdminData(data);
//           localStorage.setItem("adminData", JSON.stringify(data));
//         }} />} />

//         {/* Dashboard & other routes - pass adminData */}
//         <Route path="/dashboard/*" element={<Dashboard adminData={adminData} />} />
//         <Route path="/edit-property" element={<EditProperty adminData={adminData} />} />
//         <Route path="/mode" element={<GetForm adminData={adminData} />} />
//         <Route path="/type" element={<AdminSetForm adminData={adminData} />} />
//         <Route path="/plan" element={<Plan adminData={adminData} />} />
//         <Route path="/detail" element={<Detail adminData={adminData} />} />
//         <Route path="/property-assistance" element={<PropertyAssistance adminData={adminData} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
