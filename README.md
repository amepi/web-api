# Amepi - Web API

## Prerequisite

- [Deno](https://docs.deno.com/runtime/manual/getting_started/installation)
  (v1.38.1 minimum)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)
  - [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
- [Postman](https://www.postman.com) (recommended)

## Getting started

Configure
[Environment variables](https://docs.deno.com/runtime/manual/basics/env_variables#env-file):

```bash
# rename the .env.example file to .env
mv .env.example .env
```

Finally run the application:

```bash
# run the program
deno task dev
```

## [Tools](https://docs.deno.com/runtime/manual/tools/)

Deno provides some built-in tooling that is useful when working with JavaScript
and TypeScript:

### [Task Runner](https://docs.deno.com/runtime/manual/tools/task_runner)

See the
[list of tasks in the deno.json](https://docs.deno.com/runtime/manual/getting_started/configuration_file#tasks)
file.

```bash
# listing tasks
deno task
```

### [Code Formatter](https://docs.deno.com/runtime/manual/tools/formatter)

```bash
# format all supported files in the current directory and subdirectories
deno fmt
```

[Use formatting in Visual Studio Code](https://docs.deno.com/runtime/manual/references/vscode_deno/#using-formatting)
by triggering the "Format Document" command (_Shift + Alt + F_ on windows).

```jsonc
// .vscode/settings.json
{
  "editor.defaultFormatter": "denoland.vscode-deno"
}
```

### [Testing](https://docs.deno.com/runtime/manual/basics/testing/)

```bash
# run all tests in the current directory (recursively) that match the glob {*_,*.,}test.{ts, tsx, mts, js, mjs, jsx}
deno test

# Run all tests in the utils directory
deno test utils/

# Run just my_test.ts
deno test my_test.ts
```

### [Benchmarking](https://docs.deno.com/runtime/manual/tools/benchmarker)

```bash
# run all benchmarks in the current directory (recursively) that match the glob {*_,*.,}bench.{ts, tsx, mts, js, mjs, jsx}
deno bench

# Run all benches in the utils directory
deno bench utils/

# Run just my_bench.ts
deno bench my_bench.ts
```

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
from a URL.

```js
import React from "https://esm.sh/react@18.2.0";
// You may also use a semver or a dist-tag instead of a fixed version number
import React from "https://esm.sh/react"; // 18.2.0 (latest)
import React from "https://esm.sh/react@^17"; // 17.0.2
import React from "https://esm.sh/react@canary"; // 18.3.0-canary-7cd98ef2b-20230509

// Tree Shaking
import { __await, __rest } from "https://esm.sh/tslib"; // 7.3KB
import { __await, __rest } from "https://esm.sh/tslib?exports=__await,__rest"; // 489B

// esm.sh has many more features (e.g. Importing WASM Modules, Pinning Build Version...)
```

#### [Using CLI Script](https://esm.sh/#cli)

esm.sh provides a CLI script for managing imports with import maps in Deno. This
CLI script automatically resolves dependencies and uses a pinned build version
for stability.

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

Configure
[Visual Studio Code workspace settings](https://code.visualstudio.com/docs/editor/workspaces#_workspace-settings)
in the .vscode/settings.json file.

### [Deno](https://docs.deno.com/runtime/manual/getting_started/configuration_file)

Deno supports a configuration file that allows you to customize the built-in TypeScript compiler, formatter, and linter.

## Code walkthrough

[Hono](https://hono.dev/) is a simple web application framework similar to
Express.

```js
console.log("hello world");
```
### Project Structure

[wip](https://nextjs.org/docs/getting-started/project-structure)