import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { HideTitle } from "../../stores/Common/common.store";

const useHideTitle = () => {
  const setHideTitle = useSetRecoilState(HideTitle);
  useEffect(() => {
    setHideTitle(true);
    return () => {
      setHideTitle(false);
    };
  }, [setHideTitle]);
};

export default useHideTitle;
