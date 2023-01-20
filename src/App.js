import './App.css';
import { About } from './components/About/About';
import * as actions from "./redux/actions/actions"
import { Detail } from './components/Detail/Detail';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Favorites from './components/Favorites/Favorites';
import { Form } from './components/Form/Form';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route,Routes,useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const DivApp = styled.div`
  text-align: center;
`
const styledNav = styled(Nav)`
  background-color: #333; // color de fondo /
  color: #fff; // color de texto /
  display: flex; // hace que los elementos del nav se alineen horizontalmente /
  justify-content: space-between; // hace que los elementos del nav tengan espacio entre sí /
  padding: 10px; // espacio alrededor del nav /
  &:a{
      color: #fff; // color de texto de los enlaces /
      text-decoration: none; // quita la línea debajo de los enlaces /
      padding: 10px; // espacio alrededor de los enlaces /
  }
  &:a:hover{
      background-color: #555; // color de fondo al pasar el cursor sobre los enlaces */

  }
 `

function App() {
  const [characters, setCharacters] = useState([]);
  const [acces,setAcces] =useState(false);
  const navigate =useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{!acces && navigate("/")},[acces]);
  let username="lucas.mariano.g@gmail.com";
  let password="1234567s";
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then(res => res.json())
      .then(data => {
        if (data.name) {
          let repe=false;
          characters.forEach(char => {
            if (char.id == character) {
              repe=true;
            }

          });
          if(!repe){
            setCharacters([...characters, data]);
          }else{
            alert("Ya ingreso este personaje");
          }
        } else {
          alert("No existe personaje con ese ID");
        }
      })
      .catch(err => console.log(err));
  }
  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
    dispatch(actions.deleteFavorite(id));
  }
  const logOut=()=>{
    setAcces(false);
  }
  const login = (userdata)=>{
    if(userdata.password===password && userdata.username===username){
      setAcces(true);
      navigate("/home");
    }else {
      alert("Datos incorrectos");
    }
  }
  const location=useLocation();
  return (
    <DivApp>
      {location.pathname!=="/" && <Nav logOut={logOut} onSearch={onSearch} />}
      <Routes>
        <Route path="/favorites" element={<Favorites/>} />
        <Route exact path="/" element={<Form login={login}></Form>} ></Route>
        <Route path="/home" element={<Cards characters={characters}
          onClose={onClose}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:detailId" element={<Detail/>} />  
      </Routes>
    </DivApp>
  )
}

export default App
