import { Menu } from "antd"
import type { MenuProps } from "antd"
import { HomeOutlined, TableOutlined, QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "navigation",
    label: "Navigation",
    icon: <HomeOutlined />,
    style:{height: 53, paddingTop: 3},
    children: [
      { key: "table", label: "Table", icon: <TableOutlined /> , style: { paddingRight:38}},
      { key: "support", label: "Support", icon:<QuestionCircleOutlined />},
      { key: "settings", label: "Settings", icon: <SettingOutlined />},
    ],
  },
  {
    type: "divider",
  },
]

const Nav: React.FC = () => {
  const onClick: MenuProps["onClick"] = e => {
    console.log("click ", e)
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
