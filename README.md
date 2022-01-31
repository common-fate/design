# Design
This repo contains Common Fate's design system and component library
Our component library is built off Chakra (components and theming system).

The library is rendered in storybook, with links to the original Figma spec


## Publishing changes
If you have made changes to components in the component library, you can push these live
<!-- @TODO: add note about how to authenticate with npm/github -->
1. Bump the version number, by editting package.json 
    ```
        "version": "0.1.0", # 👈 bump this 
    ```
2. Run `yarn publish`, or `npm publish`


## Installing the component library
If you want to use the react component library on your own project run the following

1. Download the package from github
    ```
    yarn add @common-fate/design
    ```
    To fetch a specific release you can append an ampersand followed by the verision number i.e. `yarn add @common-fate/design@0.1.0`
2. Install peer dependencies
    - The component library requires your own installlation of Chakra to function correctly 
    - This grants some flexibility in package versions and allows the package to ship smaller
    - Follow the [latest chakra install instructions](https://chakra-ui.com/docs/getting-started) or run this current step
        ```
        yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5
        ``` 

2. Add a chakra provider component to base of your react project add import the custome theme
    ```tsx
    import { ChakraProvider } from '@chakra-ui/react';
    import { theme } from '@common-fate/design';

    // ...

    return (
        <ChakraProvider theme={theme}>
        //...
        </Chakraprovider>
      )
    }
    ```
3. Add other dependencies 
    - This project uses fonts from google, add these link tags to your index.html
    ```html
    <head>
    <link
    
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={true}
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
    />
    </head>
    ```

## Deploying a project with the library
To deploy a react app using our design library, the Deployment infra will also need to be authorized to download the project. To achieve this you will have to add an npm.rc file. You will first need to obtain a [Personal Access Token from your github account](https://github.com/settings/tokens/new) (choose `read:packages` for minimum access)
```
registry=https://registry.npmjs.org/
@common-fate:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=ghp_REPLACE_ME
```

## Running Storybook
```
yarn storybook
```