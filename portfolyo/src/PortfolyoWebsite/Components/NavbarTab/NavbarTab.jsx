import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles'
import {useDispatch} from 'react-redux';


const options = ['Navbar1', 'Navbar2', 'Navbar3'];

export default function NavbarTab() {
    const dispatch = useDispatch();
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: "#222",
          },
          secondary: {
            main: '#444',
          },
        },
      });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.log(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
      console.log(index);
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className="mx-2">
        Select Navbar: <br/> <br/>
        <Button variant="outlined" onClick={()=>{
            dispatch(({type:"choosenav",payload:0}));
        }}>Navbar1</Button> <br/> <br/>
             <Button variant="outlined" onClick={()=>{
            dispatch(({type:"choosenav",payload:1}));
        }}>Navbar2</Button> <br/> <br/>
             <Button variant="outlined" onClick={()=>{
            dispatch(({type:"choosenav",payload:2}));
        }}>Navbar3</Button>
      </div>

{/* 
        <Grid container direction="column" alignItems="start" style={{position:"relative"}}>
        <Grid item xs={12}>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
            <Button
                color="primary"
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
            >
                <ArrowDropDownIcon />
            </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
                >
                <Paper style={{zIndex:9999}}>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                        ))}
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
                </Grow>
            )}
            </Popper>
        </Grid>
        </Grid> */}
    </MuiThemeProvider>
  );
}