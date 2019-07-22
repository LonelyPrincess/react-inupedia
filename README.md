# React Sample: Inupedia

[![Build Status](https://travis-ci.org/LonelyPrincess/react-inupedia.svg?branch=master)](https://travis-ci.org/LonelyPrincess/react-inupedia)
[![Inline docs](http://inch-ci.org/github/LonelyPrincess/reactnd-project-myreads.svg?branch=master&style=shields)](http://inch-ci.org/github/LonelyPrincess/react-inupedia)
[![Live demo](https://img.shields.io/badge/live%20demo-available-blue.svg)](https://lonelyprincess.github.io/react-inupedia)

## Project description

This is a simple application that retrieves a list of dog breeds and allows the user to see images for the one of their choice.

## Installation and deployment

### Pre-requisites

Before being able to run this application, you must have [Node Package Manager](https://nodejs.org/en/) or [Yarn](https://yarnpkg.com/) installed on your system.

### Get the application running

If you have all the required software installed, the first step to run this application is to install all of its dependencies and start the application's server.

To do so, you must open a console and, once located into the project's root directory, run the following commands:

```bash
# Install all project's dependencies
> npm install

# Run application's server
> npm start
```

These instructions assume that you've installed [Node Package Manager](https://nodejs.org/en/). If you are using [Yarn](https://yarnpkg.com/) instead, just replace `npm` with `yarn` in the commands listed above.

After running the `start` command, the console output should tell you at which URL is the application running.

```bash
The app is running at:

  # URL where the app is running
  http://localhost:3000/
```

Now you only have to enter that URL into your favourite browser, and that's it! You're all set!

## Project structure

The project folder structure is as follows:

```bash
├── public
└── src
    ├── main
    ├── res
        ├── images
        ├── styles
    ├── test
```

Two folders can be found at the project's root path, being the `src` the most important one as it is the place where all of the application source code will live. The other one, `public`, will contain public resources that can be directly accessed via a direct request to the server, such as the application _favicon_ and the _index.html_ file.

The `src` directory is divided in three parts, each one with a different purpose:

- `main` - As the name implies, this folder contains the main code for the project, being it the wrapper for all the files where the app's functionality is implemented.

- `res` - Resources to be used by the application, including images, stylesheets or mock data files that can be used for testing purposes.

- `test` - Code for unit testing is wrapped into this folder.
