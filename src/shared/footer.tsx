import KoFiLogo from "@icons/KoFiLogo";
import TelegramLogoIcon from "@icons/TelegramLogoIcon";
import VKLogoIcon from "@icons/VKLogoIcon";
import XTwitterLogoIcon from "@icons/XTwitterLogoIcon";

import { routes } from "./routes";

export const footer: {
    translations: Translations.Translate<Shared.Footer>
} = {
    translations: {
        eng: {
            info: {
                headline: "Celestial expanse",
                description: "Made by miuruwax8",
            },
            navigation: {
                headline: "navigation",
                links: [
                    {
                        title: "About",
                        path: routes.aboutMe,
                    },
                    {
                        title: "Home",
                        path: routes.home,
                    },
                    {
                        title: "Terms of service",
                        path: routes.tos,
                    },
                    {
                        title: "Commissions",
                        path: routes.commissionInfo,
                    },
                    {
                        title: "Settings",
                        path: routes.settings,
                    },
                ],
                social: [
                    {
                        icon: <KoFiLogo />,
                        location: "https://ko-fi.com/miuruwa",
                    },
                    {
                        icon: <VKLogoIcon />,
                        location: "https://vk.com/miuruwax8",
                    },
                    {
                        icon: <XTwitterLogoIcon />,
                        location: "https://x.com/miuruwax8",
                    },
                    {
                        icon: <TelegramLogoIcon />,
                        location: "https://t.me/miuruwax8",
                    },
                ],
            }
        }
    }
}