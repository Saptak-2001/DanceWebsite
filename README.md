# DanceWebsite
This is a website created for Dance Academy.

## Frontend
- HTML
- CSS
- PUG

## Backend
- Node.js
- Mongo DB

## Installation
- First **Visual Studio Code** is to be installed into the local machine as a code editor. [Install it from here](https://code.visualstudio.com/)
- Second install **Node.js** into your local machine. [Install it from here](https://nodejs.org/en/download)
- Next install **Mongo DB** as a database into your local machine. [Install it from here](https://www.mongodb.com/try/download/community)
- Then install **Mongo Shell** into your system. [Install it from here](https://www.mongodb.com/try/download/shell)

## Environment Variables
- To run **Mongo DB** you will need to add these two file paths to your environment variables of your local machine:
`File Path of Mongod Server`
`File Path of Mongosh`
- These two files reside at the storage where you install Mongo DB and Mongo Shell into your machine.

## Screenshots

- Go to properties of your PC
![Properties](https://github.com/Saptak-2001/DanceWebsite/blob/master/Screenshots/Properties.png?raw=true)
- Go to Advanced System Settings
![Advanced System Settings](https://github.com/Saptak-2001/DanceWebsite/blob/master/Screenshots/Advanced%20System%20Settings.png?raw=true)
- Click Environment Variables
![Environment Variables](https://github.com/Saptak-2001/DanceWebsite/blob/master/Screenshots/Environment%20Variables.png?raw=true)
- Select the **path** option in user variables and then click **Edit**
![Path in User Variables](https://github.com/Saptak-2001/DanceWebsite/blob/master/Screenshots/Path%20for%20User%20Variables.png?raw=true)
- Click on the **New** and paste the file path of **mongod** file there and then click **Ok**
![New in User Variables](https://github.com/Saptak-2001/DanceWebsite/blob/master/Screenshots/New%20in%20User%20Variables.png?raw=true)
- Next select **path** option in system variables and then click **Edit**
![Path for System Variables](https://github.com/Saptak-2001/DanceWebsite/blob/master/Screenshots/Path%20for%20System%20Variables.png?raw=true)
- Click the **New** option and paste the file path of **mongosh** file there and then click **Ok**
![New in System Variables](https://github.com/Saptak-2001/DanceWebsite/blob/master/Screenshots/New%20in%20System%20Variables.png?raw=true)

## How to run Mongo DB and NPM Packages

-In your Visual Studio Code terminal, run this command to install all package dependencies of this project:
```bash
  npm install
```
- Now open new two terminals in Visual Studio Code, then run this command in one terminal:
```bash
  mongod
```
- And in another terminal run this:
```bash
  mongosh
```
## Authors

- [Saptak Sarkar](https://github.com/Saptak-2001)
