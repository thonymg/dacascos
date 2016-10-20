var _ = require("lodash");
var getFormattedDate = require('./config/blog').getFormattedDate;
var baseContent = require('./config/blog').baseContent;
// Js templates
var component = require('./config/react-component').componentContent;
var container = require('./config/redux-container').containerContent;




// Validation && date
var todayNow = getFormattedDate();

const isNotEmptyFor = (name) => {
  return (value) => {
    if (_.isEmpty(value)) return name + " is required";
    return true;
  }
}


// var blogBaseContent = baseContent();
const blogBaseContent = (blogTitle) => {
  let blogMeta = `
tags:
  - tag-1
  - tag-2
categories: 
  - category-1
  - category-2
`;
  return baseContent(blogTitle, blogMeta);
}

const pageBaseContent = (pageTitle) => {
  return baseContent(pageTitle);
}


// React & Redux
const componentContent = (componentName) => {
  return component(componentName)
}

const containerContent = (containerName) => {
  return container(containerName)
}

module.exports = (plop) => {

  plop.setGenerator("blog post", {
    description: "You want a new blog post ?",
    prompts: [{
      type: "input",
      name: "name",
      message: "Blog post title (with space) : ",
      validate: isNotEmptyFor("name")
    }],
    actions: [{
      type: "add",
      path: "./content/blog/" + todayNow + "-{{dashCase name}}.md",
      template: blogBaseContent("{{name}}")
    }]
  });

  plop.setGenerator("new page", {
    description: "You want a new page",
    prompts: [{
      type: "input",
      name: "name",
      message: "Page title (with space) : ",
      validate: isNotEmptyFor("name")
    }],
    actions: [{
      type: "add",
      path: "./content/pages/" + todayNow + "-{{dashCase name}}.md",
      template: pageBaseContent("{{name}}")
    }]
  });

  plop.setGenerator("new react component", {
    description: "a new react class component with proptypes ?",
    prompts: [{
      type: "input",
      name: "name",
      message: "Component name (with space) : ",
      validate: isNotEmptyFor("name")
    }],
    actions: [{
      type: "add",
      path: "./src/components/{{dashCase name}}/index.js",
      template: componentContent("{{pascalCase name}}")
    }]
  });

  plop.setGenerator("new redux container", {
    description: "a redux container with connect & mapsStateToProps",
    prompts: [{
      type: "input",
      name: "name",
      message: "redux container name (with space) : ",
      validate: isNotEmptyFor("name")
    }],
    actions: [{
      type: "add",
      path: "./src/containers/{{dashCase name}}/index.js",
      template: containerContent("{{pascalCase name}}")
    }]
  });
};