import { Button, Divider, Space } from "antd-mobile";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ILoco } from "types/loco";
import { LeftOutline } from "antd-mobile-icons";
import {
  AutoBrakingEquipment,
  ElectricalEquipment,
  MechanicalEquipment,
} from "components";
import { useAppSelector } from "hooks";

export const InfoLocomotive: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onBack = () => {
    navigate("..");
  };

  const locos = useAppSelector((state) => state.locomotives.locomotives.list);

  const findSingleLoco = (id: string | undefined): ILoco | undefined => {
    let singleLoco = locos.find((loco) => loco.id === id);
    if (singleLoco) {
      return singleLoco;
    }
  };

  return (
    <>
      <Space direction="vertical">
        <Button color="primary" fill="outline" onClick={onBack}>
          <LeftOutline />
        </Button>
      </Space>
      <Divider>
        <h3>
          {findSingleLoco(id)?.series} № {findSingleLoco(id)?.number}
        </h3>
      </Divider>
      <MechanicalEquipment id={id} findSingleLoco={findSingleLoco} />
      <ElectricalEquipment />
      <AutoBrakingEquipment />
    </>
  );
};
