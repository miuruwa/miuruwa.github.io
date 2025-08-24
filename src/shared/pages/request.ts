import { routes } from "../routes";

export const request: {
    translations: Translations.Translate<Pages.Request>,
    addonsPrice: Shared.CurrencyList<Requests.Addons>[],
    configPrice: {
        progress:Shared.CurrencyList<Requests.Progress>[],
        color: Shared.CurrencyList<Requests.Color>[],
        artwork: Shared.CurrencyList<Requests.Artwork>[],
    }
} = {
    translations: {
        eng: {
            headline: "Request commission",
            characterCount: "Character count",
            addons: {
                headline: "Addons",
                list: [
                    {
                        name: "addBackground",
                        value: "Simple background",
                    },
                    {
                        name: "specialRequest",
                        value: "Special",
                    },
                    {
                        name: "commercialUseFee",
                        value: "For commercial use",
                    },
                    {
                        name: "rushFee",
                        value: "Rush",
                    },
                ]
            },
            config: {
                progress: {
                    headline: "Progress",
                    list: [
                        {
                            name: "sk",
                            value: "Sketch",
                        },
                        {
                            name: "ln",
                            value: "Lineart",
                        },
                    ],
                },
                color: {
                    headline: "Color",
                    list: [
                        {
                            name: "nn",
                            value: "None",
                        },
                        {
                            name: "bw",
                            value: "Black & White",
                        },
                        {
                            name: "sm",
                            value: "Simple",
                        },
                        {
                            name: "rn",
                            value: "Render",
                        },
                    ],
                },
                artwork: {
                    headline: "Frame type",
                    list: [
                        {
                            name: "bu",
                            value: "Bust",
                        },
                        {
                            name: "hb",
                            value: "Half body",
                        },
                        {
                            name: "fb",
                            value: "Full body",
                        },
                        {
                            name: "ch",
                            value: "Chibi",
                        },
                        {
                            name: "rs",
                            value: "Reference sheet",
                        },
                        {
                            name: "eb",
                            value: "Eye banner",
                        },
                    ],
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
    addonsPrice: [
        {
            name: "addBackground",
            currency: [
                {
                    name: "usd",
                    value: 10
                },
            ],
        },
        {
            name: "specialRequest",
            currency: [
                {
                    name: "usd",
                    value: 10
                },
            ],
        },
        {
            name: "commercialUseFee",
            currency: [
                {
                    name: "usd",
                    value: 10
                },
            ],
        },
        {
            name: "rushFee",
            currency: [
                {
                    name: "usd",
                    value: 10
                },
            ],
        },
    ],
    configPrice: {
        progress: [
            {
                name: "sk",
                currency: [
                    {
                        name: "usd",
                        value: 0,
                    },
                ],
            },
            {
                name: "ln",
                currency: [
                    {
                        name: "usd",
                        value: 40
                    },
                ],
            },
        ],
        color: [
            {
                name: "nn",
                currency: [
                    {
                        name: "usd",
                        value: 0,
                    },
                ],
            },
            {
                name: "bw",
                currency: [
                    {
                        name: "usd",
                        value: 1,
                    },
                ],
            },
            {
                name: "sm",
                currency: [
                    {
                        name: "usd",
                        value: 5,
                    },
                ],
            },
            {
                name: "rn",
                currency: [
                    {
                        name: "usd",
                        value: 20
                    },
                ],
            },
        ],
        artwork: [
            {
                name: "bu",
                currency: [
                    {
                        name: "usd",
                        value: 10,
                    },
                ],
            },
            {
                name: "hb",
                currency: [
                    {
                        name: "usd",
                        value: 20,
                    },
                ],
            },
            {
                name: "fb",
                currency: [
                    {
                        name: "usd",
                        value: 40,
                    },
                ],
            },
            {
                name: "ch",
                currency: [
                    {
                        name: "usd",
                        value: 5,
                    },
                ],
            },
            {
                name: "rs",
                currency: [
                    {
                        name: "usd",
                        value: 50,
                    },
                ],
            },
            {
                name: "eb",
                currency: [
                    {
                        name: "usd",
                        value: 10,
                    },
                ],
            },
        ],
    },
}