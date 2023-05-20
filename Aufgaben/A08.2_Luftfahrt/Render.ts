namespace Luftfahrt {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

    function handleLoad(_event: Event): void {

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        background();
        mountains();
        bees();
        Windsocke();
        ramp();
        parachute();
        clouds();
    
    };

    function bees(){

        for(let bee=0;bee<8;bee++){

            let maxXBee:number= 800;
            let maxYBee:number= 540;

            let minXBee:number= 100;
            let minYBee:number= 250;
                //position
            let randomXBee:number=Math.floor(Math.random()* (maxXBee - minXBee)) + minXBee;
            let randomYBee:number=Math.floor(Math.random()* (maxYBee - minYBee)) + minYBee; 

                //Body
            crc2.beginPath();
            crc2.moveTo(randomXBee,randomYBee);
            crc2.ellipse(randomXBee-35, randomYBee, 35, 20, 0, 3.1, 2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="HSL(55,90%,50%)";
            crc2.fill();
            crc2.closePath();
                //legs
            crc2.beginPath();
            crc2.moveTo(randomXBee-20,randomYBee);
            crc2.lineTo(randomXBee+5,randomYBee+5);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomXBee-50,randomYBee);
            crc2.lineTo(randomXBee-15,randomYBee+5);
            crc2.stroke();
            crc2.closePath();
 //stripes with curves
 /*
            crc2.beginPath();
            crc2.moveTo(randomXBee-50,randomYBee);
            crc2.bezierCurveTo(randomXBee-40,randomYBee-10, randomXBee-55, randomYBee-20, randomXBee-55, randomYBee-16);
            crc2.stroke();
            crc2.fillStyle="black";
        crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomXBee-45,randomYBee);
            crc2.bezierCurveTo(randomXBee-35,randomYBee-10, randomXBee-50, randomYBee-20, randomXBee-50, randomYBee-18);
            crc2.stroke();
            crc2.fillStyle="black";
        crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomXBee-20,randomYBee);
            crc2.bezierCurveTo(randomXBee-10,randomYBee-10, randomXBee-25, randomYBee-20, randomXBee-25, randomYBee-18);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomXBee-20,randomYBee);
            crc2.bezierCurveTo(randomXBee-10,randomYBee-10, randomXBee-25, randomYBee-20, randomXBee-25, randomYBee-18);
            crc2.stroke();
            crc2.closePath();*/

//stripes with rect

            crc2.strokeStyle= "black";
            crc2.beginPath();
            crc2.moveTo(randomXBee,randomYBee);
            crc2.roundRect(randomXBee-50,randomYBee-19, 3, 19,3 );
            crc2.stroke();
            crc2.fillStyle="HSL(0,0%,0%)";
            crc2.fill();
            crc2.closePath();

            crc2.strokeStyle= "black";
            crc2.beginPath();
            crc2.moveTo(randomXBee,randomYBee);
            crc2.roundRect(randomXBee-20,randomYBee-18, 2.5, 18, 2 );
            crc2.stroke();
            crc2.fillStyle="HSL(0,0%,0%)";
            crc2.fill();
            crc2.closePath();

            crc2.strokeStyle= "black";
            crc2.beginPath();
            crc2.moveTo(randomXBee,randomYBee);
            crc2.roundRect(randomXBee-25,randomYBee-19, 2.5, 19, 1.5 );
            crc2.stroke();
            crc2.fillStyle="HSL(0,0%,0%)";
            crc2.fill();
            crc2.closePath();

            crc2.strokeStyle= "black";
            crc2.beginPath();
            crc2.moveTo(randomXBee,randomYBee);
            crc2.roundRect(randomXBee-45,randomYBee-20, 2.5, 20, 1.5 );
            crc2.stroke();
            crc2.fillStyle="HSL(0,0%,0%)";
            crc2.fill();
            crc2.closePath();

            //Wings
        crc2.beginPath();
        crc2.moveTo(randomXBee-35,randomYBee-20);
        crc2.bezierCurveTo(randomXBee+10,randomYBee-100, randomXBee-80, randomYBee-24, randomXBee-50, randomYBee-20);
        crc2.stroke();
        crc2.fillStyle="grey";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-20,randomYBee-20);
        crc2.bezierCurveTo(randomXBee+10,randomYBee-100, randomXBee-80, randomYBee-24, randomXBee-35, randomYBee-15);
        crc2.stroke();
        crc2.fillStyle="lightgrey";
        crc2.fill();
        crc2.closePath();

        }
    };
    

    function Windsocke() {

        crc2.beginPath();
        crc2.moveTo(650,551);
        crc2.bezierCurveTo(670,560, 690, 544, 710, 542);
        crc2.stroke();
        crc2.closePath();

        crc2.moveTo(710,542);
        crc2.bezierCurveTo(710, 527, 670, 545, 650, 531);
        crc2.lineTo(650,551);
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();   
        
        crc2.beginPath();
        crc2.moveTo(650,600);
        crc2.lineTo(650,550);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(650, 541, 5, 10, 0, 0, 2*Math.PI);
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    };
    

    function parachute() {
        

        for(let amount:number=0; amount<4; amount++){

            let minX:number= 200;
            let maxX:number= 1000;
            let randomX:number=Math.floor(Math.random()*(maxX - minX + 1))+ minX;

            let minY:number= 100;
            let maxY:number= 500;
            let randomY:number=Math.floor(Math.random() * (maxY - minY + 1)) + minY;

            //Parachute Strings
            crc2.beginPath();
            crc2.moveTo(randomX-3,randomY+10);
            crc2.lineTo(randomX-25,randomY-20);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX+3,randomY+10);
            crc2.lineTo(randomX+25,randomY-20);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX+3,randomY+10);
            crc2.lineTo(randomX+10,randomY-20);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX-3,randomY+10);
            crc2.lineTo(randomX-10,randomY-20);
            crc2.stroke();
            crc2.closePath();

            //Parachute

            crc2.beginPath();
            crc2.moveTo(randomX-25,randomY-20)
            crc2.bezierCurveTo(randomX-10, randomY-20, randomX +10, randomY-20, randomX +25, randomY-20);
            crc2.fill();
            crc2.fillStyle="HSL(78,100%,50%)";
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.arc(randomX,randomY-20,25,Math.PI,2*Math.PI)
            crc2.lineTo(randomX-25,randomY-20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX, randomY);
            crc2.arc(randomX, randomY, 8, 0, 2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX,randomY+8);
            crc2.lineTo(randomX, randomY+20)
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX - 10, randomY + 30);
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX + 10, randomY + 30);
            crc2.stroke();
            crc2.closePath();
        
            crc2.beginPath();
            crc2.moveTo(randomX,randomY+15);
            crc2.lineTo(randomX - 20, randomY);
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX + 20, randomY);
            crc2.stroke();
            crc2.closePath();
    }
};

