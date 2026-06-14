import "./SummaryCard.css";

function SummaryCard({ result }) {
  const score = result.atsScore;

  const status =
    score >= 80
      ? "Excellent Match"
      : score >= 60
      ? "Good Match"
      : score >= 40
      ? "Average Match"
      : "Poor Match";

  const statusClass =
    score >= 80
      ? "good"
      : score >= 40
      ? "average"
      : "poor";

  return (
    <div className="summary-card">

      <div className="summary-title">
        📋 Resume Match Summary
      </div>

      <div
        className={`summary-status ${statusClass}`}
      >
        {score >= 60 ? "✅" : "❌"} {status} ({score}%)
      </div>

      <p className="summary-text">
        Your resume matches{" "}
        <strong>
          {result.strengths?.length}
        </strong>{" "}
        required skills and is missing{" "}
        <strong>
          {result.missingSkills?.length}
        </strong>{" "}
        important skills.
      </p>

      <div className="summary-subtitle">
        Top Missing Skills
      </div>

      <div className="summary-skills">
        {result.missingSkills
          ?.slice(0, 5)
          .map((skill, index) => (
            <span
              key={index}
              className="summary-chip"
            >
              {skill}
            </span>
          ))}
      </div>

    </div>
  );
}

export default SummaryCard;