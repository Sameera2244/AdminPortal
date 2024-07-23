import { addvendor } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/vendor/addvendor/addvendor.module.css";




const AddvendorPage = () => {
  return (
    <div className={styles.container}>
      <form action={addvendor} className={styles.form}>
        <input type="text" placeholder="Vendors Name" name="VendorsName" required />
        <input type="number" placeholder="Purchase Order Number" name="PurchaseOrderNumber" required />
        <input type="number" placeholder="Number Of MRU Assigned" name="NumberOfMRUAssigned" required />
        <input type="text" placeholder="Vendor User" name="VendorUser" required />
        {/* <input type="text" placeholder="Status" name="Status" required /> */}
        <input type="text" placeholder="Vendor Assigned" name="VendorAssigned" required />
       <select name="Status" id="Status"  >
        <option value='1'>Yes</option>
        <option value='0'>No</option>
       </select>
     
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddvendorPage;