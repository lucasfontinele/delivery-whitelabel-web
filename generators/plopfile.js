module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Creates a functional component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name? (first letter capitalized)',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Preferred path to the component? (From src/components)',
        default: (param) => param.name,
      }
    ],
    actions: () => {
      let actions = [
        {
          type: 'add',
          path: '../src/components/{{path}}/index.tsx',
          templateFile: 'templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{path}}/styles.module.scss',
          templateFile: 'templates/styles.module.scss.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{path}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/stories.tsx.hbs',
        },
      ];

      return [
        ...actions,
      ];
    },
  });
};
