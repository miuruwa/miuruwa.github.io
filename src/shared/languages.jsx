import VKLogoIcon from "@icons/VKLogoIcon"
import TelegramLogo from "@icons/TelegramLogoIcon"
import GithubLogo from "@icons/GithubLogoIcon"
import XTwitterLogo from "@icons/XTwitterLogoIcon"

const languageData = {
    ru: {
        about: {
            title: "о разработчике",
            short: "22 года, Россия",
            hobby: "Художник & Программист",
            pasta: "Люблю пряники и горячий чай с лимоном."
        },
        links: {
            title: "Мои соцсети",
            links: [
                {
                    icon: <GithubLogo />,
                    title: "GitHub",
                    location: "https://github.com/miuruwa"
                },
                {
                    icon: <VKLogoIcon />,
                    title: "ВКонтакте",
                    location: "https://vk.com/miuruwax8"
                },
                {
                    icon: <TelegramLogo />,
                    title: "Телеграм",
                    location: "https://t.me/miuruwax8"
                },
                {
                    icon: <XTwitterLogo />,
                    title: "X",
                    location: "https://x.com/miuruwax8"
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
                "title": "ми光るわ",
                "timeout": 30,
                "hideSpan": true
            },
            {
                "title": "ми阪るわ",
                "timeout": 30
            },
            {
                "title": "ми茨岡わ",
                "timeout": 30
            },
            {
                "title": "миу潟わ",
                "timeout": 30
            },
            {
                "title": "миу今わ",
                "timeout": 30
            },
            {
                "title": "миу道話",
                "timeout": 30
            },
            {
                "title": "миуру阪",
                "timeout": 60
            },
            {
                "title": "миурува",
                "timeout": 0
            }
        ],
        notFound: {
            title: "не найдено",
            headline: "Затерялся, путник?",
            road: "Возможно вы заблудились. Попробуйте вернуться назад к известной дорожке.",
            tryHome: "Или вернитесь на главную",
            button: "На главную"
        },
        header: {
            home: "главная",
            navigation: "навигация",
            settings: "настройки"
        },
        homepage: {
            title: "главная"
        }
    },
    eng: {
        about: {
            title: "about",
            short: "22 years old, Russia",
            hobby: "Artist & Programmist",
            pasta: "I love gingerbreads and hot lemon tea"
        },
        links: {
            title: "My social",
            links: [
                {
                    icon: <GithubLogo />,
                    title: "GitHub",
                    location: "https://github.com/miuruwa"
                },
                {
                    icon: <VKLogoIcon />,
                    title: "VK",
                    location: "https://vk.com/miuruwax8"
                },
                {
                    icon: <TelegramLogo />,
                    title: "Telegram",
                    location: "https://t.me/miuruwax8"
                },
                {
                    icon: <XTwitterLogo />,
                    title: "X",
                    location: "https://x.com/miuruwax8"
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
    prc: {
        about: {
            title: "关于我",
            short: "22 岁, 俄罗斯",
            hobby: "我是艺术家和程序员",
            pasta: "我喜欢姜饼和热柠檬茶"
        },
        links: {
            title: "我的社交网络",
            links: [
                {
                icon: <GithubLogo />,
                title: "GitHub",
                location: "https://github.com/miuruwa"
            },
            {
                icon: <VKLogoIcon />,
                title: "VK",
                location: "https://vk.com/miuruwax8"
            },
            ]
        },
        homePageTitle: [
            {
                "title": "欢迎来到",
                "timeout": 800
            },
            {
                "title": "mi迎来到",
                "timeout": 80,
                "hideSpan": true
            },
            {
                "title": "miu来到",
                "timeout": 80
            },
            {
                "title": "miuru到",
                "timeout": 80
            },
            {
                "title": "miuruwa",
                "timeout": 0
            }
        ],
        notFound: {
            title: "未找到",
            headline: "迷路了，旅行者？",
            road: "看来你迷路了。 尝试返回已知路径。",
            tryHome: "或返回首页",
            button: "去首页"
        },
        header: {
            home: "首页",
            navigation: "导航",
            settings: "设置"
        },
        homepage: {
            title: "首页"
        }
    }
}

export default languageData;