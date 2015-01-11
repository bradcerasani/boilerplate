# Boilerplate

This is my boilerplate for front-end web projects. WIP - pull requests welcome.

## Prerequisites

#### Node.js & Gulp

Install Node using the installer [here](http://nodejs.org/). Once installed, use `npm` to install [Gulp](http://gulpjs.com) globally:

```
$ npm install -g gulp
```

## Getting Started

#### 1. Clone the project

```
$ git clone https://github.com/bradcerasani/boilerplate.git
```

#### 2. Install dependencies

```
$ cd boilerplate
$ npm install
```

#### 3. Run Gulp

```
$ gulp
```

You should now be able to open [http://localhost:3000](http://localhost:3000/) in your browser.

The default gulp task runs build, watch, and serve tasks as specified in gulp/tasks. Check the console for external URL to view your work on additional network connected devices:

```
[BrowserSync] Local URL: http://localhost:3000
[BrowserSync] External URL: http://192.168.100.105:3000
[BrowserSync] Serving files from: ./dist
```

## GitHub Pages Deployment

The following command will deploy the current branch to GitHub pages with the `dist` directory acting as web root:

`$ git subtree push --prefix dist origin gh-pages`

---

## New to Node.js?

Node comes with npm, the node package manager. `package.json` keeps track of all of the dependencies required for a Node project, and `$ npm install` installs these dependencies into a `node_modules` directory in the project root.

You should never manually modify the contents of `node_modules` - this directory is ignored by git and should proably be hidden from the sidebar of your editor.

To add or modify a dependency, edit the `package.json` file or run `npm install --save-dev <package name>` to have it installed and added to `package.json` automatically.

#### Permissions Errors

If npm is throwing permissions errors, you may need to chown some of the directories it uses:

```
$ sudo chown -R $(whoami) ~/.npm
$ sudo chown -R $(whoami) /usr/local/lib/node_modules
```

_Note: $(whoami) is a valid command, not a placeholder_

You should not need to run `npm install` as sudo/root. 

#### Reinstalling Packages

From project root:

```
$ rm -rf node_modules
$ npm install
```

# License

MIT © [Brad Cerasani](http://bradcerasani.me)
