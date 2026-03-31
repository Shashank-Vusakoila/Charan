const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "•", label: "Reliable Export Network" },
  { value: "•", label: "Trusted by Growing Businesses" },
  { value: "•", label: "Quality Focused Approach" },
];

export default function Stats() {
  return (
    <div className="stats-strip">
      <div className="stats-row">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`st sr ${index > 0 ? `d${index}` : ""}`.trim()}>
            <div className="st-num">{stat.value}</div>
            <div className="st-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
