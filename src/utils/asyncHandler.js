const asyncHandler = (requestHandler) =>{
    return (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}

export {asyncHandler}



// we are creating wrapper function, which will take async function as input
// const asyncHandler = (fn)=> async (req, res, next)=> {
//     try{
//         await fn(req, res, next);
//     }catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }