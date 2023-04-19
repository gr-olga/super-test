import {Step} from "@/models/Step";
import styles from "@/styles/Steps.module.css"

interface StepsProps {
    readonly steps: ReadonlyArray<Step>
    readonly currentStep: number
}

export function Steps(props: StepsProps) {
    return (
        <ul className={styles.steps__box}>
            {props.steps.map((item, index)=>
                <li
                    className={styles.steps__item}
                    key={index}>
                    {item.title}
                </li>
            )}
        </ul>
    )
}