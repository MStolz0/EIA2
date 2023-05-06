namespace Canvas {

    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    ctx.lineWidth = 4;

    type point = [number, number];
    type square = [point, point, point, point];

    function drawSquare (square: square): void {
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

    function test(){
        const initialSquare: square = [
            [10,10],
            [400,10],
            [400,400],
            [10,400],
        ];

        let square: square = initialSquare;

        for (let i = 0; i < 47; i++) {
            
            drawSquare(square);
            square = getNextSquare(square, 0.1);
        }

    }

    test();
}