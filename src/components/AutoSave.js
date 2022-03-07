import { debounce, saveData } from "@src/utils/clientUtils";
import { useEffect, useMemo } from "react";

const AutoSave = ({ data }) => {
  const debounceSave = useMemo(() => 
    debounce(async (data) => {
      const result = await saveData(data);
      console.log(result);
    }, 1000 * 2)
  , []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      debounceSave(data);
    }
  }, [data, debounceSave]);

  return null;
};

export default AutoSave;
