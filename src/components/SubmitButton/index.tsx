import React from 'react';
import Button from '@mui/material/Button';
import './styles.css';

export const SubmitButton = () => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      className="submit-button"
    >
      Sign Up
    </Button>
  );
};
