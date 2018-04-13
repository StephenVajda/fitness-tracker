// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDJQbq4imJADCGcQduFURkkQYAjQryGJGw",
    authDomain: "ng-fitness-tracker-b27d2.firebaseapp.com",
    databaseURL: "https://ng-fitness-tracker-b27d2.firebaseio.com",
    projectId: "ng-fitness-tracker-b27d2",
    storageBucket: "ng-fitness-tracker-b27d2.appspot.com",
    messagingSenderId: "45329118969"
  }
};
