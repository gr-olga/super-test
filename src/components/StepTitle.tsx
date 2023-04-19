import styles from "@/styles/StepTitle.module.css"

export function StepTitle() {
    return (
        <form className={styles.title__form}>
            <label className={styles.title__formLabel}>Title</label>
            <input className={styles.title__formInput} type="text"/>
            <label  className={styles.title__formLabel}>Notes(optional)</label>
            <textarea className={styles.title__formInputText}/>
        </form>)
}
