import {
    useToolKit
} from "@shared/toolkit"

import {
    CardBlock, Button
} from "@ui"
import { useNavigate } from "react-router-dom";

import languages from "@shared/languages"

const Message = () => {
    const toolkit = useToolKit()
    const navigate = useNavigate()

    const pageData = languages[toolkit.settings.language].notFound

    return <div className="not-found-content">
        <h3>
            {pageData.headline}
        </h3>
        <CardBlock>
            <p>
                {pageData.road}
            </p>
            <p>
                {pageData.tryHome}
            </p>
            <Button 
                title={pageData.button}
                theme={"white"}
                onClick={() => navigate("/home")} />
        </CardBlock>
    </div>
}

export default Message;
