import { updatevendormanagement } from "@/app/lib/actions";
import { fetchvendormanagements } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/vendormanagement/singlevendormanagement/singlevendormanagement.module.css";
import Image from "next/image";

const SinglevendormanagementPage = async ({ params }) => {
  const { id } = params;
  const vendormanagement = await fetchvendormanagements(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {vendormanagement.vendormanagements}
      </div>
      <div className={styles.formContainer}>
        <form action={updatevendormanagement} className={styles.form}>
          <input type="hidden" name="id" value={vendormanagement.id} />
          <label>CompanyName</label>
          <input type="text" name="Vendormanagements" placeholder={vendormanagement.vendormanagements} />
          <label>Type</label>
          <select name="Type1" id="Type1">
            <option value="Corporation">Corporation</option>
            <option value="Partnership">partnership</option>
            <option value="Individual">Individual</option>
            <option value="Others">Others</option>
          </select>
          <label>Location</label>
          <input type="number" name="Location" placeholder={vendormanagement.Location} />
          <label>TIN NO</label>
          <input type="number" name="TINNO" placeholder={vendormanagement.TINNo} />
          <label>TIN NO Expiry Date</label>
          <input type="date" name="TIN NO Expiry Date" placeholder={vendormanagement.TINNOExpiryDate} />
          <label>PurchaseOrderNo</label>
          <input type="number" name="PurchaseOrderNo" placeholder={vendormanagement.PurchaseOrderNo} />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglevendormanagementPage;