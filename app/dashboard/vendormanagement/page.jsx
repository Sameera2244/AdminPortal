import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/vendormanagement/vendormanagement.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchvendormanagements } from "@/app/lib/data";
import { deletevendormanagement } from "@/app/lib/actions";

const vendormanagementsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, vendormanagements } = await fetchvendormanagements(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a vendormanagements..." />
        <Link href="/dashboard/vendormanagement/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>CompanyName</td>
            <td>Type</td>
            <td>Location</td>
            <td>Tin No</td>
            <td>Tin No Expiry Date</td>
            <td>Purchase Order No </td>
            <td>Vendor Details</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {vendormanagements.map((vendormanagement) => (
            <tr key={vendormanagement.id}>
              <td>
                <div className={styles.vendormanagement}>
                  <Image
                    src={vendormanagement.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.vendorImage}
                  />
                  {vendormanagement.CompanyName}
                </div>
              </td>
              <td>{vendormanagement.Type}</td>
              <td>{vendormanagement.Location}</td>
              <td>{vendormanagement.TinNo}</td>
              <td>{vendormanagement.TinNoExpiryDate}</td>
              <td>{vendormanagement.PurchaseOrderNo}</td>
              <td>{vendormanagement.VendorDetails}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/vendormanagement/${vendormanagement.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deletevendormanagement}>
                    <input type="hidden" name="id" value={vendormanagement.id} />
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

export default vendormanagementsPage;