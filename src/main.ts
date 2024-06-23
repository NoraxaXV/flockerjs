import './style.css'
import Vector from './Vector'
import { Draw }  from './Draw'
const draw = new Draw()

draw.ctx.strokeRect(1,1, draw.canvas.width-1, draw.canvas.height-1)

