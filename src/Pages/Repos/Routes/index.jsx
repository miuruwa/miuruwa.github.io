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
            label: "О разделе",
            repoID: "main",
            content: <Main />
        }
    ],
    [
        {
            icon: <WebXIcon />,
            label: "WebX",
            repoID: "webx",
            content: <WebX />
        },
        {
            icon: <CartifyIcon />,
            label: "Cartify",
            repoID: "cartify",
            content: <Cartify />
        },
        {
            icon: <NotesIcon />,
            label: "Заметки",
            repoID: "notify",
            content: <Notify />
        }
    ],
    [
        {
            icon: <VKBotKitIcon />,
            label: "VKBotKit",
            repoID: "vkbotkit",
            content: <VKBotKit />
        },
        {
            icon: <BotIcon />,
            label: "Марсель",
            repoID: "marcelbot",
            content: <MarcelBot />
        }
    ]
]
