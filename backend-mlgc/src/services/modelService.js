/** @format */

const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
	const modelPath = process.env.APP_ENV == "local" ? process.env.LOCAL_MODEL_URL : process.env.MODEL_URL;
	console.log(`Trying to load model from: ${modelPath}`);

	try {
		return await tf.loadGraphModel(modelPath);
	} catch (error) {
		console.error("Error loading model:", error);
		throw error;
	}
}

module.exports = loadModel;
