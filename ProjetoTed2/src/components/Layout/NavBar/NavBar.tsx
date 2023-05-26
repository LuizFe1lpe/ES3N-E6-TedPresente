import { useEffect, useState } from "react";
import { ContainerMenu, MenuRight, Menu } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../service/store";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { openNotificationModal } from "../../../service/store/features/uiSlice";
import { NotificationModal } from "../../NotificationModal";
import { notification } from "../../../service/requests/notification";
export interface NotificationPayload {
  id: number;
  usuario: any;
  title: string;
  body: string;
  visualized: boolean;
}

export default function NavBar() {
  const [data, setData] = useState<NotificationPayload[]>([]);
  const email = useSelector((state: RootState) => state.user?.email);
  const id = useSelector((state: RootState) => state.user.id);
  const isModalOpen = useSelector(
    (state: RootState) => state.ui.notificationModal
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    notification.get(id).then((response) => {
      const { data } = response;
      setData(data.slice(data.length - 5, data.length).reverse());
    });
  }, [id]);
  
  return (
    <ContainerMenu>
      <Menu>
        <MenuRight>{email}</MenuRight>
        <IconButton
          onClick={() => {
            dispatch(openNotificationModal());
          }}
        >
          {data.find((element) => element.visualized === false) ? (
            <NotificationsActiveIcon color={"primary"} />
          ) : (
            <NotificationsIcon color={"primary"} />
          )}
        </IconButton>
      </Menu>
      <NotificationModal open={isModalOpen} />
    </ContainerMenu>
  );
}
