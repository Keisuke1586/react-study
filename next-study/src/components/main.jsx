import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Links } from "./Links";

const inter = Inter({ subsets: ["latin"] });

export  function Main() {
    return (
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
           index page&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <Links />

      </main>
)}