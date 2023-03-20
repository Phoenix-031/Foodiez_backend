exports.OK = {
 statusCode: 200,
 statusMessage: "OK",
};

exports.CREATED = {
 statusCode: 201,
 statusMessage: "Created",
};

exports.BAD_REQUEST = {
 statusCode: 400,
 statusMessage: "Bad Request. Please check your request.",
};

exports.UNAUTHORIZED = {
 statusCode: 401,
 statusMessage: "Unauthorized. Please check your credentials.",
};

exports.FORBIDDEN = {
 statusCode: 403,
 statusMessage: "Forbidden. You are not allowed to access this resource.",
};

exports.NOT_FOUND = {
 statusCode: 404,
 statusMessage: "Not Found. The resource you are looking for is not found.",
};

exports.CONFLICT = {
 statusCode: 409,
 statusMessage:
   "Conflict. The resource you are trying to access is already in use.",
};

exports.SERVER_ERROR = {
 statusCode: 500,
 statusMessage: "Internal Server Error. Please try again later.",
};

exports.BAD_GATEWAY = {
 statusCode: 502,
 statusMessage: "Bad Gateway. Please try again later.",
};