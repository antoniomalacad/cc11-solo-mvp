# Coffee Picker

This was created during my time as a student at Code Chrysalis.

Coffee Picker is an app that helps the user select a coffee based on a set of questions.

To use this app: https://cc11-solo-mvp.herokuapp.com/

To modify its implementation or check under the hood, follow the installation below.

## Installation

1. To get started, clone the repo to a folder of your choice.

```
git clone https://github.com/antoniomalacad/cc11-solo-mvp.git
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

### `yarn start`

Runs the backend server in [http://localhost:9000](http://localhost:9000).

### `yarn hack`

Runs client server in [http://localhost:3000](http://localhost:3000).

### `yarn rollback`

Clears the local database.

### `yarn migrate`

Populates the local database with the migration files.

### `yarn seed`

Populates the tables in the local database with the seed data found in the seeds folder.

### `yarn build`

Builds the app for production to the `build` folder.
