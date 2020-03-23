## Chiketto

 Chiketto is a website application created to make it easy for individuals or groups toorder a Train ticketThis application is still in development stage and not fully functional


## Table of Contents
> * [Getting Started](#getting-started)
>   * [Prerequisites](#prerequisites)
>   * [Installation](#installation)
>   * [Server Setup](#server-setup)
> * [Screenshot](#screenshot)
> * [Built With](#built-with)
> * [Author](#author)


## Getting Started
Before starting to install the project, there're some things that need to be done first.
### Prerequisites
Make sure all of these are properly installed in your system.
| Plugin | README |
| ------ | ------ |
| Git | [Windows](https://git-scm.com/download/win) / [Mac](https://git-scm.com/download/mac) / [Linux](https://git-scm.com/download/linux) |
| Node.js | [Link](https://nodejs.org/en/download/) |
| React.js | [Getting Started](https://reactjs.org/docs/create-a-new-react-app.html) |
| MySQL | [Link](https://www.mysql.com/) |

### Installation
First, clone this repository into your system.
```sh
git clone https://github.com/aznaqCre18/chiketto.git
```
Then, install all the packages that described in package.json of both client and server directories.
```sh
$ npm install
```

### Server Setup
For the server setup, first, make sure your MySQL services is running fine. In server directory, you'll find config.json inside config folder. Open and edit the development configuration to match your database setup.
```sh
{
  "development": {
    "username": "root",
    "password": null,
    "database": "tugas_akhir",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
  ...
}
```

After completing the database configuration setup, migrate all the required tables.
``` sh
    npm run build
```

And for the last step, running the server
``` sh
    npm start
```

## Screenshot

  ### Landing Page
   ![Desain tanpa judul](https://user-images.githubusercontent.com/59505349/77279947-a472dd80-6cf5-11ea-9d45-6e58ae3ef474.png)
    
  ### User Page
   ![Desain tanpa judul (2)](https://user-images.githubusercontent.com/59505349/77280156-27943380-6cf6-11ea-8b4d-c8d2d596ae8a.png)
   ![Desain tanpa judul (3)](https://user-images.githubusercontent.com/59505349/77280271-717d1980-6cf6-11ea-87f3-6ad9d5b47615.png)
   ![Desain tanpa judul (4)](https://user-images.githubusercontent.com/59505349/77280314-8d80bb00-6cf6-11ea-878f-950783a84e7d.png)

  ### Admin Page
   ![Desain tanpa judul (5)](https://user-images.githubusercontent.com/59505349/77280822-f6b4fe00-6cf7-11ea-8ce5-3b04e2658057.png)
   ![Desain tanpa judul (6)](https://user-images.githubusercontent.com/59505349/77281019-88247000-6cf8-11ea-9598-d616d3f177a9.png)
  
 ## Built With
 * [React.js](https://reactjs.org/) - Front-end
 * [Express JS](https://expressjs.com/) - Back-end
 * [MySQL](https://www.mysql.com/) - Database
 
 ## Author
  #### Aziz Nur Abdul Qodir - [aznaqCre18](https://github.com/aznaqCre18)
