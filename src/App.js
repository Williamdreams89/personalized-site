import './App.css';
import AboutMe from './Components/About/About';
import ContactMe from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Navigation from './Components/Float Nav/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutMe />
      <Resume />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
