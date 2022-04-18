import middy from "@middy/core";
import httpUrlEncodeBodyParser from "@middy/http-urlencode-body-parser";

export const middyfy = (handler) => {
	return middy(handler).use(httpUrlEncodeBodyParser());
};
