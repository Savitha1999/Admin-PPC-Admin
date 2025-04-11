// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllUserCallsTable = () => {
//   const [calls, setCalls] = useState([]);
//   const [error, setError] = useState('');

//   const fetchCalls = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-user-call`);
//       setCalls(data);
//     } catch (err) {
//       setError('Failed to fetch call entries');
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchCalls();
//   }, []);

//   const handleSoftDelete = async (id) => {
//     try {
//       await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/soft-delete/${id}`);
//       fetchCalls();
//     } catch (err) {
//       console.error('Soft delete failed', err);
//     }
//   };

//   const handleUndoDelete = async (id) => {
//     try {
//       await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/undo-delete/${id}`);
//       fetchCalls();
//     } catch (err) {
//       console.error('Undo delete failed', err);
//     }
//   };

//   return (
//     <div>
//       <h2>All User Call Entries</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Property Phone Number</th>
//             <th>Caller Phone Number</th>
//             <th>Status</th>
//             <th>Created At</th>
//             <th>Deleted?</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {calls.map((call, index) => (
//             <tr key={call._id} style={{ backgroundColor: call.isDeleted ? '#ffe6e6' : 'white' }}>
//               <td>{index + 1}</td>
//               <td>{call.propertyPhoneNumber}</td>
//               <td>{call.callerPhoneNumber}</td>
//               <td>{call.status}</td>
//               <td>{new Date(call.createdAt).toLocaleString()}</td>
//               <td>{call.isDeleted ? 'Yes' : 'No'}</td>
//               <td>
//                 {!call.isDeleted ? (
//                   <button onClick={() => handleSoftDelete(call._id)}>Soft Delete</button>
//                 ) : (
//                   <button onClick={() => handleUndoDelete(call._id)}>Undo Delete</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//           {calls.length === 0 && (
//             <tr>
//               <td colSpan="7" style={{ textAlign: 'center' }}>
//                 No entries found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllUserCallsTable;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllUserCallsTable = () => {
//   const [calls, setCalls] = useState([]);
//   const [error, setError] = useState('');

//   const fetchCalls = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-user-call`);
//       setCalls(data);
//     } catch (err) {
//       setError('Failed to fetch call entries');
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchCalls();
//   }, []);

//   const handleSoftDelete = async (id) => {
//     try {
//       await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/soft-delete/${id}`);
//       fetchCalls();
//     } catch (err) {
//       console.error('Soft delete failed', err);
//     }
//   };

//   const handleUndoDelete = async (id) => {
//     try {
//       await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/undo-delete/${id}`);
//       fetchCalls();
//     } catch (err) {
//       console.error('Undo delete failed', err);
//     }
//   };

//   const handlePermanentDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to permanently delete this entry?");
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`${process.env.REACT_APP_API_URL}/user-call/permanent-delete/${id}`);
//       fetchCalls();
//     } catch (err) {
//       console.error('Permanent delete failed', err);
//     }
//   };

  

