import CustomError from "../utils/CustomError";

export default async function errorHandler(error, req, res, next) {
    if (error instanceof CustomError) {
        switch (error.statusCode) {
            case 500:
                res.status(error.statusCode).json({ error: "Internal Server Error" });
                break;
            case 404:
                res.status(error.statusCode).json({ error: error.message });
                break;
            default:
                console.error(error);
                break;
        }


    } else {
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: error.message });
    }
}
