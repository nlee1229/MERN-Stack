import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
      <PersonCard lastName="Ehrlich" firstName="Matt" age={88} hairColor="Brown" />
      <PersonCard lastName="Wilmoth" firstName="Seth" age={50} hairColor="Brown" />
      <PersonCard lastName="White" firstName="Brennan" age={60} hairColor="Red" />
    </div>
  );
}

export default App;