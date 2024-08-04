import Nav from "../components/common/Nav"
import { Outlet } from "react-router"
import { DivLayout, DivLayoutOutlet } from "./styleMainLayout"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { selectTableStatus } from "../redux/table/selectors"
import { useAppSelector } from "../redux/hooks"

const MainLayout: React.FC = () => {
  const statusProducts = useAppSelector(selectTableStatus)
  return (
    <Spin
      indicator={
        <LoadingOutlined style={{ fontSize: 50, marginTop: 10 }} spin />
      }
      spinning={statusProducts === "loading"}
    >
      <DivLayout>
        <Nav />
        <DivLayoutOutlet>
          <Outlet />
        </DivLayoutOutlet>
      </DivLayout>
    </Spin>
  )
}

export default MainLayout
