import {
    useReducer
} from "react"

import {
    usePartition
} from "@webx/toolkit"

import { 
    Reducer as PagesReducer, 
    state as pages
} from "./reducer"

import { 
    Partition as PagesPartition
} from "./partition"

export default function () {
    const [
        state, dispatch
    ] = useReducer(PagesReducer, pages)

    usePartition(
        "pages", 
        new PagesPartition(
            dispatch, state
        )
    )
}