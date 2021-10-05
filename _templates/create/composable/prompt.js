const changeCase = require('change-case');

const INPUTS = {
    USE_NAME: {
        type: 'input',
        name: 'name',
        message: 'Provide use name without prefix',
        validate(value) {
            if (!value.length) {
                return 'Composable should have a name!!!';
            }
            if (value.length < 3) {
                return 'Composable name should contain at least 3 symbols!!!';
            }
            if (value.startsWith('use-')) {
                return 'No prefixes allowed!!! Prefix will be added automatically!!!';
            }
            return true;
        }
    },
    LEVEL: {
        type: 'select',
        name: 'level',
        message: 'What type of component do you want to create?',
        choices: ['global', 'component']
    },
    COMPONENT_NAME: {
        type: 'input',
        name: 'componentName',
        message: 'Provide full component name without extension',
        validate(value) {
            const prefixes = ['a-', 'm-', 'o-', 't-', 'p-'];
            if (!value.length) {
                return 'Components should have a name!!!';
            }
            if (value.length < 4) {
                return 'Component name should contain at least 4 symbols!!!';
            }
            const prefix = changeCase.kebab(value).substring(0, 2);
            if (!prefixes.includes(prefix)) {
                return 'Full component name should contain prefix!!!';
            }
            return true;
        }
    },
    IS_UNIQUE_ORGANISM: {
        type: 'select',
        name: 'organismType',
        message: 'What type of organism is your component',
        choices: ['unique', 'reusable']
    }
};

const COMPONENT_TYPES = {
    'a-': 'atoms',
    'm-': 'molecules'
};

module.exports = {
    prompt: async ({ inquirer }) => {
        // STEP 1 - name & level
        const { name, level } = await inquirer.prompt([INPUTS.USE_NAME, INPUTS.LEVEL]);
        const kebabName = changeCase.kebab(`use-${name}`);
        const camelName = changeCase.camel(`use-${name}`);

        if (level === 'global') {
            const path = `src/services/use/${kebabName}/`;
            return {
                path,
                kebabName,
                camelName
            };
        }

        // STEP 2 - only for component level
        const { componentName } = await inquirer.prompt([INPUTS.COMPONENT_NAME]);
        if (!componentName.startsWith('o-')) {
            const prefix = changeCase.kebab(componentName).substring(0, 2);
            const componentType = COMPONENT_TYPES[prefix];
            const path = `src/components/${componentType}/${changeCase.kebab(componentName)}/use/`;
            return {
                path,
                kebabName,
                camelName
            };
        }

        // STEP 3 - only for organisms
        const { organismType } = await inquirer.prompt([INPUTS.IS_UNIQUE_ORGANISM]);
        const componentType = organismType === 'unique' ? 'unique-organisms' : 'organisms';
        const path = `src/components/${componentType}/${changeCase.kebab(componentName)}/use/`;

        return {
            path,
            kebabName,
            camelName
        };
    }
};
