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
    fullName: "Jackqueline Losselyong",
    phoneNumber: "7388864755",
    email: "jlosselyong0@people.com.cn",
    address: "6123 Emmet Alley",
    usertype: "Admin",
    password: "vA7ct@k/HT|&",
  },
  {
    fullName: "Reece Corrao",
    phoneNumber: "5194114823",
    email: "rcorrao1@tinyurl.com",
    address: "51062 Sachs Plaza",
    usertype: "Driver",
    password: "hC9zlei,.FJ`",
  },
  {
    fullName: "Latashia Faudrie",
    phoneNumber: "4326525157",
    email: "lfaudrie2@cbsnews.com",
    address: "2770 Blackbird Crossing",
    usertype: "Admin",
    password: "bC2GRJpaS$S",
  },
  {
    fullName: "Martie Eldred",
    phoneNumber: "2573161880",
    email: "meldred3@tripadvisor.com",
    address: "6 Northridge Alley",
    usertype: "Admin",
    password: "pN7%W,mhS",
  },
  {
    fullName: "Wyatan Eddoes",
    phoneNumber: "6147113563",
    email: "weddoes4@bloglovin.com",
    address: "7 Hoepker Drive",
    usertype: "Admin",
    password: "iJ7vb3(G",
  },
  {
    fullName: "Miriam MacGown",
    phoneNumber: "4036697824",
    email: "mmacgown5@etsy.com",
    address: "9193 Nancy Junction",
    usertype: "Customer",
    password: "hK6`@NxnJ#lx",
  },
  {
    fullName: "Laina Cordle",
    phoneNumber: "7442548431",
    email: "lcordle6@tiny.cc",
    address: "7156 Riverside Center",
    usertype: "Driver",
    password: "pJ74CW",
  },
  {
    fullName: "Hi Oram",
    phoneNumber: "1203619259",
    email: "horam7@hatena.ne.jp",
    address: "675 Starling Crossing",
    usertype: "Customer",
    password: 'cT7"(\\bz8_2U',
  },
  {
    fullName: "Lavena Aldred",
    phoneNumber: "7164207425",
    email: "laldred8@google.com.au",
    address: "65146 Loomis Park",
    usertype: "Admin",
    password: "aS0QtZ(fvX9s",
  },
  {
    fullName: "Andria Wolfe",
    phoneNumber: "5809464567",
    email: "awolfe9@bloomberg.com",
    address: "46 Superior Court",
    usertype: "Customer",
    password: "jM4()gYg8",
  },
]);

// Run a find command to view items sold on April 4th, 2014.

// Print a message to the output window.

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
