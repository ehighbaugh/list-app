// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAPgHHXcZN_fslC0WwiirOzehqFpTkTw3E',
    authDomain: 'list-app-ng5.firebaseapp.com',
    databaseURL: 'https://list-app-ng5.firebaseio.com',
    projectId: 'list-app-ng5',
    storageBucket: 'list-app-ng5.appspot.com',
    messagingSenderId: '338451651466'
  }
};
