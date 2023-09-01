import { FC } from "react";
import { ILoco } from "types/loco";
import { Card } from "antd-mobile";

interface Props extends ILoco {}

export const CardLocomotive: FC<Props> = ({ series, number }) => {
  const titleLoco = `${series} № ${number}`;
  return <Card title={titleLoco}></Card>;
};
