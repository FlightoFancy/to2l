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

interface Props {
  findSingleLoco: (id: string | undefined) => ILoco | undefined;
}

export const InfoLocomotive: FC<Props> = ({ findSingleLoco }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
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
      <MechanicalEquipment />
      <ElectricalEquipment />
      <AutoBrakingEquipment />
    </>
  );
};
