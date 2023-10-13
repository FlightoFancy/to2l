import { ILoco } from "types/loco";
import { AddLocomotive, InfoLocomotive, AuthUserModal } from "components";
import { useState } from "react";
import { Dialog } from "antd-mobile";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "pages/error-page";

function App() {
  const [locomotives, setLocomotives] = useState<ILoco[]>([]);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);

  const addLoco = (form: any) => {
    const values = form.getFieldsValue();
    const newLoco = {
      series: values.series,
      number: values.number,
      id: `${values.series}${values.number}`,
    };
    const dublicate = locomotives.find((item) => item.id === newLoco.id);
    if (dublicate) {
      return Dialog.alert({
        content: "Такой локомотив уже существует",
        confirmText: "Ок",
      });
    } else {
      setLocomotives([...locomotives, newLoco]);
    }
  };
  const findSingleLoco = (id: string | undefined): ILoco | undefined => {
    let singleLoco = locomotives.find((loco) => loco.id === id);
    if (singleLoco) {
      return singleLoco;
    }
  };
  const onAuthModalVisible = (bool: boolean) => {
    setIsAuthModalVisible(bool);
  };
  const deleteLoco = (id: string) => {
    setLocomotives([...locomotives.filter((loco) => loco.id !== id)]);
  };

  return (
    <>
      {isAuthModalVisible ? (
        <AuthUserModal
          onAuthModalVisible={onAuthModalVisible}
          isAuthModalVisible={isAuthModalVisible}
        />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <AddLocomotive
                  addLoco={addLoco}
                  locomotives={locomotives}
                  deleteLoco={deleteLoco}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
            <Route
              path="/infolocomotive/:id"
              element={<InfoLocomotive findSingleLoco={findSingleLoco} />}
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
