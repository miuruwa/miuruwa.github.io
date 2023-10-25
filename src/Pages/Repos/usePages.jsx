import { createContext, useContext, useState } from "react";

const Context = createContext()

function PagesContext ({children, initial}) {
    const [page, setState] = useState(initial ? initial : "main")

    function setPage(state) {
        if (state !== page) {
            setState(state);
        }
    }
    const structure = [page, setPage]

    return <Context.Provider value={structure}>
        {children}
    </Context.Provider>
}

function usePages () {
    return useContext(Context)
}

export {
    PagesContext, usePages
}