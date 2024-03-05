
import styles from "./Headline.module.css";


export default function Alert(props) {
   
    return (
    
    <button onClick={props.Click}>{props.page}</button>
    
    );
}

export function Headline(props) {
      console.log(props);
    return (
    
        <div className={styles.center}>
            <h1 className={styles.text}>{props.page} Page</h1>
            {props.page}
            {props.children}
        </div>
    
    );
}