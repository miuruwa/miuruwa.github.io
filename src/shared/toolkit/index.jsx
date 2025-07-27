import {
    createContext,
    useContext,
    useReducer,
    useState
} from "react"

import {
    card, CardReducer,
    settings, SettingsReducer
} from "./reducers"

import {
    CardBehaviour,
    SettingsBehaviour
} from "./behaviours"

import {
    getScreenDeviceType
} from "./screen-device-type"

const getToolKitContext = createContext()

const createPartition = (state, dispatch, Behaviour) => {
    return new Behaviour(state, dispatch)
}

class ToolKit {
    #card
    #settings
    #toolDict

    constructor (cardPartition, settingsPartition) {
        this.#card = cardPartition
        this.#settings = settingsPartition
        this.#toolDict = {}

        Object.defineProperties(this, {
            card: {
                get: () => this.#card
            },

            settings: {
                get: () => this.#settings
            }
        })
    }

    setPartition (name, partition) {
        this.#toolDict[name] = partition
        Object.defineProperty(
            this, name, {
                get: () => this.#toolDict[name],
                configurable: true
            }
        )
    }

    get () {
        return {
            card: this.#card,
            settings: this.#settings,
            ...this.#toolDict
        }
    }
}

function ToolKitContext ({children}) {
    const [
        cardState, cardDispatch
    ] = useReducer(CardReducer, card)

    const [
        settingsState, settingsDispatch
    ] = useReducer(SettingsReducer, settings)
    
    const cardPartition = createPartition(
        cardState, cardDispatch, CardBehaviour
    )
    const settingsPartition = createPartition(
        settingsState, settingsDispatch, SettingsBehaviour
    )

    const toolkit = new ToolKit(
        cardPartition, settingsPartition
    )

    const layoutClassList = ["webx"]
    layoutClassList.push("color-schema-" + toolkit.settings.colorSchema)
    layoutClassList.push(getScreenDeviceType())

    document.body.className = layoutClassList.join(" ")
    
    return <getToolKitContext.Provider value={toolkit}>
        <div className="index">
            {children}
        </div>
    </getToolKitContext.Provider>
}

function useToolKit() {
    return useContext(getToolKitContext)
}

function usePartition (name, partition) {
    const toolkit = useToolKit()

    toolkit.setPartition(name, partition)
}

export {
    ToolKitContext, useToolKit, usePartition
}