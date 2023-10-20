import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CustomTextField = ({ label, error = false, onChange, value,emsg,sx,type }) => {
  return (
    <>
      <Box component={'div'} display={'flex'} flexDirection={'column'} gap={1}>
        <Typography component={'div'} fontWeight={'bold'}>
          {label}
        </Typography>
        <Box component={'div'} display="flex" alignItems="center">
          <TextField
            onChange={onChange}
            value={value}
            error={error}
            type={type}
           
            helperText={
              error ? (
                <Typography component={'div'} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <ErrorOutlineIcon sx={{ color: 'red', marginRight: '8px', padding: 0.3 }} />
                  {emsg}
                </Typography>
              ) : ''
            }
            id="outlined-basic"
            variant="outlined"
            InputLabelProps={{
              style: { color: '#35694F' },
            }}
            sx={{
                
              width: '100%', 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#35694F',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#35694F',
                },
              },
              ...sx,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default CustomTextField;
