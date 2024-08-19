import { useTranslation } from "react-i18next"
import Title from "antd/es/typography/Title"
import {  Radio } from "antd"
import { useState } from "react"

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  const [activeSelect, setActiveSelect] = useState()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <Title
        style={{ textAlign: "left", margin: 15, paddingTop: 20, fontSize: 20 }}
      >
        {t("settings.select a language")}
      </Title>
      <Radio.Group
        value={activeSelect}
        onChange={e => setActiveSelect(e.target.value)}
        style={{display: 'flex', margin: 15}}
      
      >
        <Radio.Button onClick={() => changeLanguage("en")} value="start">
          English
        </Radio.Button>
        <Radio.Button onClick={() => changeLanguage("ru")} value="end">
          Русский
        </Radio.Button>
      </Radio.Group>
    </>
  )
}

export default LanguageSwitcher
