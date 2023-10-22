export class Partition {
    #state
    #dispatch
    
    constructor(dispatch, state) {
        this.#state = state
        this.#dispatch = dispatch

        this.repos = {}
        this.settings = {}

        Object.defineProperties(this.repos, {
            mounted: {
                get: () => this.#state.repos.mounted,
                set: value => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-page-mount",
                            page: "repos",
                            state: value
                        })
                    }
                }
            },

            loaded: {
                get: () => this.#state.repos.loaded,
                set: value => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-page-visiblity",
                            page: "repos",
                            state: value
                        })
                    }
                }
            },

            id: {
                get: () => this.#state.repos.id,
                set: value => {
                    if (typeof value == "string" && value !== this.#state.repos.id) {
                        this.repos.loaded = false

                        setTimeout(
                            () => {
                                this.#dispatch({
                                    type: "set-page-number",
                                    page: "repos",
                                    state: value
                                })
                                
                                this.repos.loaded = true
                            }, 100
                        )
                    }
                    
                }
            }
        })

        Object.defineProperties(this.settings, {
            mounted: {
                get: () => this.#state.settings.mounted,
                set: value => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-page-mount",
                            page: "settings",
                            state: value
                        })
                    }
                }
            },

            loaded: {
                get: () => this.#state.settings.loaded,
                set: value => {
                    if (typeof value == "boolean") {
                        this.#dispatch({
                            type: "set-page-visiblity",
                            page: "settings",
                            state: value
                        })
                    }
                }
            },

            number: {
                get: () => this.#state.settings.number,
                set: value => {
                    if (typeof value == "number" && value !== this.#state.settings.number) {
                        this.settings.loaded = false

                        setTimeout(
                            () => {
                                    this.#dispatch({
                                        type: "set-page-number",
                                        page: "settings",
                                        state: value
                                    })
                                
                                this.settings.loaded = true
                            }, 100
                        )
                    }
                    
                }
            }
        })
    }
}