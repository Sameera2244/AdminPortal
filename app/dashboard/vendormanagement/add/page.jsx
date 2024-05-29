import { addvendormanagement } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/vendormanagement/addvendormanagement/addvendormanagement.module.css";

const AddvendormanagementPage = () => {
  return (
    <div className={styles.container}>
      <form action={addvendormanagement} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="CompanyName">Company Name:</label>
          <input type="text" placeholder="Company Name" name="CompanyName" id="CompanyName" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="type1">Type:</label>
          <select name="type" id="type" required>
            <option value="">Select Type</option>
            <option value="Corporation">Corporation</option>
            <option value="Partnership">Partnership</option>
            <option value="Individual">Individual</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" placeholder="Phone Number" name="phoneNumber" id="phoneNumber" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="emailId">Email ID:</label>
          <input type="email" placeholder="Email ID" name="emailId" id="emailId" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location">Location:</label>
          <textarea name="location" id="location" rows="2" placeholder="Location" required></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="websiteAddress">Website Address:</label>
          <input type="text" placeholder="Website Address" name="websiteAddress" id="websiteAddress" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tinNo">TIN No:</label>
          <input type="number" placeholder="TIN No" name="tinNo" id="tinNo" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tinNoExpiryDate">TIN No Expiry Date:</label>
          <input type="text" name="tinNoExpiryDate" id="tinNoExpiryDate" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="purchaseOrderNo">Purchase order No:</label>
          <input type="number" placeholder="Purchase order No" name="purchaseorderNo" id="purchaseorderNo" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Vendordetails">Vendor details:</label>
          <textarea name="Vendordetails" id="Vendordetails" rows="16" placeholder="Vendor details" required></textarea>
        </div>

        <div className={styles.formGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddvendormanagementPage;