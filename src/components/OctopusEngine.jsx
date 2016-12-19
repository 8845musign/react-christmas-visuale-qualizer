import {mapping} from '../utilities/Calc';

class  OctopusEngine {
  calc(spectrums) {
    let calced = spectrums.map(function(value){
      return mapping(value, 160, 255, 255);
    });
    return calced;
  }
}

export default OctopusEngine;