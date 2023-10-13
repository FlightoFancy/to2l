import { FC } from "react";
import { ILoco } from "types/loco";
import { Button, Card } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";

interface Props extends ILoco {}

export const CardLocomotive: FC<Props> = ({ series, number }) => {
  const titleLoco = `${series} № ${number}`;
  const onclick = () =>{
    console.log('sdf')
  }
  return (
    <>
      <Card
        title={titleLoco}
        style={{ border: "1px solid grey" }}
        extra={<RightOutline />}
      ></Card>
      <Button onClick={onclick}>удалить</Button>
    </>
  );
};
