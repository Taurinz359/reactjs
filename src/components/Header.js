import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './LoginDropDown';

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', width: '100%', justifyContent: 'center' }}>
      <AppBar position="static" sx={{ maxWidth: 'md' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Новости
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
