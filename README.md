<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Generate
```bash
# generate module
$ nest generate module <module_name>

# generate controller
$ nest generate controller <controller_name>

# generate provider services
$ nest generate service <service_name>

# generate complete resource (generate module, controller, service, dtos, routes, etc)
$ nest generate resource <resource_name>
```

## Basics

Nest is basically based on directives which you can export from `nest/common`. So to create routes, we add routes directive (`@GET(), @POST(), @PUT(), @DELETE()`) in the controller by adding class methods to handle the request.

You can additionally add properties like `@Param()`, `@Body()` to extract request params and body.

For further info, please check the `/src/ninjas` controller.
