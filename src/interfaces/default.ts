export interface PropsDefault {
  children?: React.ReactNode;
}

export interface ReturnApi<Data> {
  status: "ok" | "error";
  status_message: string;
  data: Data;
}
