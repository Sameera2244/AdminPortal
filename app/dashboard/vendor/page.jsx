import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/vendor/vendor.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchvendors } from "@/app/lib/data";
import { deletevendor } from "@/app/lib/actions";

const vendorsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, vendors } = await fetchvendors(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a vendors..." />
        <Link href="/dashboard/vendor/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Vendors</td>
            <td>VendorDetails</td>
            <td>PurchaseOrders</td>
            <td>Created At</td>
            <td>Orders</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>
                <div className={styles.vendor}>
                  <Image
                    src={vendor.img || "/novendor.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.vendorImage}
                  />
                  {vendor.Vendors}
                </div>
              </td>
              <td>{vendor.VendorDetails}</td>
              <td>{vendor.PurchaseOrders}</td>
              <td>{vendor.createdAt?.toString().slice(4, 16)}</td>
              <td>{vendor.Orders}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/vendor/${vendor.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deletevendor}>
                    <input type="hidden" name="id" value={vendor.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default vendorsPage;