//   return (
//     <div>
//       <h2>All User Call Entries</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Property Phone Number</th>
//             <th>Caller Phone Number</th>
//             <th>Status</th>
//             <th>Created At</th>
//             <th>Deleted?</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {calls.map((call, index) => (
//             <tr key={call._id} style={{ backgroundColor: call.isDeleted ? '#ffe6e6' : 'white' }}>
//               <td>{index + 1}</td>
//               <td>{call.propertyPhoneNumber}</td>
//               <td>{call.callerPhoneNumber}</td>
//               <td>{call.status}</td>
//               <td>{new Date(call.createdAt).toLocaleString()}</td>
//               <td>{call.isDeleted ? 'Yes' : 'No'}</td>
//               <td>
//                 {!call.isDeleted ? (
//                   <>
//                     <button onClick={() => handleSoftDelete(call._id)}>Soft Delete</button>
//                     <button onClick={() => handlePermanentDelete(call._id)} style={{ marginLeft: '10px', color: 'red' }}>
//                       Permanent Delete
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleUndoDelete(call._id)}>Undo Delete</button>
//                     <button onClick={() => handlePermanentDelete(call._id)} style={{ marginLeft: '10px', color: 'red' }}>
//                       Permanent Delete
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//           {calls.length === 0 && (
//             <tr>
//               <td colSpan="7" style={{ textAlign: 'center' }}>
//                 No entries found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllUserCallsTable;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUserCallsTable = () => {
  const [calls, setCalls] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchCalls = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-user-call`);
      setCalls(data);
    } catch (err) {
      setError('Failed to fetch call entries');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCalls();
  }, []);

  const handleSoftDelete = async (id) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/soft-delete/${id}`);
      fetchCalls();
    } catch (err) {
      console.error('Soft delete failed', err);
    }
  };

  const handleUndoDelete = async (id) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/user-call/undo-delete/${id}`);
      fetchCalls();
    } catch (err) {
      console.error('Undo delete failed', err);
    }
  };

  const handlePermanentDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete this entry?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/user-call/permanent-delete/${id}`);
      fetchCalls();
    } catch (err) {
      console.error('Permanent delete failed', err);
    }
  };

  // Filter function for search and date range
  const filterData = (data) => {
    return data.filter(item => {
      const createdAt = new Date(item.createdAt).getTime();
      const from = fromDate ? new Date(fromDate).getTime() : null;
      const to = endDate ? new Date(endDate).getTime() : null;

      const matchesSearch = search ? String(item.ppcId).toLowerCase().includes(search.toLowerCase()) : true;
      const matchesStartDate = from ? createdAt >= from : true;
      const matchesEndDate = to ? createdAt <= to : true;

      return matchesSearch && matchesStartDate && matchesEndDate;
    });
  };

  const filteredCalls = filterData(calls);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Search Interest Requests</h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          width: "80%",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          marginBottom: "20px"
        }}
      >
        <div className="mb-3">
          <label htmlFor="searchInput" className="form-label fw-bold">Search PPC ID</label>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Enter PPC ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fromDate" className="form-label fw-bold">From Date</label>
          <input
            type="date"
            id="fromDate"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="endDate" className="form-label fw-bold">End Date</label>
          <input
            type="date"
            id="endDate"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
        </div>
      </form>

      <h2>All User Call Entries</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th>#</th>
      <th>PPC ID</th>
      <th>Caller Phone</th>
      <th>Status</th>
      <th>Property Phone</th>
      <th>Property Mode</th>
      <th>Property Type</th>
      <th>Posted By</th>
      <th>Area</th>
      <th>City</th>
      <th>District</th>
      <th>State</th>
      <th>Best Time to Call</th>
      <th>Area Unit</th>
      <th>Total Area</th>
      <th>Bedrooms</th>
      <th>Facing</th>
      <th>Ownership</th>
      <th>Date</th>
      <th>Created At</th>
      <th>Updated At</th>
      <th>Deleted?</th>
      <th>Actions</th>
      <th>Delete Call</th>
    </tr>
  </thead>
  <tbody>
    {filteredCalls.map((call, index) => (
      <tr key={call._id} style={{ backgroundColor: call.isDeleted ? '#ffe6e6' : 'white' }}>
        <td>{index + 1}</td>
        <td>{call.ppcId || '-'}</td>
        <td>{call.phoneNumber || '-'}</td>
        <td>{call.status || '-'}</td>
        <td>{call.propertyPhoneNumber || '-'}</td>
        <td>{call.propertyMode || '-'}</td>
        <td>{call.propertyType || '-'}</td>
        <td>{call.postedBy || '-'}</td>
        <td>{call.area || '-'}</td>
        <td>{call.city || '-'}</td>
        <td>{call.district || '-'}</td>
        <td>{call.state || '-'}</td>
        <td>{call.bestTimeToCall || '-'}</td>
        <td>{call.areaUnit || '-'}</td>
        <td>{call.totalArea || '-'}</td>
        <td>{call.bedrooms || '-'}</td>
        <td>{call.facing || '-'}</td>
        <td>{call.ownership || '-'}</td>
        <td>{new Date(call.date).toLocaleString()}</td>
        <td>{new Date(call.createdAt).toLocaleString()}</td>
        <td>{new Date(call.updatedAt).toLocaleString()}</td>
        <td>{call.isDeleted ? 'Yes' : 'No'}</td>
        <td>
          {!call.isDeleted ? (
            <>
              <button onClick={() => handleSoftDelete(call._id)}>Soft Delete</button>
              
            </>
          ) : (
            <>
            <div>
              <button className='text-dark' onClick={() => handleUndoDelete(call._id)}>Undo Delete</button>
              </div>
            
            </>
          )}
        </td>
        <td> <div>
              <button onClick={() => handlePermanentDelete(call._id)} className='mt-5' style={{ marginLeft: '10px', color: 'red' }}>
                Permanent Delete
              </button>
              </div></td>
      </tr>
    ))}
    {filteredCalls.length === 0 && (
      <tr>
        <td colSpan="23" style={{ textAlign: 'center' }}>
          No entries found
        </td>
      </tr>
    )}
  </tbody>
</table>

    </div>
  );
};

export default AllUserCallsTable;
