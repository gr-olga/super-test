import {Steps} from "@/components/Steps";
import {Step} from "@/models/Step";

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
        <div>
            <div>Add Area</div>
            <Steps steps={props.steps} currentStep={props.currentStep}/>
            <div>
                {step.component()}
            </div>
            <button type="button" onClick={prev}>Prev</button>
            <button type="button" onClick={next}>Next</button>
            <button type="button" onClick={submit}>Submit</button>
        </div>
    )
}