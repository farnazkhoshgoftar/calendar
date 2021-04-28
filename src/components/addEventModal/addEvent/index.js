import React, { useState } from "react";

import AddEventModal from "../../addEventModal";
import Step1 from "./steps/step1/";
import Step2 from "./steps/step2/";
import Step3 from "./steps/step3/";
import Step4 from "./steps/step4/";

const AddEvent = ({ open, onClose, dayName }) => {
  const [step, SetStep] = useState(1);

  const onDistroyModal = () => {
    SetStep(1);
    onClose();
  };
  const changeStep = (num) => {
    if (step <= Object.keys(steps).length) {
      return SetStep(num?num:step + 1);
    }
  };

  let steps = {
    1: <Step1 goToStep={changeStep} onCancel={onDistroyModal} dayName={dayName}  />,
    2: <Step2 goToStep={changeStep} onCancel={onDistroyModal}  dayName={dayName}  />,
    3: <Step3 goToStep={changeStep} onCancel={onDistroyModal}  dayName={dayName} />,
    4: <Step4 goToStep={changeStep} onCancel={onDistroyModal} dayName={dayName}/>,
  };

  return (
    <AddEventModal open={open} onClose={onDistroyModal}>
      {steps[step]}
    </AddEventModal>
  );
};
export default AddEvent;
