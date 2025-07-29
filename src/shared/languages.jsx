import KoFiLogo from "@icons/KoFiLogo";
import TelegramLogoIcon from "@icons/TelegramLogoIcon";
import VKLogoIcon from "@icons/VKLogoIcon";
import XTwitterLogoIcon from "@icons/XTwitterLogoIcon";

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
            path: "/terms-of-service"
          },
          {
            title: "Waitlist",
            path: "/waitlist"
          },
          {
            title: "Details",
            path: "/details"
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
      title: "Commission details",
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
          path: "/about"
        },
        {
          title: "Terms of service",
          path: "/terms-of-service"
        },
        {
          title: "Base price",
          path: "" // price list is modal
        },
        {
          title: "Submit a commission",
          path: "/submit-commission"
        },
      ]
    },
    submit: {
      title: "Submit a commission"
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
          path: "/home",
        },
        {
          title: "Waitlist",
          path: "/waitlist",
        },
        {
          title: "Commission details",
          path: "/details",
        },
      ]
    },
    footer: {
      navigation: "navigation",
      links: [
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Home",
          path: "/home",
        },
        {
          title: "Terms of service",
          path: "/terms-of-service",
        },
        {
          title: "Commissions",
          path: "/details",
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
  },
}

export default languageData;