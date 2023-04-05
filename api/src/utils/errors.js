class AppError extends Error {
  constructor(message, codeStatus) {
    super(message);
    this.codeStatus = codeStatus;
  }
}

function errorHandler(error, res) {
  if (error instanceof AppError) {
    return res.status(codeStatus).json({ message: error.message });
  }

  return res.status(500).json({ error: error.message });
}

module.exports = {
  AppError,
  errorHandler,
};
