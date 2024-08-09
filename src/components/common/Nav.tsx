import { Menu } from "antd"
import type { MenuProps } from "antd"
import { HomeOutlined, TableOutlined, QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "navigation",
    label: "Navigation",
    icon: <HomeOutlined />,
    style:{height: 53, paddingTop: 3},
    children: [
      { key: "table", label: <Link to="/table">Table</Link>, icon: <TableOutlined /> , style: { paddingRight:38}},
      { key: "support", label: <Link to="/support">Support</Link>, icon:<QuestionCircleOutlined />},
      { key: "settings", label: <Link to="/settings">Settings</Link>, icon: <SettingOutlined />},
    ],
  },
  {
    type: "divider",
  },
]

const Nav: React.FC = () => {
  const onClick: MenuProps["onClick"] = () => {
  }
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
