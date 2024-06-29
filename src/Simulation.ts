import { randomizeValue } from "./Utility"
import Vector from "./Vector"

export class Simulation {
    flocks: Flock[] = []
    foodChain = ["fire", "ice", "acid", "shadow"]

    createFlock(boidConfig: IFlockConfig) {
        let flock = new Flock(0, boidConfig)
        this.flocks.push()
    }
}

class Flock implements IFlockConfig {
    simulation: Simulation
    get id() {
        return this.simulation.flocks.indexOf(this)
    }

    #members: Boid[] = []
    constructor(
        numBoids: number = 0,
        config: IFlockConfig,
        public color = config.color || "black",
        public powerLevel = config.powerLevel,
        public baseSight = config.baseSight || 10,
        public baseSpeed = config.baseSpeed || 10,
        public baseTurnSpeed = config.baseTurnSpeed || 10
    ) {
        for (var i = 0; i < numBoids; i++) {
            this.spawnBoid()
        }
    }

    spawnBoid(): Boid {
        let boid = new Boid()
        this.#members.push(boid)
        return boid
    }

    removeBoid(boid: Boid): void {
        let index = this.#members.indexOf(boid)
        if (index != -1) {
            this.#members.splice(index, 1)
        }
    }

    getBoidIndex(boid: Boid): number {
        return this.#members.indexOf(boid)
    }

    update(): void {
        for (let i = 0, n = this.#members.length; i < n; ++i) {
            let boid = this.#members[i]
            try {
                boid.flockIt()
            } catch (error) {
                if (error === "dead") {
                    this.#members.splice(i, 1)
                    if (this.#members.length === 0) {
                        throw "dead"
                    }
                } else {
                    throw error
                }
            }
        }
    }

    move(): void {

    }
}

class Boid {
    get sightRange() {
        return this.#sightRange
    }
    get id() {
        return this.flock.getBoidIndex(this)
    }
    get name() {
        return this.flock.color + this.id
    }

    #avoidObstacles: number
    #avoidEnemies: number
    #seperate: number
    #align: number
    #cohese: number
    #sightRange: number

    #numOfFriends: number = 0
    #numOfEnemies: number = 0
    #visibleFriends: Boid[] = []
    #visibleEnemies: Boid[] = []
    #reproduceTimer: number = 50
    #maxHunger: number = 300
    #hunger: number = this.#maxHunger / 6
    #hungry: boolean = false
    #starveTimer: number = this.#maxHunger / 3
    #alive: boolean = true

    constructor(
        public flock: Flock,
        config: IBoidConfig,
        public speed = config.baseSpeed || 10,
        public turnSpeed = config.baseTurnSpeed || 10
    ) {
        // TODO: stop hardcoding these values nerd, possibly move into Boid Config??
        this.#avoidObstacles = randomizeValue(6, -1, 4)
        this.#avoidEnemies = randomizeValue(1, -0.5, 3)
        this.#seperate = randomizeValue(1, -0.5, 1)
        this.#align = randomizeValue(1, -0.5, 1)
        this.#cohese = randomizeValue(1, -0.5, 1)

        this.#sightRange = randomizeValue(config.baseSight || 100, -50, 50)
    }

    flockIt(): boolean {
        return false
    }

    move(): void {

    }

    reproduceCycle(): void {

    }

    eat(): void {

    }

    checkForStarvation(): void {

    }

    findFood(): Vector {
        return new Vector()
   }

    fleeEnemeies(): Vector {
        return new Vector()
    }

    matchHeading(): Vector {
        return new Vector()
    }

    steerToCenter(): Vector {
        return new Vector()
    }

    buildVisibleList(): void {

    }

    addFriend(): void {

    }

    addEnemy(): void {

    }

    bindToWorld(): void {

    }

    avoidWalls(): Vector {
        return new Vector()
    }

    /** Checks if a void is "visible" Returns -1 when the check fails, otherwise returns the distance. */
    canISee(boid: Boid): number {

    }

    die(): void {

    }

    setPrey(prey: Boid, distance: number): void {

    }
}

interface IFlockConfig {
    color?: string
    powerLevel?: number
    baseSight?: number
    baseSpeed?: number
    baseTurnSpeed?: number
}

interface IBoidConfig {
    baseSight?: number
    baseSpeed?: number
    baseTurnSpeed?: number
}

type Target {
    boid: Boid
    distance: number
    index: number
}