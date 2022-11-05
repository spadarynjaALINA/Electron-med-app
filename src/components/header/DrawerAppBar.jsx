import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Старший врач
            </Typography>
            <Divider/>
            <List>
                <ListItem>
                    <ListItemButton sx={{textAlign: 'center'}}>
                        <ListItemText primary="УКМП"><Link to="/first"></Link></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{textAlign: 'center'}}>
                        <ListItemText primary="МКПП"><Link to="/second"></Link></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{textAlign: 'center'}}>
                        <ListItemText primary="АКПП"><Link to="/third"></Link></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex', height: '76px'}}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Старший врач
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>

                        <List>
                            <ListItem>
                                <Button sx={{color: '#fff'}} style={{margin: '0 15px'}}>
                                    <ListItemText>
                                        <Link to="/first" style={{textDecoration: 'none', color: '#fff'}}>УКМП</Link>
                                    </ListItemText>
                                </Button>
                                <Button sx={{color: '#fff'}} style={{margin: '0 15px'}}>
                                    <ListItemText>
                                        <Link to="/second" style={{textDecoration: 'none', color: '#fff'}}>МКПП</Link>
                                    </ListItemText>
                                </Button>
                                <Button sx={{color: '#fff'}} style={{margin: '0 15px'}}>
                                    <ListItemText>
                                        <Link to="/third" style={{textDecoration: 'none', color: '#fff'}}>АКПП</Link>
                                    </ListItemText>
                                </Button>
                                <Button variant="outlined" component="label" style={{backgroundColor: '#fff', margin: '0 15px'}} >
                                    <ListItemText>
                                        Загрузить файл отчёта
                                        <input hidden accept="image/*" multiple type="file"/>
                                    </ListItemText>
                                </Button>
                            </ListItem>
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
