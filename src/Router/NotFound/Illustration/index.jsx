import Clouds from "/img/Risha.png"
import BackgroundImage from "./BackgroundImage"

export default function () {
    return <div className="not-found-background">
        <BackgroundImage />
        <img src={Clouds} />
    </div>
}