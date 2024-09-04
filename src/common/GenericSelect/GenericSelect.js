import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

const GenericSelect = ({ length }) => {
  const [value, setValue] = useState(1);
  const dummyarray = Array.from({ length: length }, (_, i) => i + 1);
  return (
    <>
      <Select value={value} onChange={(e) => setValue(e.target.value)}>
        {dummyarray.map((event) => (
          <MenuItem value={event}>{event}</MenuItem>
        ))}
      </Select>
    </>
  );
};

export default GenericSelect;
