// FirstPage.js
import Signin from "@/components/SignIn";
import styles from "@/styles/FirstPage.module.css";

export default function SignIn(){
  return(
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Signin />
      </div>
    </div>
  )
}

