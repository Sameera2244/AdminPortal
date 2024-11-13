'use client'
import React, { useState } from 'react';
import { FaTasks, FaMobileAlt, FaWalking, FaUser, FaFileUpload, FaAddressCard ,FaBoxes, FaMapMarkerAlt,FaFileInvoiceDollar, FaChartPie, FaFileInvoice, FaHistory, FaLifeRing, FaTools } from 'react-icons/fa'; 
import { UserPlusIcon } from '@heroicons/react/24/outline';

const Card = ({ name, icon, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
    {icon}
    <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>
  </button>
);

const FieldManagement = ({ onBack }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleRegisterClick = () => {
    setShowPopup(true);
  };

  const handleAgentSubmit = () => {
    setShowTable(true);
  };

  return (
    <div className="p-6"> 
      <button onClick={onBack} className="bg-gray-200 p-2 rounded">Back</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-4">
      <button
  onClick={handleRegisterClick}
  className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
>
  <UserPlusIcon className="w-6 h-6 text-gray-800 mb-2" />
  <h3 className="text-xl font-semibold text-gray-800">Register New Agent</h3>
</button>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Agent No</h3>
          <input type="text" placeholder="Enter Agent No" className="mt-4 p-2 border rounded w-full" />
          <button onClick={handleAgentSubmit} className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <h3 className="text-2xl font-semibold mb-4">Register Agent</h3>
            <input type="text" placeholder="Agent Number" className="mb-4 p-2 border rounded w-full" />
            <input type="text" placeholder="Phone No" className="mb-4 p-2 border rounded w-full" />
            <input type="email" placeholder="Email" className="mb-4 p-2 border rounded w-full" />
            <input type="text" placeholder="Agent Id" className="mb-4 p-2 border rounded w-full" />
            <input type="text" placeholder="Address" className="mb-4 p-2 border rounded w-full" />
            <input type="text" placeholder="Task No" className="mb-4 p-2 border rounded w-full" />
            <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
            <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-gray-500">X</button>
          </div>
        </div>
      )}

      {showTable && (
        <div className="mt-6">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Agent No</th>
                <th className="px-4 py-2">Task</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">12345</td>
                <td className="border px-4 py-2">Task 1</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">67890</td>
                <td className="border px-4 py-2">Task 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const TaskManagement = ({ onBack }) => {
  const [view, setView] = useState('category');
  const [formType, setFormType] = useState('');

  const handleCardClick = (cardName) => {
    if (cardName === 'New Connection') {
      setView('newConnection');
    }
  };

  const handleFormNavigation = (type) => {
    setFormType(type);
    setView('applicationForm');
  };

  return (
    <div className="p-6">
      {view === 'category' && (
        <>
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Select a Category</h1>
          <button onClick={onBack} className="bg-gray-200 p-2 rounded shadow-md hover:bg-gray-300">Back</button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card name="Dumming" icon={<FaTasks className="text-4xl text-green-500" />} />
            <Card name="Device Management" icon={<FaTasks className="text-4xl text-yellow-500" />} />
            <Card name="New Connection" icon={<FaTasks className="text-4xl text-red-500" />} onClick={() => handleCardClick('New Connection')} />
          </div>
        </>
      )}

      {view === 'newConnection' && (
        <>
          <h1 className="text-2xl font-bold mb-6 text-gray-800">New Connection</h1>
          <button onClick={() => setView('category')} className="bg-gray-200 p-2 rounded shadow-md hover:bg-gray-300">Back</button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <Card 
              name="Mobile" 
              icon={<FaMobileAlt className="text-4xl text-blue-500" />} 
              onClick={() => handleFormNavigation('Mobile')} 
            />
            <Card 
              name="Walkin" 
              icon={<FaWalking className="text-4xl text-orange-500" />} 
              onClick={() => handleFormNavigation('Walkin')} 
            />
            <Card 
              name="Vendor" 
              icon={<FaUser className="text-4xl text-purple-500" />} 
              onClick={() => handleFormNavigation('Vendor')} 
            />
          </div>
        </>
      )}

      {view === 'applicationForm' && (
        <>
          <h1 className="text-2xl font-bold mb-6 text-gray-800">KYC Form - {formType}</h1>
          <button onClick={() => setView('newConnection')} className="bg-gray-200 p-2 rounded shadow-md hover:bg-gray-300">Back</button>
          
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md mt-4">
            <h2 className="font-semibold text-xl text-gray-700">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold text-gray-600">Full Name</label>
                <input type="text" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your full name" required />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-600">Date of Birth</label>
                <input type="date" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold text-gray-600">Phone Number</label>
                <input type="tel" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" required />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-600">Email Address</label>
                <input type="email" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" required />
              </div>
            </div>

            <h2 className="font-semibold text-xl text-gray-700">Address Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold text-gray-600">Address Line 1</label>
                <input type="text" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Street Address" required />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-600">City</label>
                <input type="text" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="City" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold text-gray-600">State/Province</label>
                <input type="text" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="State/Province" required />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-600">Postal Code</label>
                <input type="text" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Postal Code" required />
              </div>
            </div>

            <h2 className="font-semibold text-xl text-gray-700">Identity Verification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold text-gray-600">Upload ID Document</label>
                <input type="file" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-600">ID Document Number</label>
                <input type="text" className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your ID document number" required />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-600">ID Type</label>
              <select className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="nationalID">National ID</option>
                <option value="driverLicense">Driver's License</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded mt-4 hover:bg-blue-700">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

const Inventory = ({ onBack }) => {
  const [showTable, setShowTable] = useState(false);

  const handleGoClick = () => {
    setShowTable(true);
  };

  return (
    <div className="p-6">
      <button onClick={onBack} className="bg-gray-200 p-2 rounded">Back</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Material Name</h3>
          <input type="text" placeholder="Enter Material Name" className="mt-4 p-2 border rounded w-full" />
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Meter No</h3>
          <div className="flex mt-4">
            <input type="text" placeholder="Enter Meter No" className="p-2 border rounded w-full" />
            <button onClick={handleGoClick} className="ml-4 bg-blue-500 text-white p-2 rounded">GO</button>
          </div>
        </div>
      </div>

      {showTable && (
        <div className="mt-6">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">SNo</th>
                <th className="px-4 py-2">MNo</th>
                <th className="px-4 py-2">MName</th>
                <th className="px-4 py-2">Total Quantity</th>
                <th className="px-4 py-2">Availability</th>
                <th className="px-4 py-2">Date Modified</th>
                <th className="px-4 py-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">123</td>
                <td className="border px-4 py-2">Material A</td>
                <td className="border px-4 py-2">100</td>
                <td className="border px-4 py-2">Available</td>
                <td className="border px-4 py-2">2024-09-10</td>
                <td className="border px-4 py-2">
                  <button className="bg-yellow-500 text-white p-2 rounded">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">456</td>
                <td className="border px-4 py-2">Material B</td>
                <td className="border px-4 py-2">50</td>
                <td className="border px-4 py-2">Out of Stock</td>
                <td className="border px-4 py-2">2024-09-05</td>
                <td className="border px-4 py-2">
                  <button className="bg-yellow-500 text-white p-2 rounded">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const CustomerManagement = ({ onBack }) => (
  <div className="p-6">
    <button onClick={onBack} className="bg-gray-200 p-2 rounded">Back</button>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-4">
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Customer ID</h3>
        <input type="text" placeholder="Enter Customer ID" className="mt-4 p-2 border rounded w-full" />
        <button className="mt-4 bg-blue-500 text-white p-2 rounded">Search</button>
      </div>
      {/* <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">From Date to To Date</h3>
        <input type="date" className="mt-4 p-2 border rounded w-full" />
        <input type="date" className="mt-4 p-2 border rounded w-full" />
        <button className="mt-4 bg-blue-500 text-white p-2 rounded">Search</button>
      </div> */}
    </div>

    <table className="table-auto w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Customer Name</th>
          <th className="px-4 py-2">Customer ID</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Issue</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">John Doe</td>
          <td className="border px-4 py-2">12345</td>
          <td className="border px-4 py-2">123 Main St</td>
          <td className="border px-4 py-2">Billing Issue</td>
          <td className="border px-4 py-2">Resolved</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Jane Smith</td>
          <td className="border px-4 py-2">67890</td>
          <td className="border px-4 py-2">456 Elm St</td>
          <td className="border px-4 py-2">Installation</td>
          <td className="border px-4 py-2">Pending</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ViewHistory = ({ onBack }) => {
  const [showTable, setShowTable] = useState(false);

  const handleGoClick = () => {
    setShowTable(true);
  };

  return (
    <div className="p-6">
      <button onClick={onBack} className="bg-gray-200 p-2 rounded">Back</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-4">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">From Date</h3>
          <input type="date" className="mt-4 p-2 border rounded w-full" />
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">To Date</h3>
          <div className="flex mt-4">
            <input type="date" className="p-2 border rounded w-full" />
            <button onClick={handleGoClick} className="ml-4 bg-blue-500 text-white p-2 rounded">GO</button>
          </div>
        </div>
      </div>

      {showTable && (
        <div className="mt-6">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Customer No</th>
                <th className="px-4 py-2">Agent No</th>
                <th className="px-4 py-2">Issue</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">12345</td>
                <td className="border px-4 py-2">67890</td>
                <td className="border px-4 py-2">Billing Issue</td>
                <td className="border px-4 py-2">2024-09-01</td>
                <td className="border px-4 py-2">Resolved</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">54321</td>
                <td className="border px-4 py-2">09876</td>
                <td className="border px-4 py-2">Installation Issue</td>
                <td className="border px-4 py-2">2024-09-05</td>
                <td className="border px-4 py-2">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


const Page = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [subCard, setSubCard] = useState(null); // Track the subcards (Sales Order, Service Order)

  // Handler for the back button to go back to the previous level
  const handleBackClick = () => {
    if (subCard) {
      setSubCard(null); // Go back to main "Customer Service" page
    } else {
      setSelectedCard(null); // Go back to main dashboard
    }
  };

  return (
    <div className="p-6">
      {/* Main Cards */}
      {selectedCard === 'Field Management' ? (
        <FieldManagement onBack={handleBackClick} />
      ) : selectedCard === 'Task Management' ? (
        <TaskManagement onBack={handleBackClick} />
      ) : selectedCard === 'Inventory' ? (
        <Inventory onBack={handleBackClick} />
      ) : selectedCard === 'Customer Management' ? (
        <CustomerManagement onBack={handleBackClick} />
      ) : selectedCard === 'View History' ? (
        <ViewHistory onBack={handleBackClick} />
      ) : selectedCard === 'Customer Service' ? (
      
            <div>
          <h1 className="text-xl font-bold mb-4">Customer Service</h1>
          {subCard === null ? (
            // Display Sales Order and Service Order cards
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  name="Sales Order" 
                  icon={<FaFileInvoiceDollar className="text-4xl text-blue-500" />} 
                  onClick={() => setSubCard('Sales Order')} 
                  className="hover:bg-blue-100 transition ease-in-out duration-300 shadow-lg p-4 rounded-md"
                />
                <Card 
                  name="Service Order" 
                  icon={<FaTools className="text-4xl text-blue-500" />} 
                  onClick={() => setSubCard('Service Order')} 
                  className="hover:bg-green-100 transition ease-in-out duration-300 shadow-lg p-4 rounded-md"
                />
              </div>
              <button onClick={handleBackClick} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded">Back</button>
            </div>
          ) : subCard === 'Sales Order' ? (
            // Sales Order Sub-task form
            <div>
              <div className="p-4 bg-gray-100 rounded shadow">
                {/* Subtask Form */}
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Task Name</label>
                    <input 
                      type="text" 
                      className="mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter task name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Task Description</label>
                    <textarea 
                      className="mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter task description"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Due Date</label>
                    <input 
                      type="date" 
                      className="mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Assigned To</label>
                    <input 
                      type="text" 
                      className="mt-1 block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter assignee name"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
                  </div>
                </form>
                {/* Back button for Sales Order */}
              
              </div>
              <button onClick={handleBackClick} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded">Back</button>
            </div>
          ) : subCard === 'Service Order' ? (
            // Service Order Update with Yes/No options
            <div>
              <div className="p-4 bg-gray-100 rounded shadow">
                <p className="mb-4">Would you like to proceed with the service order?</p>
                <div className="flex space-x-4">
                  <button className="bg-green-500 text-white p-2 rounded">Yes</button>
                  <button className="bg-red-500 text-white p-2 rounded">No</button>
                </div>
                {/* Back button for Service Order */}
              </div>
              <button onClick={handleBackClick} className="mt-4 bg-gray-300 text-black px-4 py-2 rounded">Back</button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card name="Field Management" icon={<FaTools className="text-4xl text-blue-500" />} onClick={() => setSelectedCard('Field Management')} />
          <Card name="Task Management" icon={<FaTasks className="text-4xl text-blue-500" />} onClick={() => setSelectedCard('Task Management')} />
          <Card name="Inventory" icon={<FaBoxes className="text-4xl text-blue-500" />} onClick={() => setSelectedCard('Inventory')} />
          <Card name="Locate" icon={<FaMapMarkerAlt className="text-4xl text-blue-500" />} />
          <Card name="Customer Management" icon={<FaUser className="text-4xl text-blue-500" />} onClick={() => setSelectedCard('Customer Management')} />
          <Card name="Report/Analytics" icon={<FaChartPie className="text-4xl text-blue-500" />} />
          <Card name="Customer Service" icon={<FaFileInvoice className="text-4xl text-blue-500" />} onClick={() => setSelectedCard('Customer Service')} />
          <Card name="Billing" icon={<FaFileInvoice className="text-4xl text-blue-500" />} />
          <Card name="View History" icon={<FaHistory className="text-4xl text-blue-500" />} onClick={() => setSelectedCard('View History')} />
          <Card name="Help/Support" icon={<FaLifeRing className="text-4xl text-blue-500" />} />
        </div>
      )}
    </div>
  );
};


export default Page;