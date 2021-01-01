import React, { useCallback, useMemo, useState } from 'react';

import StepContext from './StepContext';

function StepProvider({ children }) {
  const [step, setStep] = useState(1);

  const handleNextStep = useCallback(
    () => setStep(prevStep => prevStep + 1),
    []
  );

  const context = useMemo(
    () => ({
      step,
      activateNextStep: handleNextStep,
    }),
    [step, handleNextStep]
  );

  return (
    <StepContext.Provider value={context}>{children}</StepContext.Provider>
  );
}

export default StepProvider;
