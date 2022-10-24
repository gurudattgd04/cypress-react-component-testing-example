# Getting Started with React App Component testing with Cypress

## Introduction

React application is made up of components and the react framework comes bundled with testing library @testing-library/react. The react testing library utilizes JEST to run the tests and the tests runs by creating Virtual DOM and we will not know the look and feel of the component without starting the full application.

If we know how our component looks at the early development stage and imagine how beneficial it will be to load the component in real browser which gives feedback during development stage itself and we can then write tests for these components, which includes functional as well as visual.

### Getting Started

For this example i have created a simple react app which flips the card upon clicking of a button, which will look like below upon start

<p align="middle">

![image.png](./readmeReferenceFiles/ReactApp.gif)

</p>

### Folder structure

Below is our folder structure

<p align="middle">
<img src="./readmeReferenceFiles/folderStructure.png" width="100" height="200"/>
</p>

We have a single component called CardPreview

<p align="middle">
<img src="./readmeReferenceFiles/CardPreview_js.png"/>
</p>

### Writing Jest test with @testing-library/react

By looking into our component, we can see that CardPreview component accepts props which should contain term and definition

@testing-library/react provides render function which accepts the Component to create Virtual DOM and returns functions using which we can query for the elements like below

<p align="middle">
<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:811px;position:relative"><div style="width:100%;padding-bottom:48.82860665844636%"></div><iframe width="811" height="396" title="Code snippet - cardPreview.spec.js" src="https://snappify.io/embed/0748da75-9b54-445a-b709-a13bc09683e5?responsive" allow="clipboard-write" style="position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>
</p>
In the above test we are validating if the component loads the term we passed.

Let's see how we can trigger button click events

<p>
<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:1268px;position:relative"><div style="width:100%;padding-bottom:39.511041009463725%"></div><iframe width="1268" height="501" title="Code snippet - cardPreview.spec.js" src="https://snappify.io/embed/0cadf71d-9fb5-4533-a671-b29908d57bf1?responsive" allow="clipboard-write" style="position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>
<p/>

In the above test we have used fireEvent from @testing-library/react to trigger button click event and we are validating whether the flipping card changes the text from term to definition

#### Running the Jest Tests

`npm test`

Running npm test command will execute all the Jest tests and the output in the terminal would look like below

<p align="middle">
<img src="./readmeReferenceFiles/JestRunResult.png"/>
</p>

## Writing Component testing with Cypress

With cypress we can load our component in real browser and write tests the way we write end to end tests.

**pre-requisites**

1. Install cypress by executing command **npm install cypress**
2. Open cypress by executing command **npx cypress open**
3. Select the Component Testing as testing type
<p align="middle">
<img src="./readmeReferenceFiles/TestingTypeSelection.png"/>
</p>
4. Cypress auto detects the framework and we can simply click on Next step for configuration
<p align="middle">
<img src="./readmeReferenceFiles/FrameworkSelection.png"/>
</p>
5. Cypress will create all the required config files along with an example component test for us
<p align="middle">
<img src="./readmeReferenceFiles/Config.png"/>
</p>

**Note: In this repository i have configured everything needed.**

### Writing our first component test using cypress

Under our src > components let's create a new file called CardPreview.cy.js

In Jest with @testing-library/react we used render function to render the component to Virtual DOM, but with Cypress we are going to use mount function to mount the Component to real browser and render it.

Our test will look like below

<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:892px;position:relative"><div style="width:100%;padding-bottom:58.52017937219731%"></div><iframe width="892" height="522" title="Code snippet - CardPreview.cy.js" src="https://snappify.io/embed/a838e853-f13c-45e0-9906-06b77f7d2c12?responsive" allow="clipboard-write" style="position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>

As we can see, once we mount the component, our cypress commands just looks like how we use it in end to end testing.

In the above cypress component test we are checking

1. cy.contains('this is a term').should('be.visible') - This command ensures the text is visible in the browser
2. cy.contains("[data-testid='tertiary']", 'show back').click() - This command finds the element based on text and custom test id attribute and then clicks(In Jest we used fireEvent from react testing library)
3. cy.contains('this is a def').should('be.visible') - This command validated if the text is changed to what we expect after flipping the card from step 2
4. cy.contains("[data-testid='tertiary']", 'show front').should('be.visible') - This command validates if the button text changed after flip.

### Running our Cypress component test

`npx cypress open --component`

Executing the above command directlry open the Component testing browser selection window

<p align="middle">
<img src="./readmeReferenceFiles/ComponentTestBrowserSelection.png"/>
</p>
Once we select the browser and click on Start Component Testing in Chrom, our spec selection window displays, listing all of the component tests.

<p align="middle">
<img src="./readmeReferenceFiles/SpecSelection.png"/>
</p>
We can click on our component test and see the action
<p align="middle">
<img src="./readmeReferenceFiles/ComponentRunWithoutCss.gif"/>
</p>

Great, our component test is working fine and we can see the test running and component mounted in the real browser. But our CSS is not loaded!

In order for CSS to be loading while we mount our component test, we need to import the CSS in cypress/support/component.js file like below

<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:456px;position:relative"><div style="width:100%;padding-bottom:55.92105263157895%"></div><iframe width="456" height="255" title="Code snippet - component.js" src="https://snappify.io/embed/b16d433d-e1f1-4c8f-81dd-b476374fef74?responsive" allow="clipboard-write" style="position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>

Once we save the file, our Cyress component test automatically runs with CSS loaded

<p align="middle">
<img src="./readmeReferenceFiles/ComponentTestWithCss.gif"/>
</p>
