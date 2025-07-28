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
      links: [
        {
          title: "Terms of service",
          path: "/terms-of-service"
        },
        // {
        //   title: "Waitlist",
        //   path: "/waitlist"
        // },
        // {
        //   title: "Details",
        //   path: "/pricelist"
        // },
      ]
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
    notFound: {
      title: "not found",
      headline: "Lost, traveler?",
      road: "Seems like you are lost. Try going back to a known path.",
      button: "Go home"
    },
    homepage: {
      title: "homepage",
      headline: "Miu Ruwa"
    },
    tos: {
      title: "Terms of service",
      headline: "✦Terms of service✦",
      noteMark: "Important",
      note: "Заказывая у меня artwork вы соглашаетесь с моей terms of service и в дальнейшем не можете выставить претензии к художнику",
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
        // {
        //   title: "Waitlist",
        //   path: "/waitlist",
        // },
        // {
        //   title: "Commission details",
        //   path: "/details",
        // },
      ]
    }
  },
  ru: {
    pageNavigation: {
      home: "Домой"
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
    notFound: {
      title: "Не найдено",
      headline: "Потерялся, путник?",
      road: "Видимо ты оказался там, где тебе не нужно было оказываться. Вернись на свою тропу жизни.",
      tryHome: "Или вернись на домашнюю страницу",
      button: "Домой"
    },
    homepage: {
      title: "Домашняя",
      headline: "Миу Рува"
    }
  },
}

export default languageData;