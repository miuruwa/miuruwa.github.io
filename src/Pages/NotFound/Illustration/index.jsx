import Clouds from "~/media/Illustration.png"
import Footage from "~/media/footage.gif"

function Illustration() {
    return <div className="not-found-background">
        <img src={Footage} />
        <img src={Clouds} />
    </div>;
}

export default Illustration