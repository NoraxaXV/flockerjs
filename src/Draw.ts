export class Draw {
    /** Native DOM canvas rendering context*/
    ctx: CanvasRenderingContext2D
    /** Canvas DOM element */
    canvas: HTMLCanvasElement
    /** Default size of plotted points */
    pointSize = 1

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas")
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d")
    }

    /** Draws a circle, optional fill parameter. */
    circle(x: number, y: number, radius: number, fill: boolean = true): void {
        this.ctx.beginPath()
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false)
        if (fill) {
            this.ctx.fill()
        } else {
            this.ctx.stroke()
        }
    }

    /** Draws a line. */
    line(xStart: number, yStart: number, xEnd: number, yEnd: number): void {
        this.ctx.beginPath()
        this.ctx.moveTo(xStart, yStart)
        this.ctx.lineTo(xEnd, yEnd)
        this.ctx.stroke()
    }

    /** Draws a point on the canvas. Set the size with the member Draw.pointSize. */
    plotPoint = function (x, y) {
        this.circle(x, y, this.pointSize, true);
    }

    /** Fills the canvas with a color */
    background = function (color) {
        this.ctx.fillStyle = color;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}