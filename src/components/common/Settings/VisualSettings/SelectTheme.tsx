import { Button, ConfigProvider, Radio } from "antd"
import Title from "antd/es/typography/Title"
import { useState } from "react"
import "../styles/colors.module.css"

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("light")

  const themeConfig = {
    token: {
      colorPrimary:
      currentTheme === "light"
      ? "#1890ff"
      : "#1a7656",
      colorText:
      currentTheme === "light"
        ? "var(--text-base-color)"
        : "var(--text-base-color-dark)",
      colorTextLightSolid:
        currentTheme === "light"
          ? "var(--text-light-solid-color)"
          : "var(--text-light-solid-color-dark)",
      colorBgContainer:
        currentTheme === "light"
          ? "var(--background-color)"
          : "var(--background-color-dark)",
    },
  }

  const handleThemeChange = (e: any) => {
    setCurrentTheme(e.target.value)
  }
  return (
    <>
      <ConfigProvider theme={themeConfig}>
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
