import { Select, MenuItem } from "@mui/material";

// 💡 Accept value and onChange from the parent props
const GenericSelect = ({ length, value, onChange }) => {
  const dummyarray = Array.from({ length: length }, (_, i) => i + 1);
  
  return (
    <>
      {/* 💡 Bind directly to the incoming props instead of local state */}
      <Select value={value} onChange={onChange}>
        {dummyarray.map((event, index) => (
          <MenuItem key={index} value={event}>
            {event}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default GenericSelect;