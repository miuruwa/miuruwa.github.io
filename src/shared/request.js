import { routes } from "./routes";

export const page = {
    eng: {
        title: "Request commission",
        characterCount: "Character count",
        briefTitle: "Describe your request",
        briedPlaceholder: "Draw something for me...",
        addons: {
            title: "Addons",
            list: {
                "addBackground": "Simple background",
                "specialRequest": "Special",
                "commercialUseFee": "For commercial use",
                "rushFee": "Rush",
            }
        },
        config: {
            "progress": {
                title: "Progress",
                list: {
                    "sk": "Sketch",
                    "ln": "Lineart",
                },
            },
            "color": {
                title: "Color",
                list: {
                    "nn": "None",
                    "bw": "Black & White",
                    "sm": "Simple",
                    "rn": "Render",
                },
            },
            "artwork": {
                title: "Frame type",
                list: {
                    "bu": "Bust",
                    "hb": "Half body",
                    "fb": "Full body",
                    "ch": "Chibi",
                    "rs": "Reference sheet",
                    "eb": "Eye banner",
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
};

export const addonsPrice = {
    "addBackground": {
        usd: 10
    },
    "specialRequest": {
        usd: 10
    },
    "commercialUseFee": {
        usd: 10
    },
    "rushFee": {
        usd: 10
    },
}

export const configPrice = {
    "progress": {
        "sk": {
            usd: 0,
        },
        "ln": {
            usd: 40,
        },
    },
    "color": {
        "nn": {
            usd: 0,
        },
        "bw": {
            usd: 1,
        },
        "sm": {
            usd: 5,
        },
        "rn": {
            usd: 20,
        },
    },
    "artwork": {
        "bu": {
            usd: 10,
        },
        "hb": {
            usd: 20,
        },
        "fb": {
            usd: 40,
        },
        "ch": {
            usd: 5,
        },
        "rs": {
            usd: 50,
        },
        "eb": {
            usd: 10,
        },
    },
};