import { routes } from "../routes";

export const about: {
    translations: Translations.Translate<Pages.About>
} = {
    translations: {
        eng: {
            headline: "About me",
            description: "My nickname is Miu Ruwa. I’m 22 years old. I’m from Russia. I draw art in different styles and make websites/PWA!",
            commissions: {
                headline: "Commissions",
                note: "Please read my terms of service before ordering a commission!",
                links: [
                {
                    title: "Terms of service",
                    path: routes.tos
                },
                {
                    title: "Waitlist",
                    path: routes.waitList
                },
                {
                    title: "Request information",
                    path: routes.commissionInfo
                },
                ]
            },
            hardware: {
                headline: "Hardware",
                list: ["Gaomon WH851", "My own laptop"]
            },
            software: {
                headline: "Software",
                list: ["Clip Studio Paint Pro", "Figma", "VS Code"]
            }
        }
    }
}
