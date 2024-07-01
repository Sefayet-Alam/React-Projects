
import styles from "./inlinecomponent.module.css";

export default function InlineComponent(){
    const header={color:"blue",fontSize:"140px"};
    return (
        <h1 className={styles.header}>
            Inline Component
        </h1>
    );
}