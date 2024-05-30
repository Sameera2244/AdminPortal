import { addvendormanagement } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/vendormanagement/addvendormanagement/addvendormanagement.module.css";

const AddvendormanagementPage = () => {
  return (
    <div className={styles.container}>
      <form action={addvendormanagement} className={styles.form}>
        <input type="text" placeholder="CompanyName" name="CompanyName" required />
        <input type="text" placeholder="Type" name="Type" required />
        <input type="text" placeholder="Location" name="Location" required />
        <input type="number" placeholder="TinNo" name="TinNo" required />
        <input type="number" placeholder="TinNoExpiryDate" name="TinNoExpiryDate" required />
        <input type="number" placeholder="PurchaseOrderNo" name="PurchaseOrderNo" required />
        <textarea
          required
          name="VendorDetails"
          id="VendorDetails"
          rows="16"
          placeholder="VendorDetails"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddvendormanagementPage;