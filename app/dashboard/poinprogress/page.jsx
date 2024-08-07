'use client'
import React, { useState } from 'react';
import styles from "@/app/ui/dashboard/poinprogress/poinprogress.module.css";

const Page = () => {
  const [orders, setOrders] = useState([
    {
      vendorNumber: '71097743',
      vendorID: '111',
      vendor: 'Manpower Co',
      phoneNo: 'Man_pvc',
      type: 'Normal',
      driver: '',
      dueTime: '24-07-2024 09:12:40',
      createdAt: '4 days ago',
    },
    {
      vendorNumber: '33082842',
      vendorID: '110',
      vendor: 'Bahrawi pvt Ltd',
      phoneNo: 'Bh_pv_ltd',
      type: 'Normal',
      driver: '',
      dueTime: '06-07-2024 09:12:59',
      createdAt: '3 weeks ago',
    },
    {
      vendorNumber: '46333924',
      vendorID: '49',
      vendor: 'GLT Infra Builders',
      phoneNo: 'Glt_Inf_b',
      type: 'Normal',
      driver: '',
      dueTime: '06-07-2024 09:12:56',
      createdAt: '3 days ago',
    },
    {
      vendorNumber: '33082842',
      vendorID: '110',
      vendor: 'Tata Elexsi',
      phoneNo: 'Tata_eLXs',
      type: 'Normal',
      driver: '',
      dueTime: '06-07-2024 09:12:49',
      createdAt: '1 week ago',
    },
    {
      vendorNumber: '33082842',
      vendorID: '110',
      vendor: 'Indian Betadev Company',
      phoneNo: 'IbetC',
      type: 'Normal',
      driver: '',
      dueTime: '06-07-2024 09:00:57',
      createdAt: '1 weeks ago',
    },
    {
      vendorNumber: '92504223',
      vendorID: '27',
      vendor: 'Garnier Pvt Ltd',
      phoneNo: 'GARpvL',
      type: 'Normal',
      driver: '',
      dueTime: '05-07-2024 14:53:29',
      createdAt: '2 weeks ago',
    },
  ]);
    
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [newOrder, setNewOrder] = useState({
    vendorNumber: '',
    vendorID: '',
    vendor: '',
    phoneNo: '',
    type: 'Normal',
    driver: '',
    dueTime: '',
    createdAt: '',
  });
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData({ ...orders[index] });
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    setEditData({});
  };

  const handleSaveClick = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index] = editData;
    setOrders(updatedOrders);
    setEditIndex(null);
    setEditData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleNewOrderChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      [name]: value,
    });
  };

  const handleAddNewClick = () => {
    setShowNewOrderForm(true);
  };

  const handleCancelNewOrder = () => {
    setShowNewOrderForm(false);
    setNewOrder({
      vendorNumber: '',
      vendorID: '',
      vendor: '',
      phoneNo: '',
      type: 'Normal',
      driver: '',
      dueTime: '',
      createdAt: '',
    });
  };

  const handleSaveNewOrder = () => {
    setOrders([...orders, newOrder]);
    setShowNewOrderForm(false);
    setNewOrder({
      vendorNumber: '',
      vendorID: '',
      vendor: '',
      phoneNo: '',
      type: 'Normal',
      driver: '',
      dueTime: '',
      createdAt: '',
    });
  };

  const exportCSV = () => {
    const headers = ['PO No', 'No of MRU', 'Vendor Assigned', 'Vendor Username', 'Status', 'Due Time', 'Created At'];
    const rows = orders.map(order => [
      order.vendorNumber,
      order.vendorID,
      order.vendor,
      order.phoneNo,
      order.type,
      order.driver,
      order.dueTime,
      order.createdAt,
    ]);
    let csvContent = 'data:text/csv;charset=utf-8,'
      + headers.join(',') + '\n'
      + rows.map(row => row.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'orders.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredOrders = orders.filter(order =>
    order.vendorNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1></h1>
        <div className={styles.exportSearch}>
          <button className={styles.exportButton} onClick={exportCSV}>Export CSV</button>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by PO No"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.searchButton} onClick={() => setSearchQuery(searchQuery)}>Search</button>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <h2>308</h2>
          <p>Pending Orders</p>
        </div>
        <div className={styles.stat}>
          <h2>392</h2>
          <p>Active Orders</p>
        </div>
        <div className={styles.stat}>
          <h2>85</h2>
          <p>Active Meter Reader</p>
        </div>
        <div className={styles.stat}>
          <h2>63</h2>
          <p>Completed Orders</p>
        </div>
      </div>

      <div className={styles.tabs}>
        <button className={styles.activeTab}>Pending Assignment (308)</button>
        <button className={styles.activeBut}>Active (392)</button>
        <button className={styles.historyy}>History (203)</button>
        <button className={styles.addButton} onClick={handleAddNewClick}>Add New</button>
      </div>

      {showNewOrderForm && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Add New Order</h2>
            <input type="text" name="vendorNumber" placeholder="PO No" value={newOrder.vendorNumber} onChange={handleNewOrderChange} />
            <input type="text" name="vendorID" placeholder="No of MRU" value={newOrder.vendorID} onChange={handleNewOrderChange} />
            <input type="text" name="vendor" placeholder="Vendor Assigned" value={newOrder.vendor} onChange={handleNewOrderChange} />
            <input type="text" name="phoneNo" placeholder="Vendor Username" value={newOrder.phoneNo} onChange={handleNewOrderChange} />
            <select name="type" value={newOrder.type} onChange={handleNewOrderChange}>
              <option value="Normal">Normal</option>
              <option value="Defected">Defected</option>
              <option value="New">New</option>
            </select>
            <input type="text" name="dueTime" placeholder="Due Time" value={newOrder.dueTime} onChange={handleNewOrderChange} />
            <input type="text" name="createdAt" placeholder="Created At" value={newOrder.createdAt} onChange={handleNewOrderChange} />
            <button onClick={handleSaveNewOrder}>Save</button>
            <button onClick={handleCancelNewOrder}>Cancel</button>
          </div>
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>PO No</th>
            <th>No of MRU</th>
            <th>Vendor Assigned</th>
            <th>Vendor Username</th>
            <th>Status</th>
            <th>Due Time</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input type="text" name="vendorNumber" value={editData.vendorNumber} onChange={handleChange} /></td>
                  <td><input type="text" name="vendorID" value={editData.vendorID} onChange={handleChange} /></td>
                  <td><input type="text" name="vendor" value={editData.vendor} onChange={handleChange} /></td>
                  <td><input type="text" name="phoneNo" value={editData.phoneNo} onChange={handleChange} /></td>
                  <td>
                    <select name="type" value={editData.type} onChange={handleChange}>
                      <option value="Normal">Normal</option>
                      <option value="Defected">Defected</option>
                      <option value="New">New</option>
                    </select>
                  </td>
                  <td><input type="text" name="dueTime" value={editData.dueTime} onChange={handleChange} /></td>
                  <td><input type="text" name="createdAt" value={editData.createdAt} onChange={handleChange} /></td>
                  <td>
                    <button onClick={() => handleSaveClick(index)}>Update</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{order.vendorNumber}</td>
                  <td>{order.vendorID}</td>
                  <td>{order.vendor}</td>
                  <td>{order.phoneNo}</td>
                  <td>{order.type}</td>
                  <td>{order.dueTime}</td>
                  <td>{order.createdAt}</td>
                  <td>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;

