import {Step} from "@/models/Step";

interface StepsProps {
    readonly steps: ReadonlyArray<Step>
    readonly currentStep: number
}

export function Steps(props: StepsProps) {
    return (
        <ul>
            {props.steps.map((item, index)=>
                <li key={index}>{item.title}</li>
            )}
        </ul>
    )
}