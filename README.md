# Infohub 101

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Table of Contents
[API Endpoints](#API-Endpoints)

## API Endpoints
Base URL: https://infohub101.herokuapp.com
|Method|Route             |Description        |
|------|------------------|-------------------|
|POST  |/api/auth/register|	Register new users|
|POST  |/api/auth/login   |	Grants user access|

## Register Endpoint
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

## Login Endpoint
```js
POST /api/auth/login
```
### Expected Body
```js
{
  "username": "test_user",
  "password": "password"
}
```
### Expected Response
```js
{
    "message": "Welcome test_user!",
    "token": "eyJhbGciOiJIUzI1NuIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsZXhpcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTgzMjA3NTI0LCJleHAiOjE1ODMyMTExMjR9.qUO29mM1WCUnECC2SzYBcWpWHief9wqQVQlMsm3VtZ0"
}
```
