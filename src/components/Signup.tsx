import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SubmitButton } from './SubmitButton';

import { useContextState } from './StateProvider';

export default function SignUp() {
  const [state, dispatch] = useContextState();
  const handleSubmit = async () => {};

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              error={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              id="repeatPassword"
              autoComplete="new-password"
              error={false}
            />
          </Grid>
        </Grid>
        <SubmitButton />
      </Box>
    </Box>
  );
}
