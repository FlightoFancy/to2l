import { Button, Form, Input, Radio, Space } from "antd-mobile";
import { FC, useState } from "react";
import { LocoList } from "components";
import { ILoco } from "types/loco";

interface Props {
  addLoco: (form: any) => void;
  locomotives: ILoco[];
  deleteLoco: (id: string) => void;
}

export const AddLocomotive: FC<Props> = ({
  addLoco,
  locomotives,
  deleteLoco,
}) => {
  const [value, setValue] = useState("");
  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        initialValues={{
          series: "2ЭС6",
          number: 1,
        }}
        footer={
          <Button block color="primary" onClick={() => addLoco(form)}>
            Добавить
          </Button>
        }
      >
        <Form.Header>Форма создания локомотива</Form.Header>
        <Form.Item name="series" label="Серия" rules={[{ required: true }]}>
          <Radio.Group>
            <Space direction="vertical">
              <Radio id="series" value="2ЭС6">
                2ЭС6
              </Radio>
              <Radio value="ВЛ-10">ВЛ-10</Radio>
              <Radio value="ВЛ-11">ВЛ-11</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="number"
          label="Номер"
          rules={[{ required: true, message: "Заполните поле!" }]}
        >
          <Input
            placeholder="Номер"
            value={value}
            onChange={(val) => {
              setValue(val);
            }}
            type="number"
            max={2000}
            min={1}
            id="number"
          />
        </Form.Item>
      </Form>
      <LocoList items={locomotives} deleteLoco={deleteLoco} />
    </>
  );
};
