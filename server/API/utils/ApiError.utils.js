export class ApiError {
    constructor(statusCode,message){
        this.statusCode = statusCode,
        this.message = message || "something went wrong"
    }
}