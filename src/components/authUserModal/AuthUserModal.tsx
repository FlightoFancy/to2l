import { Button, Modal, Space } from "antd-mobile";
import { AddLocomotive } from "components";
import { FC, useState } from "react";
import { ILoco } from "types/loco";

interface Props {
  addLoco: (form: any) => void;
  locomotives: ILoco[];
}

export const AuthUserModal: FC<Props> = ({ addLoco, locomotives }) => {
  const [isVisible, setIsVisible] = useState(true);

  const [isFormAddLocoVisible, setIsFormAddLocoVisible] = useState(false);

  const handlerClick = () => {
    setIsFormAddLocoVisible(true);
    setIsVisible(false);
  };

  return (
    <>
      {isFormAddLocoVisible ? (
        <AddLocomotive addLoco={addLoco} locomotives={locomotives} />
      ) : null}
      <Modal
        visible={isVisible}
        content={
          <Space direction="vertical" block>
            <Button block color="primary" onClick={handlerClick}>
              Войти как слесарь
            </Button>
            <Button block color="primary" onClick={handlerClick}>
              Войти как бригадир
            </Button>
          </Space>
        }
        onClose={() => {
          setIsVisible(false);
        }}
      />
    </>
  );
};
