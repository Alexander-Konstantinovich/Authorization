import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "header": "React authorization",
        settings: {
          "select a language": "Select a language",
          "language": "Language",
          "settings": "Settings",
          "settings user": "Settings user",
          "change your password": "Change your password",
          "signed in as": "Signed in as",
          "password": "Password",
          "please enter your password": "Please enter your password",
          "check": "Check",
          "logout": "Logout",
          "delete account": "Delete account",
          "change password": "Change password",
          "new password": "New password",
          "please enter your new password": "Please enter your new password",
          "again new password": "Again new password",
          "please enter your password again":"Please enter your password again",
        },
        navigation:{
          "navigation": "Navigation",
          "table": "Table",
          "support": "Support",
          "settings": "Settings"
        }
      },
    },
    ru: {
      translation: {
        "header": "Авторизация на React(ну и не только авторизация)",
        settings: {
          "select a language": "Выберите язык",
          "language": "Язык",
          "settings": "Настройки",
          "settings user": "Настройки пользователя",
          "change your password": "Измените ваш пароль",
          "signed in as": "Вы вошли в систему как",
          "password": "Пароль",
          "please enter your password": "Введи свой пароль, мелкий ублюдок",
          "check": "Проверить",
          "logout": "Выход",
          "delete account": "Удалить аккаунт",
          "change password": "Изменить пароль",
          "new password": "Новый пароль",
          "please enter your new password": "Введите новый пароль",
          "again new password": "Повторите новый пароль",
          "please enter your password again":"Введите новый пароль ещё раз",
        },
        navigation:{
          "navigation": "Главная",
          "table": "Таблица",
          "support": "Поддержка",
          "settings": "Настройки"
        }
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
