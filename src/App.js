import Particle from './components/Particle';
import ImageSlider from './Component/Slider';
import "./css/App.css";
import './App.css';



function App() {
  return (
    <> 
     <Particle />
     
     <div className="container mt-5 carousel">
      <h1 className="slider_title">Our Past Speakers</h1>
      <ImageSlider />
      

    </div>

  
      
       </>
        
  );
}

export default App;
