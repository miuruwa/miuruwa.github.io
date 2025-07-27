import XTwitterLogo from "@icons/XTwitterLogoIcon"
import VKLogoIcon from "@icons/VKLogoIcon";
import TelegramLogoIcon from "@icons/TelegramLogoIcon";
import KoFiLogo from "@icons/KoFiLogo"

const languageData = {
    eng: {
        pageNavigation: {
            home: "Homepage"
        },
        about: {
            title: "About me",
            description: "My nickname is Miu Ruwa. I’m 22 years old. I’m from Russia. I draw art in different styles and make websites/PWA!",
        },
        commissions: {
            title: "Commissions",
            note: "Please read my terms of service before ordering a commission!",
            tos: "Terms of service",
            waitlist: "Waitlist",
            details: "Details"
        },
        links: {
            title: "My social",
            links: [
                {
                    icon: <XTwitterLogo />,
                    title: "X",
                    location: "https://x.com/miuruwax8"
                },
                {
                    icon: <KoFiLogo />,
                    title: "KoFi",
                    location: "ko-fi.com/miuruwa"
                }
            ]
        },
        homePageTitle: [
            {
                "title": "見うるわ",
                "timeout": 300
            },
            {
                "title": "香岡るわ",
                "timeout": 30
            },
            {
                "title": "潟道るわ",
                "timeout": 30
            },
            {
                "title": "mi光るわ",
                "timeout": 30,
                "hideSpan": true
            },
            {
                "title": "mi阪るわ",
                "timeout": 30
            },
            {
                "title": "mi茨岡わ",
                "timeout": 30
            },
            {
                "title": "miu潟わ",
                "timeout": 30
            },
            {
                "title": "miu今わ",
                "timeout": 30
            },
            {
                "title": "miu道話",
                "timeout": 30
            },
            {
                "title": "miuru阪",
                "timeout": 60
            },
            {
                "title": "miuruwa",
                "timeout": 0
            }
        ],
        notFound: {
            title: "not found",
            headline: "Lost, traveler?",
            road: "Seems like you are lost. Try going back to a known path.",
            tryHome: "Or return to home page",
            button: "Go to home"
        },
        header: {
            home: "homepage",
            navigation: "navigation",
            settings: "settings"
        },
        homepage: {
            title: "homepage"
        }
    },
    ru: {
        pageNavigation: {
            home: "Главная"
        },
        about: {
            title: "Обо мне",
            description: "Мой никнейм Miu Ruwa. Мне 22 года. Я из России. Я рисую картинки в разных стилях и пишу сайты/PWA!",
        },
        commissions: {
            title: "Рисунки на заказ",
            note: "Пожалуйста, перед заказом прочитайте политику оказания услуги!",
            tos: "Политика оказания услуги",
            waitlist: "Очередь",
            details: "Детали"
        },
        links: {
            title: "Мои соцсети",
            links: [
                {
                    icon: <VKLogoIcon />,
                    title: "VK",
                    location: "https://vk.com/miuruwax8"
                },
                {
                    icon: <TelegramLogoIcon />,
                    title: "Телеграм",
                    location: "https://t.me/miuruwax8"
                }
            ]
        },
        homePageTitle: [
            {
                "title": "見うるわ",
                "timeout": 300
            },
            {
                "title": "香岡るわ",
                "timeout": 30
            },
            {
                "title": "潟道るわ",
                "timeout": 30
            },
            {
                "title": "mi光るわ",
                "timeout": 30,
                "hideSpan": true
            },
            {
                "title": "mi阪るわ",
                "timeout": 30
            },
            {
                "title": "mi茨岡わ",
                "timeout": 30
            },
            {
                "title": "miu潟わ",
                "timeout": 30
            },
            {
                "title": "miu今わ",
                "timeout": 30
            },
            {
                "title": "miu道話",
                "timeout": 30
            },
            {
                "title": "miuru阪",
                "timeout": 60
            },
            {
                "title": "miuruwa",
                "timeout": 0
            }
        ],
        notFound: {
            title: "not found",
            headline: "Lost, traveler?",
            road: "Seems like you are lost. Try going back to a known path.",
            tryHome: "Or return to home page",
            button: "Go to home"
        },
        header: {
            home: "homepage",
            navigation: "navigation",
            settings: "settings"
        },
        homepage: {
            title: "homepage"
        }
    },
}

export default languageData;