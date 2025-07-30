import KoFiLogo from "@icons/KoFiLogo";
import TelegramLogoIcon from "@icons/TelegramLogoIcon";
import VKLogoIcon from "@icons/VKLogoIcon";
import XTwitterLogoIcon from "@icons/XTwitterLogoIcon";

import { routes } from "./routes";

const languageData = {
  eng: {
    email: "miuruwadev@gmail.com",
    about: {
      title: "About me",
      description: "My nickname is Miu Ruwa. I’m 22 years old. I’m from Russia. I draw art in different styles and make websites/PWA!",
      commissions: {
        title: "Commissions",
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
    },
    details: {
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
    homepage: {
      title: "Home",
      headline: "Miu Ruwa"
    },
    notFound: {
      title: "Not found",
      headline: "Lost, traveler?",
      road: "Seems like you are lost. Try going back to a known path.",
      button: "Go home"
    },
    tos: {
      title: "Terms of service",
      headline: "✦Terms of service✦",
      noteMark: "Important",
      note: "Ordering artwork from me, you agree to my terms of service and in the future you cannot make claims against the document.",
      terms: [
        {
          headline: "Payment",
          list: [
            "Accepted methods of payment: Ko-Fi (USD)",
            "An invoice will be send prior to starting commission",
            "Payment upfront is of minimum 50%",
            "Pricing of special requests shall be discussed based on complexity (special art styles etc)",
            {
              headline: "Commercial use fee",
              list: [
                "50% of commission price if used to promote any type of social media",
                "100% if used as 2D model",
                "200% if used for merchandising"
              ]
            },
            {
              headline: "Rush fee", 
              list: ["50-100% of commission price"]
            },
            "Transaction fees will be included in the final price",
            "No refunds (unless I am unable to finish it due to personal reasons)"
          ]
        },
        {
          headline: "Terms",
          list: [
            "I reserve the right to decline a request",
            "The artist retains copyright of the commissioned illustration",
            "Commissions without commercial fee are for personal use only, such as profile pictures, wallpapers and personal prints",
            "Please send references of the characters and background, if you have any",
            "Unless requested in advance for privacy by the client I reserve the right to create content and advertise using the commissioned illustration (i.e. posting on social media and streaming)",
            "You're able to request 2 minor revisions and 1 major revision",
          ]
        }
      ],
      navigate: [
        {
          title: "Home",
          path: routes.home,
        },
        {
          title: "Waitlist",
          path: routes.waitList,
        },
        {
          title: "Commission details",
          path: routes.commissionInfo,
        },
      ]
    },
    footer: {
      navigation: "navigation",
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
    },
    settings: {
      title: "settings",
    },
    request: {
      title: "Request commission",
      characterCount: "Character count",
      briefTitle: "Describe your request",
      briedPlaceholder: "Draw something for me...",
      addons: {
        title: "Addons",
        list: {
          "addBackground": {
            title: "Simple background",
            price: 10
          },
          "specialRequest": {
            title: "Special",
            price: 10
          },
          "commercialUseFee": {
            title: "For commercial use",
            price: 10
          },
          "rushFee": {
            title: "Rush",
            price: 10
          },
        }},
      config: {
        "progress": {
          title: "Progress",
          list: {
            "sk": {
              title: "Sketch",
              price: 0
            },
            "ln": {
              title: "Lineart",
              price: 40
            },
          },
        },
        "color": {
          title: "Color",
          list: {
            "nn": {
              title: "None",
              price: 0
            },
            "bw": {
              title: "Black & White",
              price: 1
            },
            "sm": {
              title: "Simple",
              price: 5
            },
            "rn": {
              title: "Render",
              price: 20
            },
          },
        },
        "artwork": {
          title: "Frame type",
          list: {
            "bu": {
              title: "Bust",
              price: 10
            },
            "hb": {
              title: "Half body",
              price: 20
            },
            "fb": {
              title: "Full body",
              price: 40
            },
            "ch": {
              title: "Chibi",
              price: 5
            },
            "rs": {
              title: "Reference sheet",
              price: 50
            },
            "eb": {
              title: "Eye banner",
              price: 10
            },
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
        {
          title: "Request commission",
          path: ""
        },
      ]
    },
    startup: {
      title: "startup",
    }
  },
}

export default languageData;