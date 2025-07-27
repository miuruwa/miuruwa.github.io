import { Button, CardBlock } from "@webx/forms";
import "./stylesheet.scss"


function HomeButton () {
    const props = {
        title: "go to selection",
        theme: "white",
        className: "language-button",
        onClick: () => {
            window.location.pathname = "/language"
        }
    }

    return <Button {...props}/>
}

export default function () {
    return <div className="unsupported">
        <CardBlock className="card-block">
            <h2>
                Unsupported language!
            </h2>
            <p>
                Please select one and you can return
            </p>
            <HomeButton />
        </CardBlock>
    </div>
}