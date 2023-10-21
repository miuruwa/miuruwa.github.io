import Button from "./Button"
import buttonData from "./buttonData"

export default function () {
    return <>
        <h6>
            мои соцсети
        </h6>
        <div className="links-block">
            {
                buttonData.map(Button)
            }
        </div>
    </>
}
