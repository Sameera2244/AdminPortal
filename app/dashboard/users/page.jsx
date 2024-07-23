import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
        <tr>
            <td>User Name</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Contact Number</td>
            <td>Email ID</td>
            <td>Emergency Contact</td>
            <td>Vendor Number</td>
            <td>Employee Number</td>
            <td>MRA User</td>
            <td>Vendor Employee</td>
            <td>Number of MR Assigned</td>
            <td>Number of MR Read </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.FirstName}</td>
              <td>{user.LastName}</td>
              <td>{user.ContactNumber}</td>
              <td>{user.EmailId}</td>
              <td>{user.EmergencyContact}</td>
              <td>{user.VendorNumber}</td>
              <td>{user.EmployeeNumber}</td>
              <td>{user.MRAUser}</td>
              <td>{user.VendorEmployee}</td>
              <td>{user.NumberofMRAssigned}</td>
              <td>{user.NumberofMRRead}</td>

              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    {/* <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button> */}
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

export default UsersPage;

