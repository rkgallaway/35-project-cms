![cf](http://i.imgur.com/7v5ASc8.png) CMS Project
=================================================

## Overview
At the core of every web site is content. Given that, the most basic need in the online world is a way to **manage** that content. Typically separate from the presentation (the actual website), most websites have a back-end or administrative interface that allows for the creation, curation, and management of the content that ultimately gets rendered to the user.

In this project, you will be tasked with creating a "CMS" or Content Management System, which will allow users to:

* View a list of all data types (models)
* View a list of all records in each table
* Add a new record to any table
* Delete a record from any table
* Edit or Update existing data records

## Requirements
* Create an application that will:
  * Require a valid user login to see anything
  * Give the user a list of all data models
  * When selecting a model, a list of all records
  * When selecting a record, a way to edit or delete the record
  * Add a new record to the model
* Implement the following RBAC rules:
    * Logged In Users with 'read' permissions can see the list of data models and records
    * Logged In Users with 'delete' permissions can delete records
    * Logged In Users with 'update' permissions can edit existing records
    * Logged In Users with 'create' permissions can create new records

* Use the tools you've built in react to construct an amazing application.
* Make this easy and intuitive for a user to use
* The User Interface and Experience are completely up to you

## Notes
* The system is based on our API Server as built and refined in this course.
* Use the supplied API server as the back-end, which uses a Mongo Database and supports full authentication.
* For testing purposes, there is a deployed server at https://javascript-401-api.herokuapp.com
* The api server supports the following routes:
  * **POST** `/roles` - Accepts a JSON object with `role`, `capabilities` (array) to create a role.
  * **POST** `/signup` - Accepts a JSON object with `username`, `password` to create an account
  * **POST** `/signin` - Signin with either Basic Auth or Bearer Auth, returning a JWT Token
  * **GET** `/api/v1/models` - A list of all data models
  * **GET** `/api/v1/model` - A list of all records in a given **model**
  * **GET** `/api/v1/model/schema` - The JSON Schema for a given **model**
  * **GET** `/api/v1/model/id` - A single record, from a **model**, with the **id**
  * **DELETE** `/api/v1/model/id` - Delete a single record, from a **model**, with the **id**
  * **PUT** `/api/v1/model/id` - Replace single record, from a **model**, with the **id**
  * **PATCH** `/api/v1/model/id` - Tactically update a single record, from a **model**, with the **id**

* The deployed server has the following user accounts (username:password) that you can use to login as a user with varying permissions.
* If you are using your own server, you'll need to create accounts and roles manually. (Make sure that your roles match the ENUM setup in the user model)
  * admin:ADMIN (create, read, update, delete)
  * editor:EDITOR (create, read, update)
  * user:USER (read)

## Submission Instructions
* Deploy your front-end (the React application) to AWS
  * Preferably, use the automated deployment process to connect a Cloud Formation stack
* Deploy your back-end (the API server) to Heroku with a mongo database
* Complete the README.md with complete documentation, UML, and user notes.
