import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Wizard} from "@/components/Wizard";
import {useState} from "react";
import {Step} from "@/models/Step";
import {StepMock} from "@/components/StepMock";
import {StepTitle} from "@/components/StepTitle";
import {StepNotifications} from "@/components/StepNotifications";
import {Popup} from "@/components/Popup";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const url = 'https://api0.superyachtapi.com/api/echo'
    const initialStep = 2
    const [step, setStep] = useState(initialStep)
    const [isFinished, setIsFinished] = useState(false)

    const step1: Step = {
        title: '1 Geofence',
        component: StepMock,
        isPrefilled: true
    }

    const step2: Step = {
        title: '2 Filters',
        component: StepMock,
        isPrefilled: true
    }

    const step3: Step = {
        title: '3 Title',
        component: StepTitle,
        isPrefilled: false
    }

    const step4: Step = {
        title: '4 Notifications',
        component: StepNotifications,
        isPrefilled: false
    }

    const steps = [step1, step2, step3, step4];

    const onStepChange = (currentStep: number): void => setStep(currentStep)
    const onSubmit = (): void => setIsFinished(true)

    function reset(): void {
        setIsFinished(false)
        setStep(initialStep);
    }

    return (
        <>
            <Head>
                <title>App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div>
                {!isFinished ?
                    < Wizard steps={steps} currentStep={step} onNext={onStepChange} onPrev={onStepChange} url={url}
                             onSubmit={onSubmit}/> : <Popup onOk={reset}/>
                }
            </div>
        </>
    )
}
