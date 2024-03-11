import { AddLocomotive, InfoLocomotive, AuthUserModal } from "components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "pages/error-page";

function App() {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);

  const onAuthModalVisible = (bool: boolean) => {
    setIsAuthModalVisible(bool);
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
            <Route path="/" element={<AddLocomotive />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/infolocomotive/:id" element={<InfoLocomotive />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
