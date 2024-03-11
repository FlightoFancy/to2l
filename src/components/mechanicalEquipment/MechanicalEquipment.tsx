import { Form, Result, Stepper, Switch, TextArea } from "antd-mobile";
import { FC, useState } from "react";
import { ILoco } from "types/loco";
import { useAppDispatch } from "hooks";
import {
  addCountChock,
  addExtraMech,
  editReadyMech,
} from "../../redux/ducks/Locomotive";

interface Props {
  id: string | undefined;
  findSingleLoco: (id: string | undefined) => ILoco | undefined;
}

export const MechanicalEquipment: FC<Props> = ({ id, findSingleLoco }) => {
  const [form] = Form.useForm();

  const chockField = findSingleLoco(id)?.chockCount;
  const extraField = findSingleLoco(id)?.extra;

  const [checked, setChecked] = useState(findSingleLoco(id)?.isReady);

  const dispatch = useAppDispatch();

  function handlerSwitchChecked() {
    setChecked(true);
    if (id) {
      dispatch(editReadyMech({ id, isReady: true }));
      if (checked) {
        setChecked(false);
        dispatch(editReadyMech({ id, isReady: false }));
      }
    }
  }

  return (
    <>
      <Form layout="horizontal" form={form}>
        <Form.Header>Механическое оборудование</Form.Header>
        <Form.Item
          name="chock"
          label="Количество смененных тормозных колодок"
          childElementPosition="right"
          hidden={checked ? true : false}
          initialValue={chockField}
        >
          <Stepper
            max={32}
            min={0}
            onChange={(value) => {
              if (id) dispatch(addCountChock({ id, value }));
            }}
          />
        </Form.Item>
        <Form.Item
          name="extra"
          label="Дополнительно"
          hidden={checked ? true : false}
          initialValue={extraField}
        >
          <TextArea
            placeholder="Опишите виды работ"
            maxLength={100}
            rows={2}
            showCount
            onChange={(value) => {
              if (id) dispatch(addExtraMech({ id, extra: value }));
            }}
          />
        </Form.Item>
        <Form.Item
          name="readiness"
          label="Готовность"
          childElementPosition="right"
        >
          <Switch checked={checked} onChange={handlerSwitchChecked} />
        </Form.Item>
      </Form>
      <Result
        status={checked ? "success" : "waiting"}
        title="Механичекое оборудование"
        description={
          checked
            ? `Замененных колодок: ${chockField ? chockField : 0}
        Дополнительно: ${extraField ? extraField : "нет"}
        `
            : null
        }
      />
    </>
  );
};
