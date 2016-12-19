import React from 'react';
import Analayer from './Analyzer';
import OctopusEngine from './OctopusEngine.jsx';
import LayerContainer from './LayerContainer.jsx';

class App extends React.Component {
  componentWillMount() {
    this.analayer = new Analayer();
    this.fileReader = new FileReader();
    this.fileReader.onload = (e) => this.onLoad(e);
    this.analayer = new Analayer();
    this.animationId = null;
    this.engine = new OctopusEngine();
  }

   constructor() {
     super();
     this.state = {
       setMusic: false,
       visual: []
     };
   }

  render () {
    return (
      <div>
        <input type="file" onChange={(e) => this.onChange(e)} />
        <LayerContainer setMusic={this.state.setMusic} visual={this.state.visual} />
      </div>
    );
  }

  onChange(e) {
    this.fileReader.readAsArrayBuffer(e.target.files[0]);
  }

  onLoad() {
    this.analayer.setMusic(this.fileReader.result);
    this.analayer.once('setEnd', ()=> {
      this.analayer.playMusic();
      this.animationId = this.visualize();
    });
  }

  visualize() {
    return requestAnimationFrame(()=>{
      const spectrums = this.analayer.getSpectrums();
      const visual = this.engine.calc(spectrums);

      this.setState(Object.assign(this.state, {
        setMusic: true,
        visual: visual
      }));

      this.animationId = requestAnimationFrame(this.visualize.bind(this));
    });
  }
}

export default App;