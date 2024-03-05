import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Main } from "@/src/components/main";
import YourComponent, {Headline} from "@/src/components/Headline/Headline";
import Alert from "@/src/components/Headline/Headline";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [count, setCount] =useState(1);
  const [text,setText] = useState("");
  const [isShow, setIsShow] = useState();
  
  const handleClick = (e) => {
    setCount(count => count+3)
  };
 
  const handleDisplay = ()=> {
    setIsShow((isShow) => !isShow);
 }
  useEffect(()=> {
    console.log("foo")
    document.body.style.backgroundColor = "lightblue";
    return ()=> {
      document.body.style.backgroundColor = "";
    }
  },[count])

  const handleChange = useCallback((e) => {
    if(e.target.value.length>5) {
      alert("5文字以内にしてー")
    }
    setText(e.target.value.trim());
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> :null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}
      >{isShow ? "非表示" :"表示"}</button>
      <input type="text" value={text} onChange={handleChange} />


      <Headline  page="index"
      >
        {<div className={styles.center}>foo</div>}
      </Headline>
      <Alert Click={()=> alert("Clicked!")} page="index" />
      <Main />
    </>
  );
}
