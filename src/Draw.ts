export default class Draw {
    #instance: Draw
    
    // Singleton pattern
    private constructor() {
    }
    
    get instance(){
        if(this.#instance === null) {
            this.#instance = new Draw()
        }
        return this.#instance
    }

    
}