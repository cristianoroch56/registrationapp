import { FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";

const CustomCheckBox = ({ label = 'Checkbox', labelPlacement = 'end', sx }) => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      control={
        <Checkbox
        checked={checked}
        onChange={handleChange}
        indeterminate={indeterminate}
        onMouseDown={() => setIndeterminate(!indeterminate)}
        onMouseUp={() => setIndeterminate(!indeterminate)}
        sx={{
          color: "#35694F",
          ":hover": {
            backgroundColor: "transparent",
            "& .MuiSvgIcon-root": {
              color: "green",
            },
          },
          "& .MuiSvgIcon-root": {
            color: "#35694F",
          },
          "&.Mui-checked": {
            color: "#35694F",
          },
        }}
        icon={<CheckBoxOutlineBlankTwoToneIcon />}
        checkedIcon={<CheckBoxOutlinedIcon />}
        indeterminateIcon={<CheckBoxIcon />}
      />
      }
      sx={{
        ...sx,
      }}
    />
  );
};

export default CustomCheckBox;
