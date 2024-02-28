import { Button, List, Space } from "antd-mobile";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ILoco } from "types/loco";

interface Props {
  items: ILoco[];
  deleteLoco: (id: string) => void;
}
export const LocoList: FC<Props> = ({ items, deleteLoco }) => {
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <List header="Список локомотивов">
        {items.map((loco) => (
          <List.Item
            key={loco.id}
            extra={
              <Button
                color="danger"
                fill="none"
                onClick={() => deleteLoco(loco.id)}
              >
                удалить
              </Button>
            }
            arrow
          >
            <Link
              style={{ textDecoration: "none" }}
              to={`/infolocomotive/${loco.id}`}
            >
              {loco.series} № {loco.number}
            </Link>
          </List.Item>
        ))}
      </List>
    </Space>
  );
};
