## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Install Dependencies
You need to have `grunt-cli` and `karma-cli` packages installed in your system. If you haven't, install them running `npm install --global grunt-cli karma-cli` in your shell (you will need an administrator permissions). Then run

```
npm install
```

to install dependencies.

* `node_modules` - contains the npm packages for the tools we need

## Directory Layout

```
app/assets/               -->  is for assets that are owned by the application, such as custom images, JavaScript files or stylesheets.
lib/assets/               --> is for your own libraries' code that doesn't really fit into the scope of the application or those libraries which are shared across applications.
vendor/assets/            --> is for assets that are owned by outside entities, such as code for JavaScript plugins and CSS frameworks.
tests/                    --> contains unit and e2e tests
public/                   --> destination folder for FE compiled resources.
```

## Main Tasks
  - `grunt build` compiles assets to the `public/assets` directory.
  - `grunt watch` watches assets and automatically recompiles them when they change.
  - `grunt connect` launches the development server at `http://localhost:8000` or next available port. If you use it together with previous task, the page is refreshed automatically.

## Running Tests
  - `npm test` runs the code analysis and tests. Coverage reports will be placed in the `coverage_reports` directory.

## Running the App in Production
This really depends on how complex your app is and the overall infrastructure of your system, but the general rule is that all you need in public are all the files under the {app,lib,vendor} directory. Everything else should be restricted for users.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure out what is the best way to host the static files to comply with the same origin policy if applicable. Usually this is done by hosting the files by the backend server or through reverse-proxying the backend server(s) and webserver(s).

## Continuous Integration
TBD
