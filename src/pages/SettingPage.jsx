import Header from "../components/common/Header"
import ConnectedAccount from "../components/setting/ConnectedAccount"
import DangerZone from "../components/setting/DangerZone"
import Notifications from "../components/setting/Notifications"
import Profile from "../components/setting/Profile"
import Security from "../components/setting/Security"


const SettingPage = () => {
  return (
    <div className="flex-1 overflow-auto z-10 relative">
        <Header title="Settings" />
        <Profile/>
        <Notifications/>
        <Security/>
        <ConnectedAccount/>
        <DangerZone/>
    </div>
  )
}

export default SettingPage