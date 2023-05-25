# PumpNDump Project README
![image](https://github.com/spotmies/pumpndump/assets/90003260/da84707a-4bc7-470a-81b5-6ab9bc53569f)

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This README provides an overview of the PumpNDump project. The project aims to facilitate trading activities and provide insights into pump and dump schemes in the cryptocurrency market. It is built using React, Firebase, and other dependencies. This document will guide you through the installation and usage of the project.

## Installation
To install the project and its dependencies, follow the steps below:

1. Clone the repository to your local machine:
```bash
gh repo clone spotmies/pumpndump
```

2. Navigate to the project directory:
```bash
cd pumpndump
```

3. Install the required dependencies by running the following command:
```bash
npm install
```

This command will read the `package.json` file and install all the dependencies listed in the `"dependencies"` section.

## Usage
To use the PumpNDump project, follow the steps below:

1. Ensure that all dependencies are successfully installed.

2. Customize the project files to suit your specific requirements. Modify the necessary configuration files, such as Firebase configuration files or any other environment-specific settings.

3. Start the development server:
```bash
npm start
```

This command will start the development server and allow you to preview and make changes to the project. The server will automatically reload whenever you save any file.

4. Open your web browser and navigate to `http://localhost:3000` to see the running application.

5. You're now ready to use the PumpNDump project!

Note: The provided scripts can also be used for building, testing, ejecting, or deploying the project. Refer to the [Scripts](#scripts) section for more details.

## Dependencies
The project relies on the following dependencies:

- @testing-library/jest-dom: A set of custom jest matchers for testing DOM elements.
- @testing-library/react: A library for testing React components.
- @testing-library/user-event: A library for simulating user events in testing React components.
- ethers: A library for interacting with Ethereum and Ethereum-like blockchains.
- firebase: The JavaScript SDK for Firebase, providing tools and services for the web.
- firebase-tools: The Firebase CLI for deploying and managing Firebase projects.
- node-sass: A library for compiling Sass to CSS.
- react: A JavaScript library for building user interfaces.
- react-dom: The entry point to the DOM and server renderers for React.
- react-router-dom: A library for routing in React applications.
- react-scripts: A set of scripts and configuration used by Create React App.
- web-vitals: A library for measuring web vitals performance metrics.

## Scripts
The project includes the following predefined scripts:

- `start`: Starts the development server.
- `build`: Builds the project for production.
- `test`: Runs tests for the project.
- `eject`: Ejects the project configuration from Create React App.
- `predeploy`: Runs the build script before deployment.
- `deploy`: Deploys the project using gh-pages.

To execute a script, run the following command:
```bash
npm run <script-name>
```

## Contributing
Contributions to the project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's repository.

## License
This project is licensed under the `BSD 3-Clause License`. See the `LICENSE` file for more information

