'use client';
import React from 'react';

// Utility function to format the date
function formatDate(dateString) {
  if (!dateString) return 'N/A'; // Return 'N/A' if date is undefined or empty

  // Extract the first 10 characters (YYYY-MM-DD)
  return dateString.slice(0, 10);
}

async function fetchVendorData() {
  const apiUrl =
    'http://is1:8000/sap/opu/odata/sap/ZVENDOR_DETAILS_SRV_01/VENDOR_DETAILSET?$filter=IndKey%20eq%20%27ZISU%27';
  
  const username = 'Nasir';
  const password = 'Nasir@123';

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data.d.results || [];
}

const TablePage = async () => {
  let vendorData = [];

  try {
    vendorData = await fetchVendorData();
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }

  const handleAddNewClick = () => {
    console.log('Add New clicked');
    // Handle Add New click logic here
  };

  return (
    <div>
      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-6 mb-6 mt-6">
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">308</h2>
          <p className="text-sm text-gray-600">Pending Orders</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">392</h2>
          <p className="text-sm text-gray-600">Active Orders</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">85</h2>
          <p className="text-sm text-gray-600">Active Meter Reader</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">63</h2>
          <p className="text-sm text-gray-600">Completed Orders</p>
        </div>
      </div>
      
      <div>
        {/* Tabs Section */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-orange-400 text-black rounded-lg ">
            Pending Assignment (308)
          </button>
          <button className="px-4 py-2 bg-blue-500 text-black rounded-lg">
            Active (392)
          </button>
          <button className="px-4 py-2 bg-teal-600 text-black rounded-lg">
            History (203)
          </button>
        </div>

        {/* Data Table Section */}
        <table className="table-auto w-full text-left border-collapse mt-6 px-4 ">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-red-800 text-white text-lg">Vendor Number</th>
              <th className="px-6 py-3 bg-red-800 text-white text-lg">Vendor Name</th>
              <th className="px-6 py-3 bg-red-800 text-white text-lg">Email id</th>
              <th className="px-6 py-3 bg-red-800 text-white text-lg">Phone No</th>
              <th className="px-6 py-3 bg-red-800 text-white text-lg">Location</th>
              <th className="px-6 py-3 bg-red-800 text-white text-lg">Vendor Details</th>
              <th className="px-6 py-3 bg-red-800 text-white text-lg">Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {vendorData.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No data available
                </td>
              </tr>
            ) : (
              vendorData.map((vendor, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                  <td className="text-black px-6 py-4 border text-center">{vendor.Vendor}</td>
                  <td className="text-black  px-6 py-4 border">{vendor.VendorName}</td>
                  <td className="text-black px-6 py-4 border">{vendor.Emailid}</td>
                  <td className="text-black px-6 py-4 border">{vendor.TelphnNum}</td>
                  <td className="text-black px-6 py-4 border">{vendor.Location}</td>
                  <td className="text-black px-6 py-4 border">{vendor.VendDetails}</td>
                  <td className="text-black px-6 py-4 border">{formatDate(vendor.CreationDate)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePage;
