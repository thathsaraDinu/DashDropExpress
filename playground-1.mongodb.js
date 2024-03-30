/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("test");

// Insert a few documents into the sales collection.
db.getCollection("users").insertMany([
  {
    fullName: "Monro Ruffy",
    phoneNumber: "6786911902",
    email: "mruffy0@prnewswire.com",
    address: "7 Dixon Lane",
    usertype: "Driver",
    password: "Monro000",
  },
  {
    fullName: "Quill Hug",
    phoneNumber: "4614154210",
    email: "qhug1@ft.com",
    address: "34 Manley Circle",
    usertype: "Driver",
    password: "Quill101",
  },
  {
    fullName: "Joly Costan",
    phoneNumber: "4594981497",
    email: "jcostan2@auda.org.au",
    address: "141 Cascade Drive",
    usertype: "Driver",
    password: "Cost1993",
  },
  {
    fullName: "Dione Dodding",
    phoneNumber: "2484923577",
    email: "ddodding3@imdb.com",
    address: "5 Sunnyside Lane",
    usertype: "Customer",
    password: "Dione999",
  },
  {
    fullName: "August Pickles",
    phoneNumber: "8862781588",
    email: "apickles4@alexa.com",
    address: "44827 Mallard Lane",
    usertype: "Customer",
    password: "Pickles000",
  },
]);

// Run a find command to view items sold on April 4th, 2014.

// Print a message to the output window.

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
