import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { CenterFocusStrong } from '@material-ui/icons';




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Mina Empreendedora
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 4,
          mt: 'auto',
          backgroundColor: '#800000',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}
