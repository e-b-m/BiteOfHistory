import logo from './logo.svg';
import './App.css';
import './style.css'; 
import Footer from './components/Footer';
import HeroImage from './components/HeroImage';
import BlogPost from './components/BlogPost';
import NavBar from './components/NavBar';

function App() {
  return (    
  <div>
  <div><NavBar/>  </div> 

    <div className="App">    
      <h1 className="Heading">Bite of History </h1>  
     <HeroImage/> 
     <div><BlogPost/></div> 
     <Footer/>
      
</div>
</div>
  );
}

export default App;
