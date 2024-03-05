import Link from "next/link"
import styles from "./Headline/Headline.module.css"
export function Header() {
    return (
        <header className={styles.center}>
            <Link href="/">Index</Link>
            <Link href="/about">About</Link>
        </header>
    )
}