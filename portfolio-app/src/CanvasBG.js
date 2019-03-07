import React, { Component } from 'react';

class CanvasBG extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let canvas = document.getElementById('cnv_bg');
        let ctx = canvas.getContext('2d');

        var [w, h] = [canvas.width, canvas.height];

        let ctxImage=ctx.createImageData(w,h);
        let ctxImageData=ctxImage.data;

        class Particle {
            x = 0;
            y = 0;
            opacity = 1;
        }

        // hsla(208, 48 %, 40 %, 0.57)

    }

  render() {
    return (
      <>
      <canvas id="cnv_bg" style={{width:"100vw", height:"100vh", position:"absolute", zIndex:-999, top:0, left:0}}></canvas>
      </>
    );
  }
}

export default CanvasBG;