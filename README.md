# Coffee Picker

This was created during my time as a student at Code Chrysalis.

Coffee Picker is an app that helps the user select a coffee based on a set of questions.

To use this app: https://cc11-solo-mvp.herokuapp.com/

To modify its implementation or check under the hood, follow the quick setup below.

## Set Up

1. To get started, clone the repo to a folder of your choice.

```
git clone https://github.com/antoniomalacad/cc11-lecture.vue-testing.git
```

2. Install the packages.

```
yarn install
```

3. Set up the local database.

```
echo "CREATE DATABASE coffeequiz;" | psql
```

4. Migrate tables and seed the local database.

```
yarn migrate && yarn seed
```

5. Start the database server. Default port is set to localhost:9000.

```
yarn start
```

6. Start the front-end server. Default port is set to localhost:3000.

```
yarn hack
```

7. Congratulations! You're all set up and ready to make changes.

## Available Scripts For Developers

In the project directory, you can run:

### `yarn hack`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn rollback`

Clears the local database of its tables and contents to allow further modifications to the migration tables or seed data.<br />
Run this script if you wish to make changes to the table schemas or seed data.

### `yarn migrate`

Populates the local database with the migration files containing the table schemas. <br />
Run this script if you made changes to the table schemas in the migrations folder and want to add it to the local database.

### `yarn seed`

Populates the tables in the local database with the seed data found in the seeds folder. <br />
Run this script if you made changes to the table schemas or the seed data.

### `yarn start`

Runs the server to communicate with the local database, enabling API requests between the app and the local database.

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). <br />
[Heroku](https://www.heroku.com/) was used to host the project. <br />
