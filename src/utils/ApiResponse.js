class ApiResponse {
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode < 200
        this.data = data
    }
}

export {ApiResponse}