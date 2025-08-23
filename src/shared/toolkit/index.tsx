import { createContext, useContext, useReducer } from "react";

import { settings, SettingsReducer } from "./reducers";
import { SettingsBehaviour } from "./behaviours";

// @ts-ignore
const getToolKitContext = createContext();
// @ts-ignore
const createPartition = (state, dispatch, Behaviour) => new Behaviour(state, dispatch);

class ToolKit {
  // @ts-ignore
  #settings;
  // @ts-ignore
  #toolDict;

  // @ts-ignore
  constructor (settingsPartition) {
    this.#settings = settingsPartition;
    this.#toolDict = {};

    Object.defineProperties(this, {
      settings: {
        get: () => this.#settings,
      }
    })
  };

  // @ts-ignore
  setPartition (name, partition) {
    // @ts-ignore
    this.#toolDict[name] = partition;
    Object.defineProperty(this, name, {
      // @ts-ignore
      get: () => this.#toolDict[name],
      configurable: true,
    });
  };

  get () {
    return { settings: this.#settings, ...this.#toolDict }
  }
}

// @ts-ignore
function ToolKitContext ({children}) {
  const [ settingsState, settingsDispatch ] = useReducer(SettingsReducer, settings);
  
  const settingsPartition = createPartition(settingsState, settingsDispatch, SettingsBehaviour);
  const toolkit = new ToolKit(settingsPartition);
  
  return <getToolKitContext.Provider value={toolkit}>
    <div className="index">{children}</div>
  </getToolKitContext.Provider>
}

const useToolKit = () => useContext(getToolKitContext);
// @ts-ignore
const usePartition = (name, partition) => useToolKit().setPartition(name, partition);

export { ToolKitContext, useToolKit, usePartition };
