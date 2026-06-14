import { useLocation } from "react-router-dom";

import ATSResult from "../components/ATSResult";
import ResumePreview from "../components/ResumePreview";

function ResultPage() {

  const location = useLocation();

  const { result, pdfFile } =
    location.state || {};

  return (
    <div className="dashboard-layout">

      <div className="left-panel">
        <ResumePreview
          pdfFile={pdfFile}
        />
      </div>

      <div className="right-panel">
        <ATSResult
          result={result}
        />
      </div>

    </div>
  );
}

export default ResultPage;