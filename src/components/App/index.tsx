import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import Home from "../../pages/Home";

const Apps: React.FC = () => {


  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Apps;
