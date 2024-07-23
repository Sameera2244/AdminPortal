import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.bigbox}>
    <div className={styles.container}>
      
      <LoginForm/>
      
    </div>
    </div>
  );
};

export default LoginPage;
