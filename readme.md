# Bond Movie Api
This is a crud api that runs on express.js
## Table of contents
  - [Getting started](#getting-started)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
    - [Movies](#movies)
    - [Keys](#keys)
## Getting started
First, install needed dependencies and run the development server:
```
npm install
npm run dev
```
Open http://localhost:5050 in your browser or in Postman to use the api
## Usage
### Api key
You need an api key to access the endpoints, the key needs to be appended as a query to every call
> eg. http://localhost:5050/movies?apiKey=ag1683558446589

Instructions on how to generate an api key are found [here](#keys)
### Responses and errors
All responses are written in JSON and can include a message, data or both. All errors come with a human readable message for easy troubleshooting
#### Example of a response
Adding a new movie
```
{
    "message": "James Bond: Hello world was successfully added",
    "movie": {
        "id": "2",
        "Title": "James Bond: Hello world",
        "Year": "2023",
        "Released": "8 May 2023",
        "Genre": "Action, Adventure"
    }
}
```
Adding a new movie without a required value
```
{
    "message": "Missing required information",
    "missingInformation": [
        "Genre"
    ]
}
```
## Endpoints
### Movies
> **GET** /movies

List all movies
#### Example request and expected response:
`http://localhost:5050/movies?apiKey=oc1683558465457`
```
[
    {
        "Title": "Becoming Bond",
        "Year": "2017",
...
```
---
> **GET** /movies/:id

List a movie

*Parameter:* movie id
#### Example request and expected response:
`http://localhost:5050/movies/tt6110504?apiKey=oc1683558465457`
```
{
    "Title": "Becoming Bond",
    "Year": "2017",
...
```
---
> **POST** /movies

Add a new movie

*Body:* movie information
#### Example request and expected response:
```
http://localhost:5050/movies?apiKey=oc1683558465457

AND BODY

{
    "movie": {
        "Title": "James Bond: Hello world",
        "Year": "2023",
        "Released": "8 May 2023",
        "Genre":  "Action, Adventure"
    }
}
```
```
{
    "message": "James Bond: Hello world was successfully added",
    "movie": {
        "id": "1",
        "Title": "James Bond: Hello world",
        "Year": "2023",
        "Released": "8 May 2023",
        "Genre": "Action, Adventure"
    }
}
```
---
> **PUT** /movies/:id

Update a movie

*Parameter:* movie id
*Body:* new movie information
#### Example request and expected response:
```
http://localhost:5050/movies/tt6110504?apiKey=oc1683558465457

AND BODY

{
    "movie": {
        "Title": "James Bond: Hello world"
    }
}
```
```
{
    "message": "The movie was successfully updated",
    "movie": {
        "Title": "James Bond: Hello world",
        "Year": "2017",
...
```
---
> **DELETE** /movies/:id

Delete a movie

*Parameter:* movie id
#### Example request and expected response:
`http://localhost:5050/movies/tt6110504?apiKey=oc1683558465457`
```
{
    "message": "The movie was successfully deleted",
    "movie": {
        "Title": "Becoming Bond",
        "Year": "2017",
...
```
---
### Keys
> **POST** /keys

Add an api key
#### Example request and expected response:
`http://localhost:5050/keys?apiKey=oc1683558465457`
```
{
    "message": "Successfully generated new api key",
    "apiKey": "sx1683566791256"
}
```
---
> **DELETE** /keys/:id

Delete an api key

*Parameter:* api key
#### Example request and expected response:
`http://localhost:5050/keys/sx1683566791256?apiKey=oc1683558465457`
```
{
    "message": "Api key successfully deleted",
    "apiKey": "sx1683566791256"
}
```
