// in this we will learn about babel and how to use it in our project
// Babel is a JavaScript compiler that allows you to use next generation JavaScript, today. It transforms your JavaScript code into a version that is compatible with older browsers and environments.

import React from "react";

// so babel is a tool that helps you write modern JavaScript code and ensures that it runs in older environments by transpiling it to a compatible version. It is commonly used in web development to take advantage of new JavaScript features while maintaining compatibility with older browsers. Babel can also be used to transform JSX syntax in React applications, allowing developers to write more concise and readable code.


// for example, if you write code using ES6 features like arrow functions, classes, or template literals, Babel will transpile that code into ES5 syntax that can run in older browsers that do not support these features. This way, you can write modern JavaScript without worrying about compatibility issues.

// examples:
// ES6 code


const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

// Transpiled ES5 code

// var greet = function(name) {
//   console.log("Hello, " + name + "!");
// };


// similarly, if you are using React and writing JSX syntax, Babel will transpile that JSX code into regular JavaScript that can be understood by browsers. For example:

// JSX code
const element = <h1>Hello, world!</h1>;

// Transpiled JavaScript code
// var element = React.createElement("h1", null, "Hello, world!");

// so how this describes that this code actually describing to the above code
// so from above code the babel will take the h1 tag and convert it into a React.createElement function call, which is how React creates elements in JavaScript. This allows you to write JSX syntax that looks similar to HTML, while still being able to use the full power of JavaScript and React.

// and React.createElement takes three arguments: the type of element (in this case, "h1"), any props (which are null in this example and may include attributes like className, style etc ), and the children (which is the text "Hello, world!"). This is how Babel transforms JSX into JavaScript that can be executed by browsers.

// React toolchans are collections of tools that compile, bundle and optimize like Create React App and Next.js come with Babel pre-configured, so you can start writing modern JavaScript and JSX code without needing to set up Babel yourself. However, if you're working on a custom project or want to customize your Babel configuration, you can install Babel and its presets/plugins as needed.

// Babel Components

// 1. presests and plugins
// 2. configuration file
// 3. transpiling code

// Plugin handles transformation of specific syntax or feature like arrow functions, classes, or template literals. Presets are collections of plugins that allow you to transpile a specific set of features. For example, the @babel/preset-env preset includes plugins for transpiling modern JavaScript features based on the target environment you specify.

// so babel is used mainly to perform 3 types of transformations: syntax transformation(arrow functions--> common functions, classes, template literals), jsx compilation, polyfilling(adding support for new JavaScript features in older environments like Promise, async/await), and code optimization. Syntax transformation allows you to use new JavaScript syntax that may not be supported in older environments. Polyfilling adds support for new JavaScript features by including additional code that provides the functionality in older environments. Code optimization can help improve the performance of your code by removing unused code, minifying it, or applying other optimizations.
// Babel can also be used to create reusable components in React. For example, you can define a functional component like this:
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
// This component can then be used in your React application like this:
// <Greeting name="Alice" />
// When you use the Greeting component, Babel will transpile it into a JavaScript function that returns the appropriate JSX code. This allows you to create reusable components that can be easily used throughout your application.



// To use Babel in your project, you typically need to install it along with the necessary presets and plugins. You can do this using npm or yarn. For example, to set up Babel for a React project, you would install the following

// npm install --save-dev @babel/core @babel/preset-env @babel/preset-react

// After installing Babel, you can create a configuration file (babel.config.json or .babelrc) to specify the presets and plugins you want to use. For example:
// {
//   "presets": ["@babel/preset-env", "@babel/preset-react"]
// }
// This configuration tells Babel to use the preset-env for transpiling modern JavaScript features and the preset-react for handling JSX syntax in React applications.

// Once you have Babel set up, you can run it to transpile your code. This can be done using the command line or by integrating it into your build process with tools like Webpack or Gulp. For example, to transpile a file called "app.js" and output the result to "dist/app.js", you can use the following command: