import { Link } from "react-router-dom";
import styles from "./NavigationLink.module.css";

type NavigationLinkProps = {
    children: string,
    to: string
}
export default function NavigationLink({ children, to }: NavigationLinkProps){
    return (
        <Link to={to} className={styles.navigationLink}>{children}</Link>
    )
}