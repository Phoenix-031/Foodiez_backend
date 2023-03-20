exports.message = function (res, messageType, message) {
  let return_object = {
    message: message,
  };
  return_object = Object.assign(return_object, messageType);
  res.status(messageType.statusCode).json(return_object);
};

exports.messageError = function (
  res,
  messageType,
  message,
  err
) {
  let return_object = {
    message: message,
    error: err,
  };
  return_object = Object.assign(return_object, messageType);
  res.status(messageType.statusCode).json(return_object);
};

exports.messageCustom = function (
  res,
  messageType,
  message,
  return_object
) {
  return_object.message = message;
  return_object = Object.assign(return_object, messageType);
  res.status(messageType.statusCode).json(return_object);
};