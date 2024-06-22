import './style.css'

const canvas = <HTMLCanvasElement> document.getElementById("canvas")
const ctx = <CanvasRenderingContext2D> canvas.getContext("2d")

ctx.strokeRect(1,1,canvas.width-1, canvas.height-1)


