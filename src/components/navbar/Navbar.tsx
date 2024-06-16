'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import Link from 'next/link';
import { links } from './Navbar.data';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setOpenSubMenu(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenSubMenu(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Multilevel Navbar
        </Typography>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {links.map((link, index) => (
            <div key={index}>
              <Button
                aria-controls={`simple-menu-${index}`}
                aria-haspopup="true"
                onClick={(e) => handleClick(e, index)}
                color="inherit"
              >
                {link.name}
              </Button>
              <Menu
                id={`simple-menu-${index}`}
                anchorEl={anchorEl}
                keepMounted
                open={openSubMenu === index}
                onClose={handleClose}
              >
                {link.sublinks.map((sublink, subIndex) => (
                  <div key={subIndex}>
                    <MenuItem disabled>{sublink.Head}</MenuItem>
                    {sublink.sublink.map((item, itemIndex) => (
                      <MenuItem key={itemIndex} onClick={handleClose}>
                        <Link href={item.link} passHref legacyBehavior>
                          <a style={{ textDecoration: 'none', color: 'inherit' }}>
                            {item.name}
                          </a>
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                ))}
              </Menu>
            </div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
