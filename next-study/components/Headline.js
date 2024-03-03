import styles from "@/styles/Home.module.css";
export default function Headline(props) {
    return (
        <div className={styles.center}>
            <h1 className={styles.text}>{props.page} Page</h1>
            <p>{props.page}</p>
        </div>
    );
}