export default class CustomError extends Error {
    statusCode: number;
    // This error is to maintain consistency between throwing errors and client responses
    constructor(statusCode: number, errorMessage: string) {
        super(errorMessage);
        this.statusCode = statusCode;

        if(process.env.NODE_ENV !== 'production' && Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError);
        }

    }
}
