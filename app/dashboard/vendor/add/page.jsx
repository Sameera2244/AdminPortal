import { addvendor } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/vendor/addvendor/addvendor.module.css";

const AddvendorPage = () => {
  return (
    <div className={styles.container}>
      <form action={addvendor} className={styles.form}>
        <input type="text" placeholder="vendorsName" name="vendorsName" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="number" placeholder="PurchaseOrders" name="PurchaseOrders" required />
        
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddvendorPage;