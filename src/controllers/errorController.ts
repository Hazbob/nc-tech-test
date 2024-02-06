import CustomError from "../utils/CustomError";

export default async function errorHandler(error, req, res, next) {
    if (error instanceof CustomError) {
        // Handle errors thrown by CustomError
        res.status(error.statusCode).json({ error: "Internal Server Error" });
    } else {
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: error.message });
    }
}
