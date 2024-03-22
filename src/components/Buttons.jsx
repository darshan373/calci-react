
import styles from "./Buttons.module.css";
// btn btn-success btne
function Buttons({calval,handlebtnclick})
{   
    const arr=["1","2","3","/","4","5","6","*","7","8","9","+","0","-","C","="];
return <> <div className={styles["buttons-container"]}>
 {arr.map((item)=> <button key={item} className={ `${styles["btn"]} btn btn-outline-secondary `}
 onClick={()=> handlebtnclick(item)}>{item}</button>)}
</div></>
}
export default Buttons;

