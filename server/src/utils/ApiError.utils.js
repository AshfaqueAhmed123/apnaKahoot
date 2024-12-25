export class ApiError {
    constructor(statusCode,message){
        this.statusCode = statusCode | 500,
        this.message = message || "something went wrong"
    }
}