import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";

function UploadPage() {
  const [, setPdfFile] = useState(null);

  return (
    <ResumeUpload
      setPdfFile={setPdfFile}
    />
  );
}

export default UploadPage;