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
