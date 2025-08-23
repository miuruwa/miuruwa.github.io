export class SettingsBehaviour {
  #state
  #dispatch

  // @ts-expect-error toolkit is on way to be removed
  constructor(state, dispatch) {
    this.#state = state
    this.#dispatch = dispatch

    Object.defineProperties(this, {
      language: {
        get: () => this.#state.language,
        set: (value) => {
          if (typeof value == "string") {
            this.#dispatch({
              type: "set-language",
              state: value
            })
          }
        }
      },
    })
  }
}