import { useToolKit } from "@shared/toolkit";
import { nanoid } from "nanoid";
import languageData from "@shared/languages"
import { Button } from "@ui";
import "./stylesheet.scss"

export default function () {
    const toolkit = useToolKit()
    const pageData = languageData[toolkit.settings.language].links

    return <>
        <h3>
            {pageData.title}
        </h3>
        <div className="about-dev-links">
            {pageData.links.map(
                item => {
                    return <Button 
                        key={nanoid()} 
                        icon={item.icon} 
                        theme="transparent" 
                        title={item.title} 
                        onClick={() => window.location.href = item.location} 
                    />
                }
            )}
        </div>
    </>
}
