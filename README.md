# Amepi - Web API

## Prerequisite

- [Deno](https://deno.com/) (v1.39.2)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)
  - [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- [Postman](#postman) (optional)
- [Bitwarden Secrets Manager](#bitwarden-secrets-manager) (optional)

## Getting started

Configure
[Environment variables](https://docs.deno.com/runtime/manual/basics/env_variables#env-file):

```bash
# rename the .env.example file to .env
mv .env.example .env
```

Then execute the **dev** task:

```bash
# run the program
deno task dev
```

## Tools

### [Deno Built-In Tooling](https://docs.deno.com/runtime/manual/tools/)

Deno provides some built-in tooling that is useful when working with JavaScript
and TypeScript:

#### [Task Runner](https://docs.deno.com/runtime/manual/tools/task_runner)

Configure
[tasks in the deno.json](https://docs.deno.com/runtime/manual/getting_started/configuration_file#tasks)
file.

```bash
# listing tasks
deno task
```

#### [Code Formatter](https://docs.deno.com/runtime/manual/tools/formatter)

```bash
# format all supported files in the current directory and subdirectories
deno fmt
```

[Use formatting in Visual Studio Code](https://docs.deno.com/runtime/manual/references/vscode_deno/#using-formatting)
by triggering the "Format Document" command (_Shift + Alt + F_ on windows).

```jsonc
// .vscode/settings.json
{
  "editor.defaultFormatter": "denoland.vscode-deno" // deno vscode extension
}
```

#### [Testing](https://docs.deno.com/runtime/manual/basics/testing/)

```bash
# run all tests in the current directory (recursively) that match the glob {*_,*.,}test.{ts, tsx, mts, js, mjs, jsx}
deno test

# Run all tests in the utils directory
deno test utils/

# Run just my_test.ts
deno test my_test.ts
```

##### [Test Coverage](https://docs.deno.com/runtime/manual/basics/testing/coverage)

#### [Benchmarking](https://docs.deno.com/runtime/manual/tools/benchmarker)

```bash
# run all benchmarks in the current directory (recursively) that match the glob {*_,*.,}bench.{ts, tsx, mts, js, mjs, jsx}
deno bench

# Run all benches in the utils directory
deno bench utils/

# Run just my_bench.ts
deno bench my_bench.ts
```

### [Postman](https://www.postman.com)

### [Bitwarden Secrets Manager](https://bitwarden.com/products/secrets-manager/)

## [Managing Dependencies](https://docs.deno.com/runtime/tutorials/manage_dependencies)

### [Import Maps](https://docs.deno.com/runtime/manual/basics/import_maps)

[Import Maps](https://github.com/WICG/import-maps) allows control over what URLs
get fetched by JavaScript import statements and import() expressions.

```js
// add the package in deno.json file
{
  "imports": {
    "lodash": "https://esm.sh/lodash@4.17.21"
  }
}

// then import the package
import lodash from "lodash";
```

### [npm via CDNs (esm.sh)](https://docs.deno.com/runtime/manual/node/cdns#esmsh)

[esm.sh](https://esm.sh/) is a modern CDN that allows you to import es6 modules
from a URL:

```js
import React from "https://esm.sh/react@18.2.0";

// You may also use a semver or a dist-tag instead of a fixed version number
import React from "https://esm.sh/react"; // 18.2.0 (latest)
import React from "https://esm.sh/react@^17"; // 17.0.2
import React from "https://esm.sh/react@canary"; // 18.3.0-canary-7cd98ef2b-20230509

// Tree Shaking
import { __await, __rest } from "https://esm.sh/tslib"; // 7.3KB
import { __await, __rest } from "https://esm.sh/tslib?exports=__await,__rest"; // 489B
```

#### [Pinning Build](https://esm.sh/#pinning-build-version)

To ensure stable and consistent behavior, you may want to pin the build version
of a module you're using from esm.sh.

```js
import React from "https://esm.sh/react-dom?pin=v134";
// or use version prefix
import React from "https://esm.sh/v134/react-dom";
```

#### [Using CLI Script](https://esm.sh/#cli)

esm.sh provides a CLI script for managing imports with
[import maps](#import-maps) in Deno. This CLI script automatically resolves
dependencies and uses a [pinned build](#pinning-build) version for stability.

```bash
# Adding packages
deno task esm:add react react-dom     # add multiple packages
deno task esm:add react@17.0.2        # specify version
deno task esm:add react:preact/compat # using alias

# Updating packages
deno task esm:update react react-dom  # update specific packages
deno task esm:update                  # update all packages

# Removing packages
deno task esm:remove react react-dom
```

### [npm: specifiers](https://docs.deno.com/runtime/manual/node/npm_specifiers)

Deno supports importing npm packages using the **_npm:_** specifiers:

```js
import { emojify } from "npm:node-emoji@2";
```

Some packages do not ship with
[TypeScript types](https://docs.deno.com/runtime/manual/node/npm_specifiers#typescript-types)
out of the box, but you can specify their types with a @deno-types directive.

```js
// @deno-types="npm:@types/express@^4.17"
import express from "npm:express@^4.17";
```

## Configuration

### Visual Studio Code

#### [Workspace Settings]()

Configure
[Visual Studio Code workspace settings](https://code.visualstudio.com/docs/editor/workspaces#_workspace-settings)
in the .vscode/settings.json file.

#### [Debugging in Visual Studio Code](https://docs.deno.com/runtime/manual/references/vscode_deno#using-the-debugger)

The Deno extension provides integration with the built-in VSCode debugger.

#### [Workspace Recommended Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)

You can add a list of extensions identifiers:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

### [Deno](https://docs.deno.com/runtime/manual/getting_started/configuration_file)

[deno.json](https://docs.deno.com/runtime/manual/#configure-your-project-with-denojson)
file allows you to customize the
[built-in TypeScript compiler](https://docs.deno.com/runtime/manual/advanced/typescript/overview#how-does-it-work),
[formatter](#code-formatter), and
[linter](https://docs.deno.com/runtime/manual/tools/linter).

## Code walkthrough

[Hono](https://hono.dev/) is a simple web application framework similar to
Express.

```js
console.log("hello world");
```

### Project Structure

[wip](https://nextjs.org/docs/getting-started/project-structure)

### Environments

## To Do

### Before git push