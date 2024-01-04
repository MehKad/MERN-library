# MERN Library

This is a web server and ui, using react for the ui, and expressjs for the server part, it lets you add books, view your books stored in the database, edit them, as well as delete them.

## Table of Contents

- [Elements](#elements)
- [Installation](#installation)
- [Usage](#usage)

## Elements

Elements used in this project are :

- reactjs
- axios
- react-router-dom
- expressjs
- cors
- mongoose
- nodemon

## Installation

After cloning this repository, go in the server/app.js and modify the following with your own :

```bash
mongoose.connect(
  "mongodb+srv://mehkadiri:azerty@library.axc9gzm.mongodb.net/?retryWrites=true&w=majority"
);
```

Then go in the terminal and run this commande :

```bash
$  npm i
```

## Usage

#### To run this project, navigate to the /server and run :

- if you have nodemon module installed globally :

```bash
$  nodemon app.js
```

- else, run the following :

```bash
$  node app.js
```

#### Then run the following :

```bash
$  npm starts
```
