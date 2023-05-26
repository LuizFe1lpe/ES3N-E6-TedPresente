export interface OwnProps {
  open: boolean;
}

export interface NotificationPayload {
  id: number;
  usuario: any;
  title: string;
  body: string;
  visualized: boolean;
}
