import { updatevendor } from "@/app/lib/actions";
import { fetchvendors } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/vendor/singlevendor/singlevendor.module.css";
import Image from "next/image";

const SinglevendorPage = async ({ params }) => {
  const { id } = params;
  const vendor = await fetchvendors(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {vendor.vendorsName}
      </div>
      <div className={styles.formContainer}>
        <form action={updatevendor} className={styles.form}>
          <input type="hidden" name="id" value={vendor.id} />
          <label>VendorsName</label>
          <input type="text" name="vendorsName" placeholder={vendor.vendorsName} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>PurchaseOrders</label>
          <input type="number" name="PurchaseOrders" placeholder={vendor.PurchaseOrders} />
         
          
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglevendorPage;