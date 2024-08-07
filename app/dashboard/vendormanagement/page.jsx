'use client';
import React, { useState, useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import styles from "@/app/ui/dashboard/vendormanagement/vendormanagement.module.css";

const Page = () => {
  const [orders, setOrders] = useState([
    {
      vendorName: 'Manpower Co',
      email: 'manpower@example.com',
      phoneNo: '7988267986',
      location: 'Banjara Hills',
      purchaseOrderNo: '3415',
      vendorDetails: 'Details about Manpower Co',
      date: '01-08-2023',
    },
    {
      vendorName: 'Bahrawi Pvt Ltd',
      email: 'bahrawi@example.com',
      phoneNo: '9618841944',
      location: 'SR Nagar',
      purchaseOrderNo: '33082842',
      vendorDetails: 'Details about Bahrawi Pvt Ltd',
      date: '02-08-2023',
    },
    {
      vendorName: 'GLT Infra Builders',
      email: 'glt@example.com',
      phoneNo: '8256689458',
      location: 'Red Hills',
      purchaseOrderNo: '46333924',
      vendorDetails: 'Details about GLT Infra Builders',
      date: '03-08-2023',
    },
    {
      vendorName: 'Tata Elexsi',
      email: 'tata@example.com',
      phoneNo: '9731209785',
      location: 'Jubilee Hills',
      purchaseOrderNo: '33082842',
      vendorDetails: 'Details about Tata Elexsi',
      date: '04-08-2023',
    },
    {
      vendorName: 'Indian Betadev Company',
      email: 'indianbetadev@example.com',
      phoneNo: '8731236789',
      location: 'Ameerpet',
      purchaseOrderNo: '33082842',
      vendorDetails: 'Details about Indian Betadev Company',
      date: '05-08-2023',
    },
    {
      vendorName: 'Garnier Pvt Ltd',
      email: 'garnier@example.com',
      phoneNo: '87651234160',
      location: 'Shamshabad',
      purchaseOrderNo: '92504223',
      vendorDetails: 'Details about Garnier Pvt Ltd',
      date: '06-08-2023',
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
    date: '',
  });
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  useEffect(() => {
    if (startDateRef.current) {
      new Pikaday({
        field: startDateRef.current,
        format: 'DD-MM-YYYY',
        onSelect: (date) => setStartDate(date.toISOString().split('T')[0]),
      });
    }
    if (endDateRef.current) {
      new Pikaday({
        field: endDateRef.current,
        format: 'DD-MM-YYYY',
        onSelect: (date) => setEndDate(date.toISOString().split('T')[0]),
      });
    }
  }, []);

  const generateReport = () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates');
      return;
    }

    const filteredOrders = orders.filter(order => {
      const orderDate = new Date(order.date.split('-').reverse().join('-'));
      const start = new Date(startDate.split('-').reverse().join('-'));
      const end = new Date(endDate.split('-').reverse().join('-'));
      return orderDate >= start && orderDate <= end;
    });

    exportCSV(filteredOrders);
  };

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
      date: '',
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
      date: '',
    });
  };

  const exportCSV = (data) => {
    const headers = ['Vendor Name', 'Email', 'Phone No', 'Location', 'Purchase Order No', 'Vendor Details', 'Date'];
    const rows = data.map(order => [
      order.vendorName,
      order.email,
      order.phoneNo,
      order.location,
      order.purchaseOrderNo,
      order.vendorDetails,
      order.date,
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const performVendorSearch = () => {
    // Trigger re-render with updated search query
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    const updatedOrders = orders.filter((_, index) => index !== deleteIndex);
    setOrders(updatedOrders);
    setShowDeleteConfirm(false);
    setDeleteIndex(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteIndex(null);
  };

  const filteredOrders = orders.filter(order => {
    const orderDate = new Date(order.date.split('-').reverse().join('-'));
    const start = new Date(startDate.split('-').reverse().join('-'));
    const end = new Date(endDate.split('-').reverse().join('-'));
    const isWithinDateRange = startDate && endDate ? orderDate >= start && orderDate <= end : true;
    const matchesSearchQuery = searchQuery ? order.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return isWithinDateRange && matchesSearchQuery;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.exportButton} onClick={() => exportCSV(orders)}>Export All CSV</button>
        <button className={styles.addButton} onClick={handleAddNewClick}>Add New</button>
      </div>
      <div>
        <div className={styles.datePickerContainer}>
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="start-date"
            placeholder="dd-mm-yyyy"
            ref={startDateRef}
          />
          <label htmlFor="end-date">End Date</label>
          <input
            type="text"
            id="end-date"
            placeholder="dd-mm-yyyy"
            ref={endDateRef}
          />
          <button onClick={generateReport}>Filter by Date</button>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by vendor name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={performVendorSearch}>Search by Vendor</button>
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
            <input type="text" name="date" placeholder="Date (dd-mm-yyyy)" value={newOrder.date} onChange={handleNewOrderChange} />
            <button onClick={handleSaveNewOrder}>Save</button>
            <button onClick={handleCancelNewOrder}>Cancel</button>
          </div>
        </div>
      )}
      
      {showDeleteConfirm && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this order?</p>
            <button onClick={handleConfirmDelete}>Yes, Delete</button>
            <button onClick={handleCancelDelete}>Cancel</button>
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
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input type="text" name="vendorName" value={editData.vendorName} onChange={handleChange} /></td>
                  <td><input type="text" name="email" value={editData.email} onChange={handleChange} /></td>
                  <td><input type="text" name="phoneNo" value={editData.phoneNo} onChange={handleChange} /></td>
                  <td><input type="text" name="location" value={editData.location} onChange={handleChange} /></td>
                  <td><input type="text" name="purchaseOrderNo" value={editData.purchaseOrderNo} onChange={handleChange} /></td>
                  <td><input type="text" name="vendorDetails" value={editData.vendorDetails} onChange={handleChange} /></td>
                  <td><input type="text" name="date" value={editData.date} onChange={handleChange} /></td>
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
                  <td>{order.date}</td>
                  <td>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    <button onClick={() => handleDeleteClick(index)}>Delete</button>
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
