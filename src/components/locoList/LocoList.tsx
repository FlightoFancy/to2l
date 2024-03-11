import { Button, List, Space } from "antd-mobile";
import { useAppDispatch, useAppSelector } from "hooks";
import { FC } from "react";
import { Link } from "react-router-dom";
import { deleteLoco } from "../../redux/ducks/Locomotive/locomotiveSlice";

export const LocoList: FC = () => {
  const locos = useAppSelector((state) => state.locomotives.locomotives.list);
  const dispatch = useAppDispatch();

  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <List header="Список локомотивов">
        {locos.map((loco) => (
          <List.Item
            key={loco.id}
            extra={
              <Button
                color="danger"
                fill="none"
                onClick={() => dispatch(deleteLoco(loco.id))}
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
