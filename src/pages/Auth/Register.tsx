import styles from "./auth.module.css";
import { Input, Button, NavigationLink} from "../../components/common/index"
export default function Register() {
    return (
        <div className={styles.wrapper}>                
            <form className={styles.formContainer}>
                <div className={styles.formHeader}>
                    <h2>Welcome to Kunren!</h2>
                    <p className={styles.formDesc}>Create an account to join my website</p>
                    <hr className={styles.formBreak}/>
                </div>
                <Input 
                    label="Username"
                    name="username"
                    type="text"
                />
                <Input 
                    label="Email"
                    name="email"
                    type="email"
                />
                <Input 
                    label="Password"
                    name="password"
                    type="password"
                />
                <Input 
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                />
                <div className={styles.checkBoxContainer}>
                    <input 
                        type="checkbox" 
                        id="join-checkbox" 
                        className={styles.checkbox} 
                    />
                    <label 
                        htmlFor="join-checkbox" 
                        className={styles.checkboxLabel}
                    >
                        Click here to join with me
                    </label>
                </div>
                <div className={styles.formFooter}>
                    <Button>Continue</Button>
                    <div className={styles.footerDesc}>
                        <p>Already have an account? <NavigationLink to="/login">Login</NavigationLink></p>
                    </div>
                </div>
            </form>
        </div>
    )
}