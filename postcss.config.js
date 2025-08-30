import postcssModules from "postcss-modules";

export default {
  plugins: {
    autoprefixer: {}, // ✅ autoprefix for cross-browser
    "postcss-modules": {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
};
