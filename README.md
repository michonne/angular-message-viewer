#twitter-message-handler

Using AngularJS to display and update our view with unique messages from adaptive-test-api

##Why AngularJS?

This JavaScript framework makes updating the DOM dynamic and modularises our code for easy
reading and maintainability.

It comes with alot of built in functionality to help us filter and update our view accordingly.

Using [v1.2.6](https://code.angularjs.org/1.2.6/)

Installed in `/lib/angular-1.2.6/`

##Unit Tests

Tests are written with [Jasmine](http://jasmine.github.io/2.0/introduction.html) test suite.
Using [Karma](http://karma-runner.github.io/0.12/index.html) test runner to run tests.

###Installation:
Install Karma locally and see `karma.conf.js` for configuration details.

`# Install Karma:`

`$ npm install karma --save-dev`

`# Install plugins that your project needs:`

`$ npm install karma-jasmine karma-chrome-launcher --save-dev`

`$ npm install -g karma-cli`

You can then start Karma by typing:

`karma start`

##To Do

* There is not 100% test coverage. Injecting services and filters into the controller was problematic.
* Sorting messages by updated_at and sentiment is not complete. Need to dive deeper into ng-model and |
orderBy