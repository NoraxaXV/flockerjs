import { Graphics, Renderable } from "./Draw"

/** Seperates the simulation into square layout of grid cells for sorting boids */
export class CellGrid extends Array implements Renderable {
    /** Size of each cell block in pixels */
    cellSize: number

    #cellsPerRow: number

    constructor(cellSize: number, simulationPixelSize: number) {
        super()
        this.cellSize = cellSize
        this.#cellsPerRow = simulationPixelSize / cellSize
        for (var cell = 0; cell < this.#cellsPerRow * this.#cellsPerRow; cell++) {
            this.push(new Array())
        }
        console.log("CellGrid.length = " + this.length)
    }
    
    /** Draws each grid cell, making a cell more intensely blue for every object in it. Mostly used for debugging purposes. */    
    draw(graphics: Graphics) {
        for (var i = 0; i < this.length; i++) {
            // Draw the cell and intensify the blue when it has more objects in it
            graphics.ctx.fillStyle = "rgba(0,0,255," + (this[i].length / 30) + ")";
            graphics.ctx.fillRect(
                (i % this.#cellsPerRow) * this.cellSize + 0.1,
                this.cellSize * Math.floor(i / this.cellSize) + 0.1,
                this.cellSize - 0.1,
                this.cellSize - 0.1
            )
            // Outline each cell
            graphics.ctx.lineWidth = 0.1;
            graphics.ctx.strokeStyle = "blue";
            graphics.ctx.strokeRect(
                (i % this.#cellsPerRow) * this.cellSize + 0.1,
                this.cellSize * Math.floor(i / this.#cellsPerRow),
                this.cellSize,
                this.cellSize - 0.1
            )
        }
    }
}