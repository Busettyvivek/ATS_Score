import "./ResumePreview.css";

function ResumePreview({ pdfFile }) {
  if (!pdfFile) return null;

  return (
    <div className="resume-preview-card">
      <h3>📄 Resume Preview</h3>

      <iframe
        src={URL.createObjectURL(pdfFile)}
        title="Resume Preview"
        className="resume-frame"
      />
    </div>
  );
}

export default ResumePreview;