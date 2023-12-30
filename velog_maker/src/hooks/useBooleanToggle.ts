import { useState } from "react";

type ToggleHookType = [boolean, () => void];

function useBooleanToggle(initialValue = true): ToggleHookType {
  const [status, setStatus] = useState<boolean>(initialValue);

  const toggleStatus = () => setStatus((prevStatus) => !prevStatus);

  return [status, toggleStatus];
}

export default useBooleanToggle;
