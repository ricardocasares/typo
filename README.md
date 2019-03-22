[![Build Status](https://travis-ci.com/ricardocasares/typo.svg?branch=master)](https://travis-ci.com/ricardocasares/typo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# typo

TypeScript definition file generator for React components

## Install

```bash
npm i -g @pkgz/typo
```

## Usage

Your React components must be using `PropTypes` in order for this to work.

### Example

```bash
❯ typo type --help

  Description
    Look for React components and generate type definitions

  Usage
    $ typo type <src> [options]

  Options
    -m, --mod     Change definition module name
    -e, --ext     Change file extension to look for  (default jsx)
    -h, --help    Displays this message

  Examples
    $ typo type src -m @pkgz/ui -e jsx
```

### Output

```bash
❯ typo type fixtures/ -m @pkgz/ui
declare module '@pkgz/ui' {
    import * as React from 'react';

    export interface PanelProps {
        test?: boolean;
    }

    export class Panel extends React.Component<PanelProps, any> {
        render(): JSX.Element;

    }

}
```

### Piping to a definition file

```bash
❯ typo fixtures/ -m @pkgz/ui > index.d.ts
❯ cat index.d.ts
declare module '@pkgz/ui' {
    import * as React from 'react';

    export interface PanelProps {
        test?: boolean;
    }

    export class Panel extends React.Component<PanelProps, any> {
        render(): JSX.Element;

    }

}
```

## Known issues

- [ ] Currently generates complete module per file instead of one global module
- [ ] Currently has a naive way of finding components: given `src/` it will look for any folders and then find a file with the same folder name\*

\*Your folder structure must look like this:

```
❯ tree src/
src/
├── Alert
│   └── Alert.js
└── Panel
    └── Panel.jsx
```

## Contributing

Feel free to open an issue, pull requests are preferred.

**IMPORTANT** Make sure you always create new branches from `beta`.

### Automated versioning

We use `semantic-release` to automate the versioning process, make sure you follow the [commit message convention explained here](https://github.com/semantic-release/semantic-release#commit-message-format).

**HEADS UP:** If you are not sure how write a commit message, make your changes in your feature branch and run `npm run commit` and follow the assistant.

### Releases

#### Beta

Create a feature branch and make a pull-request to `beta` branch.
Once its merged, you can try and install the package using `@beta` dist tag on `npm`.

```bash
npm i -g @pkgz/typo@beta
```

#### Production

Create a new pull-request from `beta` to `master` branch.
Once it gets merged, the final version will be released using `@latest` dist tag on `npm`.

## Credits

This module is just a convenience wrapper for [react-to-typescript-definitions](https://github.com/KnisterPeter/react-to-typescript-definitions), thanks to @KnisterPeter for writing this.
