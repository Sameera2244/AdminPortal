'use client'
import React, { useState } from 'react';
import styles from "@/app/ui/dashboard/poinprogress/poinprogress.module.css";

const Page = () => {
  const [orders, setOrders] = useState([
    {
      vendorName: 'Manpower Co',
      email: 'manpower@example.com',
      phoneNo: '7988267986',
      location: 'Banjara Hills',
      purchaseOrderNo: '3415',
      vendorDetails: 'Details about Manpower Co',
    },
    {
      vendorName: 'Bahrawi Pvt Ltd',
      email: 'bahrawi@example.com',
      phoneNo: '9618841944',
      location: 'SR Nagar',
      purchaseOrderNo: '33082842',
      vendorDetails: 'Details about Bahrawi Pvt Ltd',
    },
    {
      vendorName: 'GLT Infra Builders',
      email: 'glt@example.com',
      phoneNo: '8256689458',
      location: 'Red Hills',
      purchaseOrderNo: '46333924',
      vendorDetails: 'Details about GLT Infra Builders',
    },
    {
      vendorName: 'Tata Elexsi',
      email: 'tata@example.com',
      phoneNo: '9731209785',
      location: 'Jubilee Hills',
      purchaseOrderNo: '33082842',
      vendorDetails: 'Details about Tata Elexsi',
    },
    {
      vendorName: 'Indian Betadev Company',
      email: 'indianbetadev@example.com',
      phoneNo: '8731236789',
      location: 'Ameerpet',
      purchaseOrderNo: '33082842',
      vendorDetails: 'Details about Indian Betadev Company',
    },
    {
      vendorName: 'Garnier Pvt Ltd',
      email: 'garnier@example.com',
      phoneNo: '87651234160',
      location: 'Shamshabad',
      purchaseOrderNo: '92504223',
      vendorDetails: 'Details about Garnier Pvt Ltd',
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [newOrder, setNewOrder] = useState({
    vendorName: '',
    email: '',
    phoneNo: '',
    location: '',
    purchaseOrderNo: '',
    vendorDetails: '',
  });
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);

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
      vendorName: '',
      email: '',
      phoneNo: '',
      location: '',
      purchaseOrderNo: '',
      vendorDetails: '',
    });
  };

  const handleSaveNewOrder = () => {
    setOrders([...orders, newOrder]);
    setShowNewOrderForm(false);
    setNewOrder({
      vendorName: '',
      email: '',
      phoneNo: '',
      location: '',
      purchaseOrderNo: '',
      vendorDetails: '',
    });
  };

  const exportCSV = () => {
    const headers = ['Vendor Name', 'Email', 'Phone No', 'Location', 'Purchase Order No', 'Vendor Details'];
    const rows = orders.map(order => [
      order.vendorName,
      order.email,
      order.phoneNo,
      order.location,
      order.purchaseOrderNo,
      order.vendorDetails,
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1></h1>
        <div className={styles.exportSearch}>
          <button className={styles.exportButton} onClick={exportCSV}>Export CSV</button>
          <input type="text" className={styles.searchInput} placeholder="Search Vendors" />
        </div>
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
            <input type="text" name="vendorName" placeholder="Vendor Name" value={newOrder.vendorName} onChange={handleNewOrderChange} />
            <input type="text" name="email" placeholder="Email" value={newOrder.email} onChange={handleNewOrderChange} />
            <input type="text" name="phoneNo" placeholder="Phone No" value={newOrder.phoneNo} onChange={handleNewOrderChange} />
            <input type="text" name="location" placeholder="Location" value={newOrder.location} onChange={handleNewOrderChange} />
            <input type="text" name="purchaseOrderNo" placeholder="Purchase Order No" value={newOrder.purchaseOrderNo} onChange={handleNewOrderChange} />
            <input type="text" name="vendorDetails" placeholder="Vendor Details" value={newOrder.vendorDetails} onChange={handleNewOrderChange} />
            <button onClick={handleSaveNewOrder}>Save</button>
            <button onClick={handleCancelNewOrder}>Cancel</button>
          </div>
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Location</th>
            <th>Purchase Order No</th>
            <th>Vendor Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input type="text" name="vendorName" value={editData.vendorName} onChange={handleChange} /></td>
                  <td><input type="text" name="email" value={editData.email} onChange={handleChange} /></td>
                  <td><input type="text" name="phoneNo" value={editData.phoneNo} onChange={handleChange} /></td>
                  <td><input type="text" name="location" value={editData.location} onChange={handleChange} /></td>
                  <td><input type="text" name="purchaseOrderNo" value={editData.purchaseOrderNo} onChange={handleChange} /></td>
                  <td><input type="text" name="vendorDetails" value={editData.vendorDetails} onChange={handleChange} /></td>
                  <td>
                    <button onClick={() => handleSaveClick(index)}>Update</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{order.vendorName}</td>
                  <td>{order.email}</td>
                  <td>{order.phoneNo}</td>
                  <td>{order.location}</td>
                  <td>{order.purchaseOrderNo}</td>
                  <td>{order.vendorDetails}</td>
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
