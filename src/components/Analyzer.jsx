import { EventEmitter } from 'events';

class Analayzer extends EventEmitter {
  constructor() {
    super();

    this.audioCtx = new AudioContext;
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 32;
    this.analyser.connect(this.audioCtx.destination);
    this.source = null;
  }

  setMusic(file) {
    if (this.hasSource()) {
      this.stopMusic();
    }

    this.audioCtx.decodeAudioData(file, (buffer) => {
      this.source = this.audioCtx.createBufferSource();
      this.source.buffer = buffer;
      this.source.connect(this.analyser);

      return this.emit('setEnd');
    });
  }

  playMusic(file) {
      this.source.start(0);    
  }

  stopMusic(file) {
      this.source.stop();    
  }

  getSpectrums() {
    let spectrums = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(spectrums);

    return spectrums;
  }

  hasSource() {
    return this.source !== null;
  }
}

export default Analayzer;