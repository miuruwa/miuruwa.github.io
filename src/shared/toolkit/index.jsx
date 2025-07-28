import { createContext, useContext, useReducer } from "react";

import { settings, SettingsReducer } from "./reducers";
import { SettingsBehaviour } from "./behaviours";

const getToolKitContext = createContext();
const createPartition = (state, dispatch, Behaviour) => new Behaviour(state, dispatch);

class ToolKit {
  #settings;
  #toolDict;

  constructor (settingsPartition) {
    this.#settings = settingsPartition;
    this.#toolDict = {};

    Object.defineProperties(this, {
      settings: {
        get: () => this.#settings,
      }
    })
  };

  setPartition (name, partition) {
    this.#toolDict[name] = partition;
    Object.defineProperty(this, name, {
      get: () => this.#toolDict[name],
      configurable: true,
    });
  };

  get () {
    return { settings: this.#settings, ...this.#toolDict }
  }
}

function ToolKitContext ({children}) {
  const [ settingsState, settingsDispatch ] = useReducer(SettingsReducer, settings);
  
  const settingsPartition = createPartition(settingsState, settingsDispatch, SettingsBehaviour);
  const toolkit = new ToolKit(settingsPartition);
  
  return <getToolKitContext.Provider value={toolkit}>
    <div className="index">{children}</div>
  </getToolKitContext.Provider>
}

const useToolKit = () => useContext(getToolKitContext);
const usePartition = (name, partition) => useToolKit().setPartition(name, partition);

export { ToolKitContext, useToolKit, usePartition };
