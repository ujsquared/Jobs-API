const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {

    let customError = {
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, Please try again later'
    }
    if(err.code && err.code == 11000){

        customError.statusCode = 400;
        customError.msg = `Duplicate key values found for ${Object.keys(err.keyValue)[0]} field` 
    }
    
    if (customError.statusCode &&  customError.msg){
        return res.status(customError.statusCode).json({msg:customError.msg})
    }
}
  


// if (err instanceof CustomAPIError) {
    //   return res.status(err.statusCode).json({ msg: err.message })
    // }
// return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
//




module.exports = errorHandlerMiddleware
