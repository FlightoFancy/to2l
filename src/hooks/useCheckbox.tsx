import { useState } from "react";

export function useCheckboxBuffer(init: boolean, step: number) {
  const [isChecked, setIsChecked] = useState(init);
  const [stepperValue, setStepperValue] = useState(step);

  const toogleCheckbox = () => {
    if (isChecked) {
      setStepperValue(0);
      setIsChecked(false);
    } else {
      setStepperValue(1);
      setIsChecked(true);
    }
  };
  return { isChecked, toogleCheckbox, stepperValue, setStepperValue };
}

export function useCheckboxSpotlight(init: boolean) {
  const [isCheckedSpotlight, setIsChecked] = useState(init);
  function toogleCheckboxSpotlight() {
    if (isCheckedSpotlight) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }
  return { isCheckedSpotlight, toogleCheckboxSpotlight };
}
