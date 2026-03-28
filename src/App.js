import logo from './logo.svg';
import './App.css';
import { WeddingBandFeatureSelector } from './WeddingBandFeatures';

function WeddingBandFeatures() {
  // Feature variations:
  let features = []
  features.push({
    title: "THE HEAD",
    description: "How do you want your center stone to be set?",
    options: ["Four-prong", "Six-prong", "double prong", "V-prong/chevron", "diamond tipped", "bezel set", "half-bezel", "bar-set"]
  })

  features.push({
    title: "THE SHANK",
    description: "How do you want the band around your stone finger to look?",
    options: ["traditional", "euro-style", "cathedral", "straight", "tapered", "reverse tapered", "split", "bypass", "criss-cross"]
  })

  let featureSelectors = features.map(feature =>
    <div>
      <WeddingBandFeatureSelector title={feature.title} description={feature.description} options={feature.options}></WeddingBandFeatureSelector>
      <br></br>
    </div>
  );

  return (
    <div className="WeddingBandFeatures">
      {featureSelectors}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span style={{ color: "lightblue" }}>Edit <code>src/App.js</code> and save to reload.</span>
          <br></br>
          This section is intended to represent the actual structure of the web page <br></br>
          and stands for it's contents.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <MyYesButton></MyYesButton>
        <br></br>
        <WeddingBandFeatures></WeddingBandFeatures>
      </header>
    </div>
  );
}

function MyYesButton() {
  return (
    <button>I'm a accepting this wedding band as a symbol of eternal love and devotion from my partner and I vow to be infinitelly loyal and in love with my partner no matter what. I am my partner's love and my partner is my lover and protector for eternity.</button>
  );
}

export { App, MyYesButton };