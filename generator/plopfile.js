module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.jsx",
        templateFile: "templates/index.jsx.hbs",
      },
    ],
  });
};
