import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

import jimp from "jimp";

const imageConverter: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
	const jimpImage = await jimp.read(event.body.spotifyUrl);

	const newImageWidth = 32;
	jimpImage.resize(newImageWidth, newImageWidth);

	const pixels = [];

	for (let i = 0; i < newImageWidth; i++) {
		let line = [];
		for (let j = 0; j < newImageWidth; j++) {
      const pixelValue = jimp.intToRGBA(jimpImage.getPixelColor(i, j));
      delete pixelValue.a
      line.push(pixelValue);
		}
		pixels.push(line);
	}

	return formatJSONResponse({ pixels });
};

export const main = middyfy(imageConverter);