import { nanoid } from "nanoid";
import LinkButton from "./LinkButton";
import linksData from "./linksData";

export default function () {
    return <div className="homepage-panels">
        {linksData.map(
            item => <LinkButton key={nanoid()} {...item} />
        )}
    </div>
}
