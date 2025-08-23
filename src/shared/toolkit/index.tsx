/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

import { settings, SettingsReducer } from "./reducers";
import { SettingsBehaviour } from "./behaviours";

// @ts-expect-error toolkit will be removed in the following versions
const getToolKitContext = createContext();
// @ts-expect-error toolkit will be removed in the following versions
const createPartition = (state, dispatch, Behaviour) => new Behaviour(state, dispatch);

class ToolKit {
  #settings;
  #toolDict;

  // @ts-expect-error toolkit will be removed in the following versions
  constructor (settingsPartition) {
    this.#settings = settingsPartition;
    this.#toolDict = {};

    Object.defineProperties(this, {
      settings: {
        get: () => this.#settings,
      }
    })
  };

  // @ts-expect-error toolkit will be removed in the following versions
  setPartition (name, partition) {
    // @ts-expect-error toolkit will be removed in the following versions
    this.#toolDict[name] = partition;
    Object.defineProperty(this, name, {
      // @ts-expect-error toolkit will be removed in the following versions
      get: () => this.#toolDict[name],
      configurable: true,
    });
  };

  get () {
    return { settings: this.#settings, ...this.#toolDict }
  }
}

// @ts-expect-error toolkit will be removed in the following versions
export function ToolKitContext ({children}) {
  const [ settingsState, settingsDispatch ] = useReducer(SettingsReducer, settings);

  const settingsPartition = createPartition(settingsState, settingsDispatch, SettingsBehaviour);
  const toolkit = new ToolKit(settingsPartition);

  return <getToolKitContext.Provider value={toolkit}>
    <div className="index">{children}</div>
  </getToolKitContext.Provider>
}

export const useToolKit = () => useContext(getToolKitContext);
// @ts-expect-error toolkit will be removed in the following versions
export const usePartition = (name, partition) => useToolKit().setPartition(name, partition);
