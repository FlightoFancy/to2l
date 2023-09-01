import { Space } from "antd-mobile";
import { CardLocomotive } from "components";
import { FC } from "react";
import { ILoco } from "types/loco";

interface Props {
  items: ILoco[];
}

export const LocoList: FC<Props> = ({ items }) => {
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      {items.map((loco) => (
        <CardLocomotive {...loco} />
      ))}
    </Space>
  );
};
