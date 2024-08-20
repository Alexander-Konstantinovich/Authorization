import { Button, ConfigProvider, Radio } from "antd"
import Title from "antd/es/typography/Title"
import { useState } from "react"
import "../../../../colors.css"

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("light")
  const lightTheme = {
    color: "var(--primary-color)",
    colorTextBase: "var( --text-base-color)",
    colorTextLightSolid: "var(--text-light-solid-color)",
  }

  const darkTheme = {
    colorPrimary: "var(--primary-color-dark)",
    colorTextBase: "var(--text-base-color-dark)",
    colorTextLightSolid: "var(--text-light-solid-color-dark)",
  }

  const handleThemeChange = (e: any) => {
    setCurrentTheme(e.target.value)
  }

  return (
    <>
      <ConfigProvider
        theme={{
          token: currentTheme === "light" ? lightTheme : darkTheme,
        }}
      >
        <Title
          style={{
            textAlign: "left",
            margin: 15,
            paddingTop: 20,
            fontSize: 20,
          }}
        >
          Select a theme
        </Title>
        <Radio.Group value={currentTheme} onChange={handleThemeChange}>
          <Radio value={"light"}>Light</Radio>
          <Radio value={"dark"}>Dark</Radio>
        </Radio.Group>
        <Button type="primary">fast</Button>
      </ConfigProvider>
    </>
  )
}

export default ThemeSwitcher
