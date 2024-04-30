import Signin from "@/components/SignIn";
import styles from "@/styles/SignInPage.module.css";

export default function SignIn(){
  return(
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Signin />
      </div>
    </div>
  )
}

