// @ts-check
import reactPlugin from "vite-plugin-react";
import helloWorldPlugin from "./plugin";

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: "react",
  plugins: [reactPlugin, helloWorldPlugin()],
};

export default config;
