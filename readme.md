# Bond Movie Api
This is a CRUD Api that runs on Express.js
---
## Table of contents
  - [Getting started](#getting-started)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
    - [Movies](#movies)
    - [Keys](#keys)
---
## Getting started
First, install needed dependencies and run the development server:
```
npm install
npm run dev
```
open http://localhost:5050 in your browser or in Postman to use the api
---
## Usage
### Api key
You need an api key to access the endpoints, the key needs to be appended to every api call
> http://localhost:5050/movies?apiKey=ag1683558446589

Instructions on how to generate an api key are found [here](#keys)
### Responses and errors
All responses are written in JSON and can include a message, data or both. All errors come with a human readable message for easy troubleshooting.
#### Example of a response
Adding a new movie
```JSON
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
---
## Endpoints
### Movies
> **GET** /movies

List all movies
#### Example url and expected output:
`http://localhost:5050/movies?apiKey=oc1683558465457`
```JSON
[
    {
        "Title": "Becoming Bond",
        "Year": "2017",
...
```
---
> **GET** /movies/:id

List a movie

*Params:* movie id
#### Example url and expected output:
`http://localhost:5050/movies/tt6110504?apiKey=oc1683558465457`
```JSON
{
    "Title": "Becoming Bond",
    "Year": "2017",
...
```
---
> **POST** /movies

Add a new movie

*Body:* movie information
#### Example url and expected output:
```JSON
// http://localhost:5050/movies?apiKey=oc1683558465457
// AND BODY
{
    "movie": {
        "Title": "James Bond: Hello world",
        "Year": "2023",
        "Released": "8 May 2023",
        "Genre":  "Action, Adventure"
    }
}
```
```JSON
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

*Params:* movie id
*Body:* new movie information
#### Example url and expected output:
```JSON
// http://localhost:5050/movies/tt6110504?apiKey=oc1683558465457
// AND BODY
{
    "movie": {
        "Title": "James Bond: Hello world"
    }
}
```
```JSON
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

*Params:* movie id
#### Example url and expected output:
`http://localhost:5050/movies/tt6110504?apiKey=oc1683558465457`
```JSON
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
#### Example url and expected output:
`http://localhost:5050/keys?apiKey=oc1683558465457`
```JSON
{
    "message": "Successfully generated new api key",
    "apiKey": "sx1683566791256"
}
```
---
> **DELETE** /keys/:id

Delete an api key

*Params:* api key
#### Example url and expected output:
`http://localhost:5050/keys/sx1683566791256?apiKey=oc1683558465457`
```JSON
{
    "message": "Api key successfully deleted",
    "apiKey": "sx1683566791256"
}
```
---