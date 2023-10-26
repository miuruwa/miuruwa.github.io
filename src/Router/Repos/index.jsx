
import {
    PagesContext
} from "./usePages"
import {
    getUrlParameter
} from "~/utils/URLParameters"

import Layout from "./Layout"

import "./stylesheet.scss"


export default function () {
    return <PagesContext initial={getUrlParameter("id")}>
        <Layout />
    </PagesContext>
}