import styles from "rollup-plugin-styles";

export default {
  input: "./index.js",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
  },
  plugins: [styles()],
};
