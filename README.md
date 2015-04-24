# Test your simple maven project using karma with cucumberjs

This is a very simple project, to show how easy it is to use the cucumberjs adapter from karma, to run acceptance tests automatically with multiple browsers.

## Step 1 - Create maven project

Nothing more to say...

## Step 2

Navigate to your project root with a shell and type in
```
[sudo] npm install -d
```
The needed 'devDependencies' will start to download...
Which dependencies you can see in your package.json file in your project root.

## [Optional] Step 3

I also installed 'karma-cli' to keep the typing in the shell short. 
Usually you need to start karma like this 
```
./node_modules/karma/bin/karma to start karma. 
```

So that I only need to type 'karma' without path install this module. Then you can use 'karma' globally.
```
npm install -g karma-cli
```

## Step 4

Now you can start this project with the following command
```
karma start src/test/resources/karma.conf.js
```
