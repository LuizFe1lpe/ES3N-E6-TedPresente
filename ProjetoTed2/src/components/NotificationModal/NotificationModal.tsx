import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { OwnProps } from "./types";
import { closeNotificationModal } from "../../service/store/features/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { NotificationCard } from "./styles";
import { notification } from "../../service/requests/notification";
import { RootState } from "../../service/store";
import { NotificationPayload } from "./types";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "10px",
};
export const NotificationModal = ({ open }: OwnProps) => {
  const [data, setData] = useState<NotificationPayload[]>([]);
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.user.id);
  const onClose = () => {
    dispatch(closeNotificationModal());
  };

  useEffect(() => {
    notification.get(id).then((response) => {
      const { data } = response;
      setData(data.slice(data.length - 5, data.length).reverse());
    });
  }, [id, reload]);
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          {data.map((item) => {
            return (
              <>
                <NotificationCard
                  key={item.id}
                  onClick={() => {
                    notification.destroy(item.id);
                    setReload(!reload);
                  }}
                  visualized={item.visualized}
                >
                  <div style={{ fontFamily: "Roboto", color: '#133777' }}>{item.title}</div>
                  <div style={{ fontFamily: "Roboto" }}>{item.body}</div>
                </NotificationCard>
              </>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};
