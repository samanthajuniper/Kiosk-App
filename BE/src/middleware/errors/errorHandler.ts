import { ERROR_STATUS } from "../constants";

const errorHandler = (err, req, res, next) => {
  const formattedError = {
    title: "",
    message: err.message,
    stackTrace: err.stack,
  };
  switch (res?.statusCode) {
    case ERROR_STATUS.VALIDATION_ERROR:
      formattedError.title = "Validation Error";
      break;
    case ERROR_STATUS.UNAUTHORIZED:
      formattedError.title = "Unauthorized";
      break;
    case ERROR_STATUS.FORBIDDEN:
      formattedError.title = "Forbidden";
      break;
    case ERROR_STATUS.NOT_FOUND:
      formattedError.title = "Not Found";
      break;
    case ERROR_STATUS.SERVER:
      formattedError.title = "Server Error";
      break;
    default:
      console.log("no error, all good!");
      break;
  }
  res.json(formattedError);
  next();
};

export { errorHandler };
