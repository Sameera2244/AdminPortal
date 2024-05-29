import { addvendor } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/vendor/addvendor/addvendor.module.css";

const AddvendorPage = () => {
  return (
    <div className={styles.container}>
      <form action={addvendor} className={styles.form}>
        <input type="text" placeholder="Vendors" name="Vendors" required />
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="Email">Email</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="PurchaseOrders" name="PurchaseOrders" required />
        <input type="number" placeholder="Orders" name="Orders" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          required
          name="VendorDetails"
          id="VendorDetails"
          rows="16"
          placeholder=""
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddvendorPage;