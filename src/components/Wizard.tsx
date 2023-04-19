import {Steps} from "@/components/Steps";
import {Step} from "@/models/Step";
import styles from "@/styles/Wizard.module.css"

interface WizardProps {
    readonly steps: ReadonlyArray<Step>
    readonly currentStep: number
    readonly url: string
    readonly onPrev: (currentStep: number) => void
    readonly onNext: (currentStep: number) => void
    readonly onSubmit: () => void
}

export function Wizard(props: WizardProps) {
    const step: Step = props.steps[props.currentStep];

    function prev() {
        const prevStep: Step = props.steps[props.currentStep - 1]
        if (!prevStep || prevStep.isPrefilled) return
        props.onPrev(props.currentStep - 1)
    }

    function next() {
        const nextStep: Step = props.steps[props.currentStep + 1]
        if (!nextStep) return
        props.onNext(props.currentStep + 1)
    }

    function submit(): Promise<void> {
        return fetch(props.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(props.onSubmit)
            .catch(() => console.log('Sending failed'))
    }

    return (
        <div className={styles.wizard__main}>
            <div className={styles.wizard__header}>
                <h1>Add area</h1>
                <button>X</button>
            </div>
            <Steps steps={props.steps} currentStep={props.currentStep}/>
            <div className={styles.wizard__forms}>
                {step.component()}
            </div>
            <div className={styles.wizard__btnBox}>
                <button
                    className={styles.wizard__backButton}
                    type="button"
                    onClick={prev}>
                    Back
                </button>
                {props.currentStep === 3
                    ?
                    <button type="button" onClick={submit} className={styles.wizard__nextButton}>Done</button>
                    :
                    <button type="button" onClick={next} className={styles.wizard__nextButton}>Next</button>
                }
            </div>
        </div>
    )
}