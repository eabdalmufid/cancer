/** @format */

const ClientError = require("../exceptions/ClientError");

class InputError extends ClientError {
	constructor(message, statusCode = 400) {
		super(message);
        this.name = "InputError";
        this.statusCode = statusCode;
	}
}

module.exports = InputError;
