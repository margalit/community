// @ts-check
/** @type {import('reshaped').ReshapedConfig} */
const config = {
  themes: {
    dribbble: {
      color: {
        backgroundPrimary: { hex: "#ea4c89" },
        backgroundPrimaryFaded: { hex: "#ffdeeb" },
        backgroundPrimaryHighlighted: { hex: "#d04077" },
        foregroundPrimary: { hex: "#ea4c89" },
        borderPrimary: { hex: "#ea4c89" },
      },
      shadow: {
        elevated: [
          {
            offsetX: 0,
            offsetY: 10,
            blurRadius: 70,
            colorToken: "black",
            opacity: 0.15,
          },
        ],
      },
    },
  },
};

module.exports = config;
