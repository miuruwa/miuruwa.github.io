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
            },
            progress: {
                headline: "Progress",
            },
            color: {
                headline: "Color",
            },
            artwork: {
                headline: "Frame type",
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