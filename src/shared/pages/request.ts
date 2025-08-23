import { routes } from "../routes";


export const request: {
    translations: Translations.Translate<Pages.Request>,
    addonsPrice: Record<Requests.Addons, Shared.CurrencyList>,
    configPrice: {
        progress: Record<Requests.Progress, Shared.CurrencyList>,
        color: Record<Requests.Color, Shared.CurrencyList>,
        artwork: Record<Requests.Artwork, Shared.CurrencyList>,
    }
} = {
    translations: {
        eng: {
            headline: "Request commission",
            characterCount: "Character count",
            addons: {
                headline: "Addons",
                list: {
                    addBackground: "Simple background",
                    specialRequest: "Special",
                    commercialUseFee: "For commercial use",
                    rushFee: "Rush",
                }
            },
            config: {
                progress: {
                    headline: "Progress",
                    list: {
                        sk: "Sketch",
                        ln: "Lineart",
                    },
                },
                color: {
                    headline: "Color",
                    list: {
                        nn: "None",
                        bw: "Black & White",
                        sm: "Simple",
                        rn: "Render",
                    },
                },
                artwork: {
                    headline: "Frame type",
                    list: {
                        bu: "Bust",
                        hb: "Half body",
                        fb: "Full body",
                        ch: "Chibi",
                        rs: "Reference sheet",
                        eb: "Eye banner",
                    },
                },
            },
            links: [
                {
                    title: "Terms of service",
                    path: routes.tos
                },
                {
                    title: "Details",
                    path: routes.commissionInfo
                },
            ]
        }
    },
    addonsPrice: {
        addBackground: {
            usd: 10
        },
        specialRequest: {
            usd: 10
        },
        commercialUseFee: {
            usd: 10
        },
        rushFee: {
            usd: 10
        },
    },
    configPrice: {
        progress: {
            sk: {
                usd: 0,
            },
            ln: {
                usd: 40,
            },
        },
        color: {
            nn: {
                usd: 0,
            },
            bw: {
                usd: 1,
            },
            sm: {
                usd: 5,
            },
            rn: {
                usd: 20,
            },
        },
        artwork: {
            bu: {
                usd: 10,
            },
            hb: {
                usd: 20,
            },
            fb: {
                usd: 40,
            },
            ch: {
                usd: 5,
            },
            rs: {
                usd: 50,
            },
            eb: {
                usd: 10,
            },
        },
    },
}