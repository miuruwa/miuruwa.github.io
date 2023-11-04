import Clouds from "~/media/Illustration.png"
import BackgroundImage from "./BackgroundImage"

export default function () {
    return <div className="not-found-background">
        <BackgroundImage />
        <img src={Clouds} />
    </div>
}