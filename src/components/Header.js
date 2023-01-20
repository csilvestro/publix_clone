// //Child Component: Header
// import { useState, createContext, useContext  } from 'react';
import React from 'react';
//React Router
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
// import BasicButton from './buttons/BasicButton'
import BasicButton from './buttons/BasicButton';
import ThemedButton from './buttons/ThemedButton';
import CardItem from './cards/CardItem';
// import StyledButton from './components/StyledButton';
import Img from '../images/Publix-logo.jpg';

// const UserContext = createContext();

const Header = () => {
    // const user = useContext(UserContext);

    return (
        <header style={styles.container}>
            <CardItem itemImg={Img} />
            <h2>Search</h2>
            <BasicButton><Link to='/Cart'><AiOutlineShoppingCart /></Link></BasicButton>
            {/* <BasicButton>I am a basic themed button! 🤗</BasicButton>
            <ThemedButton>button</ThemedButton> */}
            {/* <StyledButton theme={{bg: theme.colors.primrose, color: theme.colors.white}}>I am a button with a theme prop! 😎</StyledButton> */}
            <span style={{padding: 10}}>Cart is Empty!</span>
        </header>
    );
}
export default Header


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        // background: 'grey',
        // borderRadius: '50%',
        // width: '100px',
        height: '100px'
    }
}