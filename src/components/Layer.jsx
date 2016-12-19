import React from 'react';
import {mapping} from '../utilities/Calc';

class Layer extends React.Component {
  constructor() {
    super();
    this.count = 0;
    this.visual = 0;

    this.koku = 20;
    this.interval = 1;
    this.smooth = 0.3;
  }

  render() {
    const interval = this.props.interval ? this.props.interval : this.interval;
    const smooth = this.props.smooth ? this.props.smooth : this.smooth;

    if(++this.count  % interval == 0){
      const koku = this.props.koku ? this.props.koku : this.koku;
      let visual = this.props.visual;
      if (this.props.kukkiri) visual = visual * visual;

      visual = (mapping(visual, 0, 255, 100) + this.getKoku(koku)) / 100
      this.visual = visual;
    }

    if (this.count > 256) this.count = 0; 

    const style = {
      opacity: this.visual,
      transition: "opacity "+ smooth +"s linear"
    };

    return (
      <div className="layer">
        <img src={this.props.src} style={style} />
      </div>
    );
  }

  getKoku(volume) {
    if (parseInt(volume) === 0) return 0; 
    return (Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) / 5 * volume; 
  }
}

export default Layer;