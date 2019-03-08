import React, { Component } from 'react';
import coinSheet from './coin-sheet.png';

class Spriter{

    constructor(spriteSheet,spriteW, spriteH, spriteStartX, spriteStartY, frameCount){
        this.spriteSheet = spriteSheet;
        this.spriteIndex=0;
        this.spriteW = spriteW;
        this.spriteH = spriteH;
        this.spriteStartX = spriteStartX;
        this.spriteStartY = spriteStartY;
        this.frameCount=frameCount;
    }

    next(context, frameX, frameY, frameW, frameH){
        context.clearRect(frameX, frameY, frameW, frameH)
        context.drawImage(this.spriteSheet, this.spriteStartX + this.spriteIndex*this.spriteW, this.spriteStartY,this.spriteW, this.spriteH, frameX, frameY, frameW, frameH)
        this.spriteIndex+=1;
        if(this.spriteIndex===this.frameCount){
            this.spriteIndex=0;
        }
    }
}

class CanvasBG extends Component {

    constructor(props) {
        super(props);
    }

    bgColor = 46;

    componentDidMount() {
        let canvas = document.getElementById('cnv_bg');
        let ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let allParticles = [];

        let [w, h] = [canvas.width, canvas.height];

        let coinImage = new Image();
        coinImage.src = coinSheet;
        coinImage.onload=()=>{
          initCoinAnimation();  
        }

        let coinSprite = new Spriter(coinImage, 100, 100, 0, 0, 10);
        let initCoinAnimation = () =>{
            coinSprite.next(ctx, 0, 0, 100, 100);
            requestAnimationFrame(initCoinAnimation)
        }

    }

    render() {
        return (
            <>
                <canvas id="cnv_bg" style={{ position: "absolute", zIndex: -999, top: 0, left: 0 }}></canvas>
            </>
        );
    }
}

export default CanvasBG;