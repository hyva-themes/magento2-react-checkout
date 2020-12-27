import React, { useMemo, useState } from 'react';
import StepContext from './StepContext';

function StepProvider({ children }) {
  const [step, setStep] = useState(1);
  const handleNextStep = () => setStep(step + 1);

  const context = useMemo(
    () => ({
      step,
      activateNextStep: handleNextStep,
    }),
    []
  );

  return (
    <StepContext.Provider value={context}>{children}</StepContext.Provider>
  );
}

export default StepProvider;
