import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from 'react-icons/go';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Header = ({ isSignedUp, setIsSignedUp }) => {
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLogoutClick = () => {
    setOpenLogoutDialog(true);
  };

  const confirmLogout = () => {
    setIsSignedUp(false); // Set sign-up state to false
    setOpenLogoutDialog(false); // Close the logout dialog
    navigate('/'); // Navigate to home page after logout
  };

  const cancelLogout = () => {
    setOpenLogoutDialog(false); // Close the logout dialog without logging out
  };

  const handleCollectionClick = () => {
    navigate('/products');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };

  const handleBrands = () => {
    navigate('/brands');
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img onClick={handleLogoClick} src={Logo} alt="Logo" />
        <span>amazon</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>
        <ul className={css.menu} style={{ display: showMenu ? 'inherit' : 'none' }}>
          <li onClick={handleCollectionClick}>Collections</li>
          <li onClick={handleBrands}>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <form onSubmit={handleSearchSubmit} className={css.searchForm}>
          <input
            type="text"
            placeholder="Search"
            className={css.search}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchIcon
            sx={{
              position: "absolute",
              left: "20%",
              bottom: "20px", // Adjust as needed
              cursor: "pointer"
            }}
            onClick={handleSearchSubmit}
            className={css.searchIcon}
          />
        </form>
        
        <Button
          variant="contained"
          className={css.signupButton}
          onClick={isSignedUp ? handleLogoutClick : handleSignUpClick}
        >
          {isSignedUp ? 'Logout' : 'Sign Up'}
        </Button>
        <CgShoppingBag className={css.cart} />
      </div>

      <Dialog
        open={openLogoutDialog}
        onClose={cancelLogout}
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelLogout} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmLogout} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
