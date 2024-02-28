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
  addCountChock: (id: string, chock: number) => void;
  editReadyMech: (id: string, isReady: boolean) => void;
  addExtraMech: (id: string, extra: string) => void;
}

export const InfoLocomotive: FC<Props> = ({
  findSingleLoco,
  addCountChock,
  editReadyMech,
  addExtraMech
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onBack = () => {
    navigate("..");
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
      <MechanicalEquipment
        addCountChock={addCountChock}
        id={id}
        findSingleLoco={findSingleLoco}
        editReadyMech={editReadyMech}
        addExtraMech={addExtraMech}
      />
      <ElectricalEquipment />
      <AutoBrakingEquipment />
    </>
  );
};
