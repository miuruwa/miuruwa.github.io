import { routes } from "./routes";

export const page = {
    eng: {
        title: "Request information",
        preferences: [
            {
                headline: "Will draw",
                list: [
                "+ OC", "+ Furry", "+ Realistic", "+ Slightly suggestive"
                ]
            },
            {
                headline: "Won't draw",
                list: [
                "- NSFW", "- Fan art", "- Mecha"
                ]
            },
        ],
        addons: {
            headline: "ADDONS",
            list: [
                "50% per extra character", "simple background starting from $10", "special request", "commercial use fee", "rush fee"
            ]
        },
        turnarounds: {
            headline: "Turnarounds",
            description: "1-6 weeks depending on complexity"
        },
        links: [
            {
                title: "About me",
                path: routes.aboutMe
            },
            {
                title: "Terms of service",
                path: routes.tos
            },
            {
                title: "Request commission",
                path: routes.request
            },
        ]
    },
}