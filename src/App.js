import './App.css';
import Content from './components/Content';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  // async function getPokemon(){
  //   const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/12'
  //   const response = await fetch(pokemonUrl)
  //   const pokemon = await response.json()
  //   console.log(pokemon);
  // }
  // getPokemon();

  return (
    <div className='flex flex-col h-screen '>
      <Header/>
      <Divider/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
