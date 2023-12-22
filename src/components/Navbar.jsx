import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {ChangeLanguage, ChangeTheme} from '../State/action-creators/index';
import { languages } from './Language';

function Navbarr() {
  const amount = useSelector(state=>state.amountReducer);

  const dispatch = useDispatch();

  const ThemeChange = (item)=>{
    dispatch(ChangeTheme(item));
  };

  const theme = useSelector(state=>state.ThemeReducer);//Gives us new state  
  console.log(theme);

  const languageChange = (item)=>{
    dispatch(ChangeLanguage(item));
  }

  const language = useSelector(state=>state.languageReducer);
  console.log(language);

  const mystyle={
    color:theme==='dark'?'#fff':'#000'
  };

  return (
    <Navbar expand="lg" style={{backgroundColor:theme==='dark'?'#000':'#fff'}}>
      <Container>
        <Navbar.Brand href="#home" style={mystyle}>

          {language==='english'?languages[0].english : languages[0].hindi}

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={mystyle}>
            {language==='english'?languages[1].english : languages[1].hindi}
            </Nav.Link>
            <Nav.Link href="#link" style={mystyle}>
            {language==='english'?languages[2].english : languages[2].hindi}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button disabled variant="primary">Total Balance : {amount}</Button>
        <Button variant="primary ms-3" onClick={()=>{
          if(theme==='dark')
          ThemeChange('light');
        else 
        ThemeChange('dark');}}>Theme</Button>

<Button variant="primary ms-3" onClick={()=>{
          if(language==='english')
          languageChange('hindi');
        else 
        languageChange('english');}}>Language</Button>

      </Container>
    </Navbar>
  );
}

export default Navbarr;