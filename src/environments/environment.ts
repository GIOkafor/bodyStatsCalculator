// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBJpWj0TC7sF4WqgirVsfh54Zosz0khWD8",
    authDomain: "ultimate-fitness-calculator.firebaseapp.com",
    databaseURL: "https://ultimate-fitness-calculator.firebaseio.com",
    projectId: "ultimate-fitness-calculator",
    storageBucket: "ultimate-fitness-calculator.appspot.com",
    messagingSenderId: "852186713855"
  }
};
