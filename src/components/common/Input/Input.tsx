import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

type InputProps = {
    label: string,
    error?: string
} & InputHTMLAttributes<HTMLInputElement>
export default function Input({ label, error, name, type, ...props }: InputProps) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input 
            type={type}
            name={name}
            id={name}
            {...props}  
            className = {clsx(styles.inputField, error && styles.HasError)}/>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}