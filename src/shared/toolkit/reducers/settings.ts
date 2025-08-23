export const settings = {
  language: localStorage.getItem("language") || "unset",
}

// @ts-expect-error toolkit will be removed in the following versions
export function SettingsReducer(state, action) {
  const newState = { ...state };

  switch (action.type) {
    case "set-language":
      newState.language = action.state

      localStorage.setItem(
        "language",
        action.state
      )

      break

    default:
      throw Error(`Unknown action (${action.type})`)
  }

  return newState
}
