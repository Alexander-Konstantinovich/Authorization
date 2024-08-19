import { Menu } from "antd"
import type { MenuProps } from "antd"
import { HomeOutlined, TableOutlined, QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

type MenuItem = Required<MenuProps>["items"][number]


const Nav: React.FC = () => {
  const onClick: MenuProps["onClick"] = () => {
  }
  const { t } = useTranslation()

  const items: MenuItem[] = [
    {
      key: "navigation",
      label: `${t("navigation.navigation")}`,
      icon: <HomeOutlined />,
      style:{height: 53, paddingTop: 3},
      children: [
        { key: "table", label: <Link to="/table">{t("navigation.table")}</Link>, icon: <TableOutlined /> , style: { paddingRight:38}},
        { key: "support", label: <Link to="/support">{t("navigation.support")}</Link>, icon:<QuestionCircleOutlined />},
        { key: "settings", label: <Link to="/settings">{t("navigation.settings")}</Link>, icon: <SettingOutlined />},
      ],
    },
    {
      type: "divider",
    },
  ]

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, borderRadius: 0 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  )
}

export default Nav
