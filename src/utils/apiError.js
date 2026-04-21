class apiError extends Error {
    constructor(
        statusCode,
        message="Something is wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data=null //read more in documetation
        this.message
        this.errors = errors
        this.stack = statck

        if(statck){
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export { apiError }