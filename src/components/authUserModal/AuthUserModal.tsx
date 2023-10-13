import { Button, Modal, Space } from "antd-mobile";
import { FC } from "react";

interface Props {
  onAuthModalVisible: (bool: boolean) => void;
  isAuthModalVisible: boolean;
}

export const AuthUserModal: FC<Props> = ({
  onAuthModalVisible,
  isAuthModalVisible,
}) => {
  const handlerClick = () => {
    onAuthModalVisible(false);
  };

  return (
    <>
      <Modal
        visible={isAuthModalVisible}
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
          onAuthModalVisible(false);
        }}
      />
    </>
  );
};