function mountains() {

    let maxPeaks: number = 8;
    let minPeaks: number = 5;
    let peakHeightMin: number = 100;
    let peakHeightMax: number = 200;

    let startX: number = 0;
    let endX: number = 1100;
    let baseY: number = 450;

    crc2.beginPath();
    crc2.moveTo(startX, baseY);

    
    let numPeaks: number = Math.floor(Math.random() * (maxPeaks - minPeaks + 1)) + minPeaks;

    
    let peakDistance: number = (endX - startX) / numPeaks;

    
    for (let i = 0; i < numPeaks; i++) {
        
        let peakHeight: number = Math.floor(Math.random() * (peakHeightMax - peakHeightMin + 1)) + peakHeightMin;

        
        let peakX: number = startX + i * peakDistance;

       
        let peakY: number = baseY - peakHeight + Math.floor(Math.random() * 51) - 25;

       
        crc2.lineTo(peakX, peakY);

        
        if (i < numPeaks - 8) {
            crc2.lineTo(peakX + peakDistance / 2, baseY);
        }
    }

   
    crc2.lineTo(endX, baseY);
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
    gradient.addColorStop(0, "HSL(360,0%,100%)");
    gradient.addColorStop(1, "HSL(360,0%,20%)");

    
    crc2.strokeStyle="transparent";
    crc2.fillStyle=gradient;
    crc2.fill();
    crc2.closePath();

};

function background() {

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "#51d9ed");
    gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
    gradient.addColorStop(1, "HSL(129,60%,37%)");

    crc2.beginPath();
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.closePath();

};

function clouds(){

    for(let cloud=0;cloud<3;cloud++){

        let maxXCloud:number= 800;
        let maxYCloud:number= 100;

        let minXCloud:number= 50;
        let minYCloud:number= 250;
            //position
        let randomXCloud:number=Math.floor(Math.random()* (maxXCloud - minXCloud)) + minXCloud;
        let randomYCloud:number=Math.floor(Math.random()* (maxYCloud - minYCloud)) + minYCloud; 

        crc2.beginPath();
            crc2.ellipse(randomXCloud+35, randomYCloud, 200, 50, 0, 3.1, 3*Math.PI);
            crc2.stroke();
            crc2.fillStyle="rgba(255, 255, 255, 0.5)";
            crc2.fill();
            crc2.closePath();

}
};

function ramp(){

    crc2.beginPath();
    crc2.rect(0,500,500,200);
    crc2.fillStyle="lightred";
    crc2.fill();
    crc2.stroke();

    crc2.beginPath();
    crc2.moveTo(0, 500);
    crc2.lineTo(500, 500);
    crc2.lineTo(250, 400);
    crc2.fillStyle="Brown";
    crc2.fill();

    crc2.font = "48px serif";
    crc2.fillStyle="black"
    crc2.fillText("Kiosk", 200, 550);
};
}