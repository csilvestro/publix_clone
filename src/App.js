//Parent/Smart Component: App
import { useState } from 'react';
//React Router
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import BasicButton from './components/buttons/BasicButton';
import ThemedButton from './components/buttons/ThemedButton';
import CardItem from './components/cards/CardItem';
// import StyledButton from './components/StyledButton';
import Img from './images/Publix-logo.jpg';

function App() {
  const [foodItem, setFoodItem] = useState("itemImg: ../images/food.jpg",)

  return (
    <div>
      {/* A navigation would go here */}
      <Routes>
        <Route exact path='/' element={<Layout />} /> 
        <Route path='/Layout' element={<Layout />} /> 
      </Routes>
      <div>
        <BasicButton>I am a basic themed button! 🤗</BasicButton>
        <ThemedButton>button</ThemedButton>
        <CardItem itemImg={Img} />
        {/* <StyledButton theme={{bg: theme.colors.primrose, color: theme.colors.white}}>I am a button with a theme prop! 😎</StyledButton> */}
      </div>
    </div>
  );
}

export default App;
