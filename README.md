# The-repo

An attempt at a full mono-repository with all the tools and utilities needed for rapid development, testing, building and deployment.

## Goals

- ◼️ Front-end application with React using a rust-based bundler
- ◼️ Back-end application using Nestjs with fastify
- ◼️ Full development environment support with hmr for all applications
- ◼️ Azure Function support with individual function apps
- ◼️ Azure Function bundling and testing locally
- ◼️ Testing support using a modern test runner (maybe Jest) for all code
- ◼️ Password-less and secret-less development using Azure App Configuration and Azure Key Vault
- ◼️ Fast enrollment of new developers. As few hoops as possible.
- ◼️ Pre-built VSCode profile with extensions and configuration.


## Linting and formatting

This project uses [Prettier](https://prettier.io) and [Eslint](https://eslint.org) for formatting and linting. Configuration is based on [`.editorconfig`](./.editorconfig) and [`.eslint`](./.eslint) respectively.

Prettier is set up to use `.editorconfig` as it's source of truth in addition to some rules specified in [`.prettierrc`](./.prettierrc)