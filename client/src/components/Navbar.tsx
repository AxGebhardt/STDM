import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LiveTvIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            FilmDB
          </Typography>
          <LiveTvIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FilmDB
          </Typography>
          <Button color="inherit">Hinzufügen</Button>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default Navbar;