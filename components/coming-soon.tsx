const ComingSoon: React.FC<{ name: string }> = (props) => {
  return (
    <div className="coming-soon">
      <div className="coming-soon__modal">
        <div className="coming-soon__title">
          <i className={`bx bx-time-five`}></i>
          <h3>Coming Soon</h3>
        </div>
        <div className="coming-soon__content">
          <h3>The feature {props.name} is Coming Soon</h3>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
