import styles from "@/styles/StepTitle.module.css"
import {useState} from "react";

export function StepTitle() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    function handleTextChange(e) {
        setText(e.target.value)
    }

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    return (
        <form className={styles.title__form}>
            <label className={styles.title__formLabel}>Title</label>
            <input
                className={styles.title__formInput}
                type="text"
                value={title}
                onInput={(e) => handleTitleChange(e)}/>
            <label className={styles.title__formLabel}>Notes(optional)</label>
            <textarea
                className={styles.title__formInputText}
                value={text}
                onInput={(e) => handleTextChange(e)}
            />
        </form>)
}
