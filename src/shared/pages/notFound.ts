import { routes } from "../routes";

export const notFound: {
    translations: Translations.Translate<Pages.NotFound>
} = {
    translations: {
        eng: {
            headline: "Lost, traveler?",
            description: "Seems like you are lost. Try going back to a known path.",
            button: {
                title: "Go home",
                path: routes.home
            }
        },
    }
}