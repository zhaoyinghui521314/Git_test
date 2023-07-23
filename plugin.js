function helloPrint() {
  console.log("hello world!!!");
}

export default function myPlugin() {
  return {
    name: "hello-world-plugin",
    configureServer(config) {
      helloPrint();
    },
  };
}
