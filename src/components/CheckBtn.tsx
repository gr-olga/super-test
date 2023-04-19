import {Notification} from "@/models/DataAPI";
import {useState} from "react";

interface CheckBtnProps {
    readonly chekboxes: Record<string, Notification>
}

export function CheckBtn({chekboxes}: CheckBtnProps) {
    const [boxesState, setBoxesState] = useState({})
    function changeState(name, value){
        setBoxesState({...boxesState, [name]: value})
    }
    const arr = Object.keys(chekboxes)
    return (
        <form>
            {arr.map((item, index) =>
                <div key={index}>
                    <label>{item}</label>
                    <input name={item} type="checkbox" value="false" onChange={(e) =>changeState(item, e.target.checked)}/>
                </div>)}
        </form>
    )
}