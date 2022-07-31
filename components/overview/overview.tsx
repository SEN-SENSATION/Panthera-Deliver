const Overview: React.FC<{ icon: string; title: string; amount: number }> = (
  props
) => {
  return (
    <div className="overview">
      <div className="overview__title">
        <i className={`bx ${props.icon}`}></i>
        <h3>{props.title}</h3>
      </div>
      <div className="overview__amount">
        <h3>{props.amount}</h3>
      </div>
    </div>
  );
};

export default Overview;
