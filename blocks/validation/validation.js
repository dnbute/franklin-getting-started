export default class Validation {
    constructor(id, environmentId, programId, status) {
        this.id = id;
        this.environmentId = environmentId;
        this.programId = programId;
        this.status = status;
    }

    toString() {
        return "Validation = " + this.id + " | environmentId = " + this.environmentId + " | programId = " + this.programId + " | status = " + this.status;
    }
}