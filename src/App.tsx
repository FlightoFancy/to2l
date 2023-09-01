import { ILoco } from "types/loco";
import { AuthUserModal } from "components";
import { useState } from "react";
import { Dialog } from "antd-mobile";

function App() {
  const [locomotives, setLocomotives] = useState<ILoco[]>([]);
  const addLoco = (form: any) => {
    const values = form.getFieldsValue();
    const newLoco = {
      series: values.series,
      number: values.number,
    };
    const dublicate = locomotives.find(
      (item) => item.series === newLoco.series && item.number === newLoco.number
    );
    if (dublicate) {
      return Dialog.alert({
        content: "Такой локомотив уже существует",
        confirmText: "Ок",
      });
    } else {
      setLocomotives([...locomotives, newLoco]);
    }
  };

  return (
    <div>
      <AuthUserModal addLoco={addLoco} locomotives={locomotives} />
    </div>
  );
}

export default App;
