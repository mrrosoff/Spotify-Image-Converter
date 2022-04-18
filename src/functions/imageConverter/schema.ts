export default {
	type: "object",
	properties: {
		spotifyUrl: { type: "string" }
	},
	required: ["spotifyUrl"]
} as const;
