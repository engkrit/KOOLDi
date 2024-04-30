import Signup from "@/components/SignUp";
import styles from "@/styles/SignUpPage.module.css";

export default function SignUp(){
  return(
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Signup />
      </div>
    </div>
  )
}

