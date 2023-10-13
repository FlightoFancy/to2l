import {
  Checkbox,
  Form,
  Result,
  Space,
  Stepper,
  Switch,
  TextArea,
} from "antd-mobile";
import { useCheckboxBuffer, useCheckboxSpotlight } from "hooks/useCheckbox";
import { FC, useState } from "react";

export const ElectricalEquipment: FC = () => {
  const [form] = Form.useForm();
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const { isCheckedSpotlight, toogleCheckboxSpotlight } =
    useCheckboxSpotlight(false);
  const {
    isCheckedSpotlight: isCheckedSpotlightTwo,
    toogleCheckboxSpotlight: toogleCheckboxSpotlightTwo,
  } = useCheckboxSpotlight(false);
  const extraField = form.getFieldValue("extra");
  const { isChecked, toogleCheckbox, stepperValue, setStepperValue } =
    useCheckboxBuffer(false, 0);
  const {
    isChecked: isCheckedTwo,
    toogleCheckbox: toogleCheckboxTwo,
    stepperValue: stepperValueTwo,
    setStepperValue: setStepperValueTwo,
  } = useCheckboxBuffer(false, 0);

  function handlerSwitchChecked() {
    setIsSwitchChecked(true);
    if (isSwitchChecked) {
      setIsSwitchChecked(false);
    }
  }
  function resultOnDisplay() {
    return (
      <div>
        Секция А смена ламп: Буферный:{" "}
        {stepperValue > 0
          ? `${stepperValue} ${stepperValue === 1 ? "штука" : "штуки"}`
          : "нет"}
        ; Прожектор: {isCheckedSpotlight ? "да" : "нет"}; Секция Б смена ламп:
        Буферный:{" "}
        {stepperValueTwo > 0
          ? `${stepperValueTwo} ${stepperValueTwo === 1 ? "штука" : "штуки"}`
          : "нет"}
        ; Прожектор: {isCheckedSpotlightTwo ? "да" : "нет"}; Дополнительно:
        {extraField ? extraField : "нет"}
      </div>
    );
  }
  return (
    <>
      <Form layout="horizontal" form={form}>
        <Form.Header>Электрические аппараты</Form.Header>
        <Form.Item
          label="Секция А cмена ламп"
          hidden={isSwitchChecked ? true : false}
        >
          <Space direction="vertical">
            <Space>
              <Checkbox
                checked={isChecked || stepperValue > 0 ? true : false}
                onChange={toogleCheckbox}
                value="Буферный"
              >
                Буферный
              </Checkbox>
              <Stepper
                value={stepperValue}
                onChange={setStepperValue}
                min={isChecked ? 1 : 0}
                max={4}
              />
            </Space>
            <Checkbox
              checked={isCheckedSpotlight}
              onChange={toogleCheckboxSpotlight}
              value="Прожектор"
            >
              Прожектор
            </Checkbox>
          </Space>
        </Form.Item>
        <Form.Item
          label="Секция Б cмена ламп"
          hidden={isSwitchChecked ? true : false}
        >
          <Space direction="vertical">
            <Space>
              <Checkbox
                checked={isCheckedTwo || stepperValueTwo > 0 ? true : false}
                onChange={toogleCheckboxTwo}
                value="Буферный"
              >
                Буферный
              </Checkbox>
              <Stepper
                value={stepperValueTwo}
                onChange={setStepperValueTwo}
                min={isCheckedTwo ? 1 : 0}
                max={4}
              />
            </Space>
            <Checkbox
              checked={isCheckedSpotlightTwo}
              onChange={toogleCheckboxSpotlightTwo}
              value="Прожектор"
            >
              Прожектор
            </Checkbox>
          </Space>
        </Form.Item>
        <Form.Item
          name="extra"
          label="Дополнительно"
          hidden={isSwitchChecked ? true : false}
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
          <Switch checked={isSwitchChecked} onChange={handlerSwitchChecked} />
        </Form.Item>
      </Form>
      <Result
        status={isSwitchChecked ? "success" : "waiting"}
        title="Электрические аппараты"
        description={isSwitchChecked ? resultOnDisplay() : null}
      />
    </>
  );
};
