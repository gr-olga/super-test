import {CheckBtn} from "@/components/CheckBtn";
import {useState} from "react";
import {DataApi} from "@/models/DataAPI";

export function StepNotifications() {
    const [frequency, srtFrequency] = useState("")

    function handleChange(event) {
        srtFrequency(event.target.value)
    }


    const obj: DataApi = {
        "notificationChannels": {
            "email": {
                "enabled": true,
                "label": "Email"
            },
            "iq": {
                "enabled": true,
                "label": "SYT iQ Notification"
            },
            "slack": {
                "enabled": true,
                "label": "Slack Message"
            },
            "push": {
                "enabled": true,
                "label": "Mobile App Push Notification"
            },
            "sms": {
                "enabled": false,
                "label": "SMS text message"
            }
        },
        "notificationFrequencies": [
            "immediate", "daily", "weekly", "monthly"
        ],
        "eventTypes": [
            "yacht entered", "yacht left", "yacht crossed", "yacht entered and stayed"
        ]
    }

    return (
        <div>
            {/*<p>Don’t miss any event in your area of interest by activating the notifications</p>*/}
            <h2>Notify me on</h2>
            <CheckBtn chekboxes={obj.notificationChannels}/>

            <h2>frequency</h2>
            <div>
                <label>Instant</label>
                <input
                    type="radio"
                    value="Instant"
                    checked={frequency === "Instant"}
                    onChange={(e) => handleChange(e)}/>
                <label>Daily </label>
                <input
                    type="radio"
                    value="Daily"
                    checked={frequency === "Daily"}
                    onChange={(e) => handleChange(e)}/>
                <label>Weekly</label>
                <input type="radio"
                       value="Weekly"
                       checked={frequency === "Weekly"}
                       onChange={(e) => handleChange(e)}/>
            </div>
            <p>You’ll be notified as soon as an event happens.</p>

            <h2>Type of event</h2>
            <form>
                {obj.eventTypes.map((item, index) =>
                    <div key={index}>
                        <label>{item}</label>
                        <input type="checkbox" value="false"/>
                    </div>
                )}
            </form>
        </div>
    )
}
