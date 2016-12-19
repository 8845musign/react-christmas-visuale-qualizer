import React from 'react';
import Layer from './Layer.jsx';

class LayerContainer extends React.Component {
  render() {
    if (this.props.setMusic) {
      console.log(this.props.visual);
      return (
        <div>
          <Layer visual={this.props.visual[0]} src="./images/star.png" smooth="0.05" koku="-50" interval="2" />
          <Layer visual={this.props.visual[2]} src="./images/title.png" koku="0" />
          <Layer visual={this.props.visual[3]} src="./images/santa.png" koku="0" interval="5" />
          <Layer visual={this.props.visual[5]} src="./images/wood.png" smooth="0.5" koku="0" interval="20" kukkiri={true} />
          <Layer visual={this.props.visual[7]} src="./images/starry.png" smooth="0.2" koku="0" interval="10"  kukkiri={true} />
          <Layer visual={this.props.visual[9]} src="./images/orange.png" smooth="0.3" koku="10" interval="30" kukkiri={true} />
          <Layer visual={this.props.visual[11]} src="./images/ice.png" smooth="1" koku="20" interval="20" kukkiri={true} />
        </div>
      );
    } else {
      return (
        <div className="message">Drag and Drop Music.</div>
      );

    } 
  }
}

export default LayerContainer;