import { Menu } from "antd"
import type { MenuProps } from "antd"
import { AppstoreOutlined } from "@ant-design/icons"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "nav",
    label: "Navigation",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Table" },
      { key: "6", label: "Support" },
      { key: "7", label: "Settings" },
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
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  )
}

export default Nav
