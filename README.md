## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## End Points

```bash 

# singup

you need to provide a json composed of a username, email and password. After that, 
your username will be created and saved in a database.

{
  "username": "myUsername", # username must be a string of a min lenght of 3 carachters
  "email": "myemail@email.com", # you need to provide a valid format of email
  "password": "mypassword1234" # password must be a string of a min lenght of 8 carachters 
}

```

``` bash

# login

after create your username, you shall to login with a json composed of your username 
and your password, that action returns a token to use as a Bearer Token to provide access 
to protected end points.

{
  "username": "myUsername",
  "password": "mypassword1234"
  
}

```

```bash

# movies

it is an unprotected end point, you can access without an autentication token.

```

```bash 

# movies/create

this end point allows you to create a movie entry and save this in a database. 
You need to provide a json composed of title, director, genre, rating and release year. 
This end point returns your entry after save it. 

{
  "title": "myMovie" # title must be a string of a min lenght of 3 carachters
  "director": "director" # director must a string be of a min lenght of 3 carachters
  "genre": "genre" # genre must be a string of a min lenght of 3 carachters
  "rating": 10 # rating must be a number between 1 and 10
  "releaseYear": 2022 #release year must be a number between 1900 and 2022
}









