import { Button } from '@mui/material';
import React, { lazy } from 'react';

const CustomButton = ({sx,onClick,label}) => {
  return (
    <>
      <Button
      size='large'
      onClick={onClick}
        sx={{
            ...sx,
            p:"12px 24px",
            textTransform:"none",
            color:"#fff",
          backgroundColor: '#35694F', 
          border: '1.5px solid #35694F', 
          '&:hover': {
            backgroundColor: '#55A37C', 
          },
          '&:active': {
            backgroundColor: '#0A2819', 
          },
        }}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomButton;
