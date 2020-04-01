# Infohub 101

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Table of Contents
- [API Endpoints](#API-Endpoints)
- [API Endpoints - GET](#GET)
- [API Endpoints - POST](#POST)
- [API Endpoints - DELETE](#DELETE)

## API Endpoints
Base URL: https://infohub101.herokuapp.com
|Method|Route                           |Description              |
|------|--------------------------------|-------------------------|
|GET   |/api/auth/userdatabase          |GET All User database    |
|GET   |/api/auth/apidatabase           |GET All API database     |
|GET   |/api/auth/userdatabase/:id/api  |GET User Posts By ID     |
|POST  |/api/auth/register              |POST Register new users  |
|POST  |/api/auth/login                 |POST Grants user access  |
|POST  |/api/auth/apidatabase           |POST New API             |
|DELETE|/api/auth/userdatabase/:id      |DELETE API Posts By  ID  |


## GET
## GET User Database Endpoint
```js
GET /api/auth/userdatabase
```
### Expected Header: Authorization Token
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg1NTQxOTg1LCJleHAiOjE1ODU1NDU1ODV9.JQBojlTtPB96MqvYndC5ZZU2XK2W_tspRJl8aQPuVhw"
}
```
### Expected Response
```js
[
    {
        "id": 1,
        "username": "test_user",
        "password": "$2a$08$LVn2sC3KTl7V.GL00OBbA.a8BK97cwKtu7Yr2o6iehwOEp.1/MOSO",
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@gmail.com"
    },
    {
        "id": 2,
        "username": "admin1",
        "password": "$2a$08$RBqNJu4PV5Q9euVnww49dOP6RG1pszJc7VsffY3W3agWuRzkOwjue",
        "first_name": "hello",
        "last_name": "hello",
        "email": "test@test.com"
    }
]
```

## GET API Database Endpoint
```js
GET /api/auth/apidatabase
```
### Expected Header: Authorization Token
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg1NTQxOTg1LCJleHAiOjE1ODU1NDU1ODV9.JQBojlTtPB96MqvYndC5ZZU2XK2W_tspRJl8aQPuVhw"
}
```
### Expected Response
```js
[
    {
        "id": 1,
        "url": "https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95"
    },
    {
        "id": 2,
        "url": "https://newsapi.org/v2/sources?language=en&country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95"
    }
]
```

## GET User Posts By ID Endpoint
```js
GET /api/auth/userdatabase/:id/api 
```
### Expected Header: Authorization Token
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg1NTQxOTg1LCJleHAiOjE1ODU1NDU1ODV9.JQBojlTtPB96MqvYndC5ZZU2XK2W_tspRJl8aQPuVhw"
}
```
### Expected Response
```js
[
    {
        "id": 1,
        "user_id": 1,
        "url": "https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95",
        "created_date": "2020-04-01 01:13:13"
    }
]
```

## POST
## POST Register Endpoint
```js
POST /api/auth/register
```
### Expected Body
```js
{
  "username": "new_user",
  "password": "password",
  "first_name": "John",
  "last_name": "Doe",
  "email": "JohnDoe@gmail.com"
}
```

## POST Login Endpoint
```js
POST /api/auth/login
```
### Expected Body
```js
{
  "username": "user",
  "password": "password"
}
```
### Expected Response
```js
{
    "hello": "username",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg1NTQxOTg1LCJleHAiOjE1ODU1NDU1ODV9.JQBojlTtPB96MqvYndC5ZZU2XK2W_tspRJl8aQPuVhw"
}
```

## POST API Endpoint
```js
POST /api/auth/apidatabase/
```
### Expected Header: Authorization Token
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg1NTQxOTg1LCJleHAiOjE1ODU1NDU1ODV9.JQBojlTtPB96MqvYndC5ZZU2XK2W_tspRJl8aQPuVhw"
}
```
### Expected Body
```js
{
  "user_id": 1,
  "title": "title",
  "img": "http://image.google.com",
  "url": "http://www.abc.com"
}
```

### Expected Response
```js
{
  "id": 1,
  "title": "title",
  "img": "http://image.google.com",
	"url": "http://www.abc.com"
}
```

## DELETE 
## DELETE API Endpoint
```js
DELETE /api/auth/apidatabase/
```
### Expected Header: Authorization Token
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTg1NTQxOTg1LCJleHAiOjE1ODU1NDU1ODV9.JQBojlTtPB96MqvYndC5ZZU2XK2W_tspRJl8aQPuVhw"
}
```
### Expected Response
```js
{
    "success": "API deleted",
    "id": 5
}
```