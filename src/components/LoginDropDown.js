import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [loginData, setLoginData] = React.useState({
    username: '',
    password: '',
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {};
  const handleSend = () => {};

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Войти
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <form style={{ padding: '16px' }}>
          <TextField
            sx={{ marginBottom: '6px' }}
            name="username"
            label="Логин"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            sx={{ marginBottom: '6px' }}
            label="Пароль"
            variant="outlined"
            type="password"
            fullWidth
            onChange={handleChange}
          />
          <Button onClick={handleSend} variant="contained" color="primary" fullWidth>
            Войти
          </Button>
        </form>
      </Popover>
    </div>
  );
}
