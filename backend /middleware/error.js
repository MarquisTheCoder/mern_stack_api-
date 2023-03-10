const errorHandler = (error, request, response, nextFunction) =>{ 
    const statusCode = response.statusCode ? response.statusCode : 500;
    response.statusCode(statusCode);
    response.json({
        message : error.message,
        stack : process.env.NODE_ENV === "production" ? null : error.stack
    });
}

module.exports = {
    errorHandler,
}