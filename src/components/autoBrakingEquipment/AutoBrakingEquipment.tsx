import { Form, Result, Stepper, Switch, TextArea } from "antd-mobile";
import { FC, useState } from "react";

export const AutoBrakingEquipment: FC = () => {
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);

  const extraField = form.getFieldValue("extra");
  const oilAField = form.getFieldValue("oilA");
  const oilBField = form.getFieldValue("oilB");

  function handlerSwitchChecked() {
    setChecked(true);
    if (checked) {
      setChecked(false);
    }
  }

  function calcOil(oil: number) {
    if (oil === undefined) {
      return "в норме";
    }
    if (oil === 0) {
      return "в норме";
    }
    if (oil === 1) {
      return "1 литр";
    }
    if (oil === 5) {
      return "5 литров";
    } else return `${oil} литра`;
  }

  return (
    <>
      <Form layout="horizontal" form={form}>
        <Form.Header>Автотормозное оборудование</Form.Header>
        <Form.Item
          name="oilA"
          label="Секция А заливка компрессорного масла (в литрах)"
          hidden={checked ? true : false}
        >
          <Stepper min={0} max={5} step={0.5} defaultValue={0} />
        </Form.Item>
        <Form.Item
          name="oilB"
          label="Секция Б заливка компрессорного масла (в литрах)"
          hidden={checked ? true : false}
        >
          <Stepper min={0} max={5} step={0.5} />
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
        title="Автотормозное оборудование"
        description={
          checked
            ? `Секция А залито компрессорного масла: ${calcOil(oilAField)};
              Секция Б залито компрессорного масла: ${calcOil(oilBField)};
        Дополнительно: ${extraField ? extraField : "нет"}
        `
            : null
        }
      />
    </>
  );
};
