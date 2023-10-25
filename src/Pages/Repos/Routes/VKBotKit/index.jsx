
import Headline from "./Headline"
import Links from "./Links"
import Description from "./Description"

import "./stylesheet.scss"


export default function VKBotKit() {
    return <div className="vkbotkit">
        <Headline />
        <Description />
        <Links />
    </div>
}
