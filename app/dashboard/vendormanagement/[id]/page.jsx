import { updatevendormanagement } from "@/app/lib/actions";
import { fetchvendormanagement } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/vendormanagement/singlevendormanagement/singlevendormanagement.module.css";
import Image from "next/image";

const SinglevendormanagementPage = async ({ params }) => {
  const { id } = params;
  const vendormanagement = await fetchvendormanagement(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {vendormanagement.CompanyName}
      </div>
      <div className={styles.formContainer}>
        <form action={updatevendormanagement} className={styles.form}>
          <input type="hidden" name="id" value={vendormanagement.id} />
          <label>Company Name</label>
          <input type="text" name="CompanyName" placeholder={vendormanagement.CompanyName} />
          <label>Type</label>
          <input type="text" name="Type" placeholder={vendormanagement.Type} />

          <label>Location</label>
          <input type="text" name="Location" placeholder={vendormanagement.Location} />    
          <label>TIN NO</label>
          <input type="number" name="TinNo" placeholder={vendormanagement.TinNo} />
          <label>TINNO EXPIRY DATE</label>
          <input type="number" name="TinNoExpiryDate" placeholder={vendormanagement.TinNoExpiryDate} />     
           <label>PURCHASE ORDER NO</label>
          <input type="number" name="PurchaseOrderNo" placeholder={vendormanagement.PurchaseOrderNo} />
          
          <label>VendorDetails</label>
          <textarea
            name="VendorDetails"
            id="VendorDetails"
            rows="10"
            placeholder={vendormanagement.VendorDetails}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglevendormanagementPage;