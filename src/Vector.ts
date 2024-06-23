export default class Vector {

    /** Returns the dot product of two Vectors */
    static dotProduct(u: Vector, v: Vector): number {
        return u.x * v.x + u.y * v.y
    }

    /** Creates a new vector with optional x and y parameters. */
    constructor(public x: number = 0, public y: number = 0) {
    }

    /** Comapares two vectors based on their x and y values. */
    equals(other: Vector): boolean {
        return other.x === this.x && other.y === this.y
    }

    /** Logs a vector's x and y values formatted as "x, y" and returns the vector back. */
    log(): Vector {
        console.log(Math.round(this.x) + ", " + Math.round(this.y))
        return this
    }

    /** Creates a new Vector with the same x and y values as the source vector. */
    getCopy(): Vector {
        return new Vector(this.x, this.y)
    }

    /** Adds a either a number to the x and y, or another Vector, and returns a new Vector. */
    add(value: Vector | number): Vector {
        let result = this.getCopy()
        if (typeof value === "number") {
            result.x += value
            result.y += value
        } else if (value instanceof Vector) {
            result.x += value.x
            result.y += value.y
        } else {
            throw new Error("Invalid Vector add value: " + value)
        }
        return result
    }

    /** Subracts a either a number from x and y, or another Vector, and returns a new Vector. */
    subtract(value: Vector | number): Vector {
        let result = this.getCopy()
        if (typeof value === "number") {
            result.x -= value
            result.y -= value
        } else if (value instanceof Vector) {
            result.x -= value.x
            result.y -= value.y
        } else {
            throw new Error("Invalid Vector subtract value: " + value)
        }
        return result
    }

    /** Scales a vector by a flat numerical value or another Vector and returns a new Vector. */
    scale(value: Vector | number): Vector {
        let result = this.getCopy()
        if (typeof value === "number") {
            if (value === 0) {
                result.x = 0
                result.y = 0
            }
            else if (value === 1) {
                return result
            } else {
                result.x *= value
                result.y *= value
            }
        }
        else if (value instanceof Vector) {
            result.x *= value.x
            result.y *= value.y
        } else {
            throw new Error("Invalid Vector scale value: " + value)
        }
        return result
    }

    /** Returns the average center of an array of Vectors */
    sum(points: Vector[]): Vector {
        let result = new Vector()
        for (let i = 0, n = points.length; i < n; ++i) {
            result.x += points[i].x
            result.y += points[i].y
        }
        result.x *= 1 / points.length
        result.y *= 1 / points.length
        return result
    }

    /** Returns the length of a Vector */
    getLength(): number {
        let x = Math.abs(this.x);
        let y = Math.abs(this.y);
        if (x === 0 && y === 0) {
            return 0;
        }
        else if ((x === 0 && y === 1) || (x === 1 && y === 0)) {
            return 1;
        }
        else if (x == 0 && y != 0) {
            return y
        }
        else if (y == 0 && x != 0) {
            return x
        }
        else {
            var d = (x * x) + (y * y);
            return Math.sqrt(d);
        }
    }

    /** Returns a Vector with the same direction and a maginitude of 1 */
    getUnitVector(): Vector {
        if (this.x == 0 && this.y == 0) {
            return this
        }

        return this.scale(1 / this.getLength());
    }

    /** Sets the Vector to a specificied length with the same direction */
    setLength(value: number): Vector {
        if (this.x == 0 && this.y == 0) {
            return this;
        }
        return this.scale(value / this.getLength());
    }
}