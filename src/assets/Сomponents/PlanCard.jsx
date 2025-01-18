/* eslint-disable react/prop-types */
import "./PlanCard.css";

export default function PlanCard(props) {
  const { price, speed, bg, activeSelect, index, handlePlan } = props;
  return (
    <div
      className={`PlanCard ${bg} ${activeSelect ? "chosen" : ""}`}
      onClick={() => handlePlan(index)}
    >
      <div className="PlanCard-body">
        <h2 className="PlanCard-title">Безлимитный {price}</h2>
        <div className="PlanCard-info">
          <p>руб</p>
          <span className="PlanCard-price">{price}</span>
          <p className="month">/мес</p>
        </div>
        <p>до {speed} Мбит/сек</p>
      </div>
      <div className="PlanCard-footer">
        <p>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}
