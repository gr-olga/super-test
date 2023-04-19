import Image from "next/image";
import ok from "../image/Group 5174.png"

export function Popup() {
    return (
        <div>
            <Image src={ok} alt={"ok"}/>
            <div>
                <h1>Area successfully created</h1>
                <p>You can now track the yachts in this area with its dedicated dashboard</p>
            </div>
            <button>View dashboard</button>
        </div>
    )
}