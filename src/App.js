import './App.css';
import '@shopify/polaris/build/esm/styles.css';
// import CliclButtonChangeColor from './components/CliclButtonChangeColor';
import ClicChangeDivColor from './components/ClicChangeDivColor';

function App() {
  return (
    <div className="App">
        {/*  
        <CliclButtonChangeColor />
      */} 
      <ClicChangeDivColor/>
    </div>
  );
}

export default App;
