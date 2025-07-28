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
        {
          title: "Waitlist",
          path: "/waitlist"
        },
        {
          title: "Details",
          path: "/pricelist"
        },
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