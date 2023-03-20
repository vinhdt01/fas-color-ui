import Notification from '@components/notifications/notification'
import { type } from 'os'
import {useState} from 'react'

const NotificationIcon:React.FC = () => {
    const [show , setShow] = useState<boolean>(false)
    const functionHanleShow = () => {
        setShow(false)
    }
    return (
        <div className="h-[23px]">
            <button onClick={() => setShow(!show)}>
          <img src="https://cdn.pnj.io/images/image-update/layout/mobile/noti-default.svg" alt="notification"/>
        </button>
        {show && <Notification functionHanleShow={functionHanleShow}/>}
        </div>
    )
}
export default NotificationIcon;