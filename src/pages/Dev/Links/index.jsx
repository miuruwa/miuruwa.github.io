import { useToolKit } from "@shared/toolkit";
import { nanoid } from "nanoid";
import LinkButton from "./LinkButton";
import linksData from "./linksData";
import languages from "./languages"

import "./stylesheet.scss"

export default function () {
    const toolkit = useToolKit()

    const actualLanguage = languages[toolkit.settings.language]
    
    return <>
        <h3>
            {actualLanguage.title}
        </h3>
        <div className="about-dev-links">
            {linksData.map(
                item => <LinkButton key={nanoid()} {...item} />
            )}
        </div>
    </>
}
