import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonAdd from "@mui/icons-material/PersonAdd";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PropTypes from "prop-types";
import "./Toolbar.styles.scss";
import { Button } from "@mui/material";

const Toolbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="toolbar">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            width: "69px",
            height: "25px",
            fontSize: "12px",
            borderRadius: "2px",
          }}
          variant="outlined"
          className="toolbar__btn"
        >
          Upgrade
        </Button>
        <div className="toolbar__icon">
          <HelpOutlineIcon />
        </div>
        <div className="toolbar__icon">
          <NotificationsOutlinedIcon />
        </div>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>{/* <Settings fontSize="small" /> */}</ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>{/* <Logout fontSize="small" /> */}</ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
Toolbar.propTypes = {
  // bla: PropTypes.string,
};

Toolbar.defaultProps = {
  // bla: 'test',
};

export default Toolbar;
