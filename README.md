# env-types

[![npm version](https://badge.fury.io/js/@bedrock-apis%2Fenv-types.svg)](https://www.npmjs.com/package/@bedrock-apis/env-types)

TypeScript type definitions for environment-specific QuickJS engine that doesn't strictly follow standard ES versioning. This package provides a curated set of global types and methods tailored for non-standard runtimes, ensuring better development experience and type safety for your projects.  

> **Note:** This package is currently in **beta**. Contributions, bug reports, and suggestions are highly appreciated! Check out our [GitHub repository](https://github.com/bedrock-apis/env-types) for more information.

## Features

- Provides environment-specific TypeScript type definitions for non-standard engines.
- Covers selective feature support across different engine versions.
- Includes global classes, methods, and properties specific to each environment.
- Helps catch runtime errors early by providing accurate type safety.
- Designed to supplement and compare against TypeScript's global types.

## Installation

Install the package as a development dependency using your preferred package manager:

### npm
```bash
npm install --save-dev @bedrock-apis/env-types
```

### pnpm
```bash
pnpm add -D @bedrock-apis/env-types
```

### yarn
```bash
yarn add --dev @bedrock-apis/env-types
```

### Configuration

Add the package to the `types` field in your `tsconfig.json`:

```json
{
    "compilerOptions": {
        // ... your properties
        "noLib": true,
        "types": ["@bedrock-apis/env-types"]
    }
}
```

## Future Plan
- Continuously update with help of contributions.

## Contributing

This package is in **release candidate**, and we welcome contributions from the community. You can help by:

* Cloning and checking of all types matches latest engine environment
* Suggesting new features or improvements.

### How to repo
* Clone repo
* Install dependencies
* Move cwd to "./dev/"
* Run "node bds-gen.ts" to update generated file
* Run "node scrapple.ts" to bundle all /lib/ files to single /lib.d.ts

Please visit our [GitHub repository](https://github.com/bedrock-apis/env-types) to submit issues or pull requests.