/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

import { settings, SettingsReducer } from "./reducers";
import { SettingsBehaviour } from "./behaviours";

// @ts-expect-error toolkit is on way to be removed
const getToolKitContext = createContext();
// @ts-expect-error toolkit is on way to be removed
const createPartition = (state, dispatch, Behaviour) => new Behaviour(state, dispatch);

class ToolKit {
  #settings;
  #toolDict;

  // @ts-expect-error toolkit is on way to be removed
  constructor (settingsPartition) {
    this.#settings = settingsPartition;
    this.#toolDict = {};

    Object.defineProperties(this, {
      settings: {
        get: () => this.#settings,
      }
    })
  };

  // @ts-expect-error toolkit is on way to be removed
  setPartition (name, partition) {
    // @ts-expect-error toolkit is on way to be removed
    this.#toolDict[name] = partition;
    Object.defineProperty(this, name, {
      // @ts-expect-error toolkit is on way to be removed
      get: () => this.#toolDict[name],
      configurable: true,
    });
  };

  get () {
    return { settings: this.#settings, ...this.#toolDict }
  }
}

// @ts-expect-error toolkit is on way to be removed
export function ToolKitContext ({children}) {
  const [ settingsState, settingsDispatch ] = useReducer(SettingsReducer, settings);

  const settingsPartition = createPartition(settingsState, settingsDispatch, SettingsBehaviour);
  const toolkit = new ToolKit(settingsPartition);

  return <getToolKitContext.Provider value={toolkit}>
    <div className="index">{children}</div>
  </getToolKitContext.Provider>
}

export const useToolKit = () => useContext(getToolKitContext);
// @ts-expect-error toolkit is on way to be removed
export const usePartition = (name, partition) => useToolKit().setPartition(name, partition);
