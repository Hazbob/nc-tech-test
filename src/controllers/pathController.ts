export default function handleInvalidPath(req, res, next){
    res.status(404).json({error: "Path does not exist"})
    return
}