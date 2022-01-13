import { PropsWithChildren } from "react";
import style from "./Note.module.css";

export const Note = ({ children }: PropsWithChildren<{}>) => {
  return <div className={style["yolijn-note"]}>{children}</div>;
};
