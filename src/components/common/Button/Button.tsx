import styles from "./Button.module.css";

type ButtonProps = {  
    children: string
}
export default function Button({ children }: ButtonProps) {
    return (
        <button className={styles.button}>{children}</button>
    )
}
