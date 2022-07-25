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
          path: '../src/components/{{path}}/styles.tsx',
          templateFile: 'templates/Component.styles.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{path}}/stories.tsx',
          templateFile: 'templates/stories.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{path}}/misc.ts',
          templateFile: 'templates/Component.misc.ts.hbs',
        },
      ];

      return [
        ...actions,
      ];
    },
  });
};
