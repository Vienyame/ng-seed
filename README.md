# ng-seed
An angularJS 1.5.x starter app

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) 1.x web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the ng-seed repository and install the dependencies:

### Prerequisites

You need git to clone the ng-seed repository. You can get git from
[https://github.com/Vienyame/ng-seed.git](https://github.com/Vienyame/ng-seed.git).

We also use a number of node.js tools to initialize and test ng-seed. You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone ng-seed

Clone the ng-seed repository using [git][git]:

```
git clone https://github.com/Vienyame/ng-seed.git
cd ng-seed
```

If you just want to start a new project without the ng-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/Vienyame/ng-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
ng-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Testing

coming soon...

### Running Unit Tests

Coming soon...


### End to end testing

Coming soon...


### Running the App during Development

The ng-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).

## Contact

For more information on AngularJS please check out http://angularjs.org/

For more information about this ng-seed contact Vienyame : [vienyame.edorh@gmail.com](vienyame.edorh@gmail.com)

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[http-server]: https://github.com/nodeapps/http-server
