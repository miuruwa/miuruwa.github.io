import Main from "./Main"

import WebX from "./WebX"
import Cartify from "./Cartify"
import Notify from "./Notify"

import VKBotKit from "./VKBotKit"
import MarcelBot from "./MarcelBot"

import DevIcon from "@webx/icons/DevIcon"

import WebXIcon from "@webx/icons/WebXIcon"
import CartifyIcon from "@webx/icons/CartifyIcon"
import NotesIcon from "@webx/icons/NotesIcon"

import VKBotKitIcon from "@webx/icons/VKBotKitIcon"
import BotIcon from "@webx/icons/BotIcon"


export default [
    [
        {
            icon: <DevIcon />,
            label: {
                "ru": "О разделе",
                "eng": "About partition"
            },
            repoID: "main",
            content: <Main />
        }
    ],
    [
        {
            icon: <WebXIcon />,
            label: {
                "ru": "WebX",
                "eng": "WebX"
            },
            repoID: "webx",
            content: <WebX />
        },
        {
            icon: <CartifyIcon />,
            label: {
                "ru": "Калькулятор покупок",
                "eng": "Cartify"
            },
            repoID: "cartify",
            content: <Cartify />
        },
        {
            icon: <NotesIcon />,
            label: {
                "ru": "Заметки",
                "eng": "Notes"
            },
            repoID: "notify",
            content: <Notify />
        }
    ],
    [
        {
            icon: <VKBotKitIcon />,
            label: {
                "ru": "VKBotKit",
                "eng": "VKBotKit"
            },
            repoID: "vkbotkit",
            content: <VKBotKit />
        },
        {
            icon: <BotIcon />,
            label: {
                "ru": "Марсель",
                "eng": "Marcel"
            },
            repoID: "marcelbot",
            content: <MarcelBot />
        }
    ]
]
