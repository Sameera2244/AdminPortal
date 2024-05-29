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
        {vendor.vendors}
      </div>
      <div className={styles.formContainer}>
        <form action={updatevendor} className={styles.form}>
          <input type="hidden" name="id" value={vendor.id} />
          <label>Vendors</label>
          <input type="text" name="Vendors" placeholder={vendor.vendors} />
          <label>PurchaseOrders</label>
          <input type="number" name="PurchaseOrders" placeholder={vendor.PurchaseOrders} />
          <label>Orders</label>
          <input type="number" name="stock" placeholder={vendor.Orders} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={vendor.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={vendor.size || "size"}
          />
          <label>Category</label>
          <select name="Category" id="Category">
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
          <label>VendorDetails</label>
          <textarea
            name="VendorDetails"
            id="VendorDetails"
            rows="10"
            placeholder={vendor.VendorDetails}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglevendorPage;