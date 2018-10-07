module.exports = (plop) => {
  plop.setPrompt('fuzzypath', require('inquirer-fuzzy-path'));

  const commonComponentPrompts = [{
    type: 'input',
    name: 'name',
    message: 'Component name',
  }, {
    type: 'list',
    name: 'type',
    message: 'Select type',
    choices: ['components', 'common', 'custom'],
  }, {
    type: 'fuzzypath',
    name: 'path',
    message: 'Select a target directory for your component:',
    rootPath: 'src',
    default: 'components/',
    suggestOnly: false,
    pathFilter: (isDirectory, nodePath) => isDirectory && (nodePath.includes('components') || nodePath.includes('common')),
    when: answers => answers.type === 'custom',
  }];

  plop.setGenerator('classComponent', {
    description: 'Class component',
    prompts: commonComponentPrompts,
    actions: (answers) => {
      const path = answers.path ? answers.path : 'src/{{type}}';

      return [
        {
          type: 'add',
          path: `${path}/{{name}}/{{name}}.tsx`,
          templateFile: './templates/component/classComponent.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{name}}/{{name}}.css`,
          templateFile: './templates/component/styles.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{name}}/package.json`,
          templateFile: './templates/component/package.json.hbs',
        },
      ];
    },
  });

  plop.setGenerator('functionalComponent', {
    description: 'Functional component',
    prompts: commonComponentPrompts,
    actions: (answers) => {
      const path = answers.path ? answers.path : 'src/{{type}}';

      return [
        {
          type: 'add',
          path: `${path}/{{name}}/{{name}}.tsx`,
          templateFile: './templates/component/functionalComponent.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{name}}/{{name}}.css`,
          templateFile: './templates/component/styles.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{name}}/package.json`,
          templateFile: './templates/component/package.json.hbs',
        },
      ];
    },
  });

  plop.setGenerator('reduxState', {
    description: 'New Redux state',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'State name',
    }],
    actions: [
      {
        type: 'add',
        path: 'src/state/{{name}}/{{name}}.actions.tsx',
        templateFile: './templates/redux/actions.hbs',
      },
      {
        type: 'add',
        path: 'src/state/{{name}}/{{name}}.reducer.tsx',
        templateFile: './templates/redux/reducer.hbs',
      },
      {
        type: 'add',
        path: 'src/state/{{name}}/{{name}}.saga.tsx',
        templateFile: './templates/redux/sagas.hbs',
      },
    ],
  });
};
