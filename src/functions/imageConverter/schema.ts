export default {
    type: "object",
    properties: {
        spotifyUrl: { type: "string" },
        newImageSize: { type: "string" }
    },
    required: ["spotifyUrl"]
} as const;
