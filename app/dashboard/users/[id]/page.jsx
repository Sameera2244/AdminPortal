import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>User Name</label>
          <input type="text" name="UserName" placeholder={user.UserName} />
          <label>First Name</label>
          <input type="text" name="firstname" placeholder={user.FirstName} />
          <label>Last Name</label>
          <input type="text" name="Lastname" placeholder={user.LastName} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Contact Number</label>
          <input type="text" name="ContactNumber" placeholder={user.Contactnumber} />
          <label>Email Id</label>
          <textarea type="email" name="EmailId" placeholder={user.EmailId} />
          <label>Emergency Contact</label>
          <input type="text" name="EmergencyContact" placeholder={user.EmergencyContact} />
          <label>Employee Number</label>
          <input type="text" name="EmployeeNumber" placeholder={user.EmployeeNumber} />
          <label>MRA User</label>
          <input type="text" name="MRAUser" placeholder={user.MRAUser} />
          <label>Number of MR Assigned</label>
          <input type="text" name="Number of MR Assigned" placeholder={user.NumberofMRAssigned} />
          <label>Number of MR Read</label>
          <input type="text" name="Number of MR Read" placeholder={user.NumberofMRRead} />
          
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
