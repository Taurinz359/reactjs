import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { TextFields, TextFieldsOutlined } from '@mui/icons-material';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Login
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: '16px' }}>
          <TextFieldsOutlined label="Логин" variant="outlined" fullWidth >
            Login
          </TextFieldsOutlined>
          <TextFieldsOutlined label="Пароль" variant="outlined" type="password" fullWidth />
          <Button variant="contained" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </Popover>
    </div>
  );
}
