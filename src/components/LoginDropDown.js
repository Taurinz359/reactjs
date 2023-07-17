import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { loginStore } from '../stores';

const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLogin, setLogin] = React.useState(document.cookie.includes('token'));
  const [hasValidationError, setValidationError] = React.useState(false);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      loginStore.setUsername(e.target.value);
    } else {
      loginStore.setPassword(e.target.value);
    }
  };
  const handleSendData = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginStore),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        setValidationError(true);
        throw new Error('Error');
      })
      .then((data) => {
        console.log(data);
        document.cookie = `token=${data.token}`;
        setValidationError(false);
        handleClose();
        setLogin(true);
      })
      .catch(console.log);
  };

  const handleCheckUser = (e) => {
    if (isLogin) {
      setLogin(false);
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    } else {
      setAnchorEl(e.target);
    }
  };

  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleCheckUser}>
        {isLogin ? 'Выйти' : 'Войти'}
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
            name="name"
            label="Логин"
            variant="outlined"
            defaultValue={loginStore.username}
            fullWidth
            error={hasValidationError}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginBottom: '6px' }}
            label="Пароль"
            name="password"
            defaultValue={loginStore.password}
            variant="outlined"
            type="password"
            fullWidth
            error={hasValidationError}
            onChange={handleChange}
          />
          <Button onClick={handleSendData} variant="contained" color="primary" fullWidth>
            Войти
          </Button>
        </form>
      </Popover>
    </>
  );
};

export default BasicPopover;
