'use strict';

export class Log {
    #logId;
    #taskId;
    #clmIdPrevius;
    #clmIdCurrent;
    #logCreatedAt;

    
    get LogID(){
        return this.#logId;
    }

    set LogID(logId){
        this.#logId = logId;
    }

    get TaskId(){
        return this.#taskId;
    }

    set TaskId(taskId){
        this.#taskId = taskId;
    }
    
    get ClmIdPrevius(){
        return this.#clmIdPrevius;
    }

    set ClmIdPrevius(clmIdPrevius){
        this.#clmIdPrevius = clmIdPrevius;
    }
    
    get ClmIdCurrent(){
        return this.#clmIdCurrent
    }

    set ClmIdCurrent(clmIdCurrent){
        this.#clmIdCurrent = clmIdCurrent;
    }

    get LogCreatedAt(){
        return this.#logCreatedAt;
    }

    set LogCreatedAt(logCreatedAt){
        this.#logCreatedAt = logCreatedAt;
    }

}