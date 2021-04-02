import { useMemo, useState } from 'react';

export default function useToggler(initialMode = false) {
  const [value, setValue] = useState(initialMode);

  const turnOn = () => setValue(true);
  const turnOff = () => setValue(false);
  const setToggler = toggleState => setValue(toggleState);
  const toggle = () => setValue(currentToggleState => !currentToggleState);

  const actions = useMemo(() => [turnOn, turnOff, toggle, setToggler], []);

  return [value, ...actions];
}
