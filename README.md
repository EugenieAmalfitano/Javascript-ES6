# Javascript-ES6
Based on Pluralsight Class Object-oriented Programming in JavaScript - ES6

Here are some tips to set up the environment: 
- Install Node.js if you don't already have it: https://nodejs.org/en/download/
- I developed it in VS Code (availabe here -- https://code.visualstudio.com/download)
- Open this project's folder in VS Code
- VS Code Shift-Ctrl-C -- puts you in the right folder inside VS Code to run NPM init <package>

<b>NPM commands</b>
<br/>

- npm run dev -- will setup sync with the browser so that when you save a change, it immediately transpiles and you can see your changes in the browser.
- npm init drones (name of package)
- npm install -save es6-module-loader traceur
- npm install -save npm install -save-dev lite-server
- npm install -save material-design-lite

On my system, jquery was already installed because I have TypeScript. 
Otherwise: 
- npm install -save jquery
- npm install -save systemjs  (for compatibility with jquery which was older than es6) -- I don't think I needed this. 

<b>Other environmental concerns</b>
<br/>

There is a google map API call in index.html. 
For full Google apps, you must insert your api key. It's never a good idea to save your api key in GitHub, because your project may be private at first, and you may forget it's there when making it public, or collaborating. 

<b>NOTE</b>
<br/>
My code is similar to the instructor's code, but not identical, due to noted environmental differences. 
I also built the drones section as an exercise (he had done mostly just the cars sections). 
Finally, I added a new service to show data sorting and filtering and error logging, which had been taught but not included in the final project. 
