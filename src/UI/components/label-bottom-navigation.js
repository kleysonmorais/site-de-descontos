import React from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Toolbar from '@material-ui/core/Toolbar';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
// import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LabelBottomNavigation({ selected }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(selected);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    Router.push(`/${newValue}`);
  };

  return (
    <div className="block md:hidden">
      <Toolbar />

      <BottomNavigation
        style={{ position: 'fixed', bottom: 0 }}
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          label="Início"
          value="listar-descontos"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Buscar"
          value="busca"
          icon={<SearchIcon />}
        />
        {/* <BottomNavigationAction
          label="Descontos"
          value="meus-descontos"
          icon={<ReceiptOutlinedIcon />}
        /> */}
        <BottomNavigationAction
          label="Perfil"
          value="perfil"
          icon={<PersonOutlineOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
