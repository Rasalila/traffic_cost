import { useState } from "react";
import plans from "../../data/Plans.json";
import PlanCard from "../PlanCard";

export default function AllPlans() {
  const [arrSelectedPlan, setArrSelectedPlan] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handlePlan = (index) => {
    const newArr = arrSelectedPlan.map(() => false);
    newArr[index] = true;
    setArrSelectedPlan(newArr);
  };

  return (
    <div className="wrapper">
      {console.log(arrSelectedPlan)}
      {plans.map((item, index) => {
        return (
          <PlanCard
            key={index}
            {...item}
            index={index}
            activeSelect={arrSelectedPlan[index]}
            handlePlan={handlePlan}
          />
        );
      })}
    </div>
  );
}
