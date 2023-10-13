import { Form, Result, Stepper, Switch, TextArea } from "antd-mobile";
import { FC, useState } from "react";

export const MechanicalEquipment: FC = () => {
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  function handlerSwitchChecked() {
    setChecked(true);
    if (checked) {
      setChecked(false);
    }
  }
  const chockField = form.getFieldValue("chock");
  const extraField = form.getFieldValue("extra");
  return (
    <>
      <Form layout="horizontal" form={form}>
        <Form.Header>Механическое оборудование</Form.Header>
        <Form.Item
          name="chock"
          label="Количество смененных колодок"
          childElementPosition="right"
          hidden={checked ? true : false}
        >
          <Stepper max={32} min={0} />
        </Form.Item>
        <Form.Item
          name="extra"
          label="Дополнительно"
          hidden={checked ? true : false}
        >
          <TextArea
            placeholder="Опишите виды работ"
            maxLength={100}
            rows={2}
            showCount
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
