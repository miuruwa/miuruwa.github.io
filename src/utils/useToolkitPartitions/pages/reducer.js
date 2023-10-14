export const state = {
    settings: {
        mounted: true,
        loaded: true,
        number: parseInt(
                localStorage.getItem("page-settings-number")
            ) || 0,
    },
    repos: {
        mounted: true,
        loaded: true,
        id: localStorage.getItem("page-repos-id")
    },
}

export function Reducer(state, action) {
    var newState = { ...state }

    switch (action.type) {
        case "set-page-mount":
            switch (action.page) {
                case "settings":
                    newState.settings.mounted = action.state

                    break
                
                case "repos":
                    newState.repos.mounted = action.state

                    break
                    
                default:
                    Error('Unknown page.')
            }

            break

        case "set-page-visiblity":
            switch (action.page) {
                case "settings":
                    newState.settings.loaded = action.state

                    break

                case "repos":
                    newState.repos.loaded = action.state

                    break
                
                default:
                    Error('Unknown page.')
            }

            break

        case "set-page-number":
            switch (action.page) {
                case "settings":
                    newState.settings.number = action.state
                    
                    localStorage.setItem(
                        "page-settings-number", 
                        JSON.stringify(
                            action.state
                        )
                    )

                    break

                case "repos":
                    newState.repos.id = action.state
                    
                    localStorage.setItem(
                        "page-repos-id", 
                        action.state
                    )

                    break
                
                default:
                    Error('Unknown page.')
            }

            break

        default:
            throw Error('Unknown action.')
    }

    return newState
}
