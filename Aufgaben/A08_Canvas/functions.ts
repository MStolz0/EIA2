namespace Canvas {

    

    

    type point = [number, number];
    type square = [point, point, point, point];

    function drawSquare (square: square, ctx: CanvasRenderingContext2D): void {
        const [p1,p2,p3,p4] = square;
        ctx.beginPath();
        ctx.moveTo(...p1);
        ctx.lineTo(...p2);
        ctx.lineTo(...p3);
        ctx.lineTo(...p4);
        ctx.lineTo(...p1);
        ctx.lineTo(...p2);
        ctx.stroke();
        ctx.closePath();
    }

    function interpolate(p1: point, p2:point, t:number): point  {
        const [x1,y1] = p1;
        const [x2,y2] = p2;
        const x = x1 + t * (x2-x1);
        const y = y1 + t * (y2-y1);
        return [x,y];
    }

    function getNextSquare (square: square, t:number): square {
        const [p1,p2,p3,p4] = square;
        return [
             interpolate (p1,p2,t),
             interpolate (p2,p3,t),
             interpolate (p3,p4,t),
             interpolate (p4,p1,t),
        ];
    }

    function drawSquares(
        canvas: HTMLCanvasElement,
         squareNumber: number,
         delay: number,
          t:number
          ): Promise<void>{
            return new Promise(resolve => {

            
           
        const ctx = canvas.getContext("2d");
        const offset = ctx.lineWidth/2;
        const initialSquare: square = [
            [offset,offset],
            [canvas.width - offset,offset],
            [canvas.width - offset,canvas.height - offset],
            [offset,canvas.height - offset],
        ];

        let currentSquare: square = initialSquare;
        let counter = 0;

        recursivleDrawSquares();

        function recursivleDrawSquares(): void {
            counter++;
            drawSquare(currentSquare, ctx);
            if (counter < squareNumber) {
                currentSquare = getNextSquare(currentSquare, t);
                setTimeout(recursivleDrawSquares,delay);
            } else {
                resolve();
            }
            
        } 
    });

    }

   async function drawAllCanvases() {
            const canvases = getCanvases();
            setupCanvases(canvases);
            const [canvas1,canvas2,canvas3,canvas4] = canvases;
            const t = 0.1;
            const squareNumber = 55;
            const delay = 50;
           await drawSquares(canvas1, squareNumber,delay, 1-t);
           await drawSquares(canvas2,squareNumber,delay, t);
           await drawSquares(canvas3,squareNumber,delay, t);
           await drawSquares(canvas4,squareNumber,delay, 1-t);
    }

    drawAllCanvases();

    function setupCanvases(canvases: HTMLCanvasElement[]) {
        const windowSize = Math.min(
            window.innerWidth,
             window.innerHeight
             );
        const canvasSize = windowSize / 2.2;
        canvases.forEach((canvas) => {
            canvas.width = canvas.height = canvasSize;
            const ctx = canvas.getContext("2d")!;
            ctx.lineWidth = Math.round(window.innerWidth / 500);
            ctx.strokeStyle = "#f2c";
        });
    }

    function getCanvases(): HTMLCanvasElement[] {
        return Array.from(document.querySelectorAll("canvas"));
    }
}