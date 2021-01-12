import Tab from './components/Tab';
import './App.css';

const items = [
  {
    label: 'Tab 1',
    content: 'Tab 1 content',
    callback: () => console.log('Clicked on first tab')
  },
  {
    label: 'Tab 2',
    content: 'Tab 2 content',
    callback: () => console.log('Clicked on second tab')
  },
  {
    label: 'Tab 3',
    content: 'Tab 3 content',
    callback: () => console.log('Clicked on third tab')
  },
]

function App() {
  return (
    <div className="App">
      {/* {} bc we're inside of a jsx block therefore we're using curly brackets */}
      <Tab items={items} />
    </div>
  );
}

export default App;
