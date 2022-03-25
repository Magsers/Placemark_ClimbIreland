# Placemark

Margaret McCarthy
Waterford Institute of Technology
Higher Diploma in Computer Science
Full Stack and Web Development
Assignment 1
 
<p>This is an app developed for climbers in Ireland who want to keep a record of the routes they have climbed in different crags around the country.</p>
<p>Currently there are numerous guidebooks for the different crags such as :</p>
<ul>
<li>The Burren</li>
<li>Fairhead</li>
<li>Glendalough</li>
<li>Donegal</li>
<li>Gap of Dunloe</li>
<li>Dalkey Quarry</li>
<li>Ballykeefe Quarry</li>
<li>and more...</li>
</ul>

<p>With the development of Placemark, climbers can add one of these crags to their profile.  If they add a predefined crag the lat and lng is populated in the form.  They also have the option of adding a new crag which is not defined.  This is because sometimes new crags are opened up by climbers which are not documented in any of the guidebooks.  Climbers can add the route they climbed with the grade, the climber who made the first ascent (optional), the diffiuclty grade, the height and a brief description of the route.  A date is added when they add their route which is a record of the date they completed the route.  The route info is editable so if they need to change anything after they can.</p>
<p>Basic functionality will be achieved with Version 1 where users can sign up, create a user profile, add and delete crags and add, edit and delete routes.  They can also add an image to a crag.  There is already an image displayed for each crag which is an actual image of the crag except there is a default image if it's a new crag.  Then users have the option to add their own crag image also.</p>
<p>An admin account is created to list users and a few analytics of the app and to ensure users can be deleted. </p>
<p>Exhaustive unit testing is carried out throughout the process of development and at the stage of deployment all tests were passing</p>

Project Stages : 

Baseline: 
  Accounts : SignUp and Login Accounts 
  Features : Placemark : Climb Ireland with Crags and Routes 
  API : HAPI Framework 
  Model : Memory model 
  Deployed on localhost 
  GIT : Git Commit

Stage 1 : 
  Accounts : Cookies and authentication added 
  Features : User settings / Lat & Long values for each crag + description field 
  API : Unit Testing 
  Model : JSON Model introduced 
  Deployment : Attempted to deploy to Glitch from GitHub but it timed out each time.
  GIT : Started a Structured READMe

Stage 2 : 
  Accounts : Admin account added.  Admin login is admin@placemark.ie; password : hello;  Allows admin user to view and remove users.  Used a different menu partial.  
  Features : Drop down menu for crags, lat and long auto populates if user chooses predefined crag.  Drop down menu for route grades.  Attempted to order the routes by grade but did not complete this.  Will do so in future releases.
  API : OPen API (Swagger) all working and tested.  
  Model : Mongo Model introduced 
  Deployment : Deployed to Mongo Cloud Atlas.
  GIT : Tagged Release 1, 2 and 3 of Placemark.  This was done at an almost finished stage so there is not much difference between releases barr a few features.  

Stage 3 :
  Accounts : Few analytics displaying on Admin Dashboard.  Overall users, routes and crags.  Attempted to add to this with number of crags per user but found difficulty passing values.  
  Features : Although I had images loading already I added a new feature where images are stored on clouinary a cloud database.  User can add their own image now also.
  API : JWT strategy incorporated into endpoints. 
  Model : 
  Deployment : Deployed to Heroku.
  GIT : Attempted development and feature branch but did not utilise it.  
  


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [Bulma](https://bulma.io/documentation/overview/)
* [JWT](https://jwt.io/)
* [Cloudinary](https://cloudinary.com//)
* [HAPI](https://hapi.dev/module/boom)
* [JOI](https://joi.dev/api/)
* [Heroku](https://heroku.com/)
* [MongoDB-CloudAtlas](https://www.mongodb.com/atlas/database)
* [Eamonn de Leastar](https://github.com/edeleastar)
* [WIT](https://www.wit.ie)

<div id="top"></div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<!-- ABOUT THE PROJECT -->
## About The Project
Welcome to Whereabouts
This is an assignment project at Waterford Institute of Technology (WIT) as an introduction to Full Stack Development in Javascript/Typescript and introduces the student to Full Stack Components & Services. 
* Front End (e.g bulma, handlebars)
* Components (e.g dotenv, uuid)
* Tools (e.g eslint, prettier)
* Back End (e.g. hapi, joi, moongose)
* Infrastructure (e.g. mongo, heroku)
This is the initial core version, Placemark Service V1, of the project. Core features impletemed and selected features and structure added.
### Built With
Below frameworks/libraries that used for the project.
* [Node.js](https://nodejs.org/en/)
* [Hapi.js](https://hapi.dev/)
* [Joi.js](https://github.com/sideway/joi)
* [Handlebars.js](https://handlebarsjs.com/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple example steps. Note the project was developed on a Windows 10 machine in Visual Studio Code.
### Prerequisites
Ensure you have the latest version of 
* Node Js installed [https://nodejs.org/en/](https://nodejs.org/en/)
* Mongo DB installed [https://www.mongodb.com/](https://www.mongodb.com/)
Ensure you have the latest version for example
* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation
To install the application locally you need to do the following:
1. Clone the repo
   ```sh
   git clone https://github.com/ingelsten/fullstack
   ```
2. In the cloned repo folder, to start the project run
   ```sh
   npm init
   ```
3. Install the following packages and components, there is a lot of them! :slightly_smiling_face:
   ```sh
    npm install -D eslint
    npm install -D eslint-config-airbnb-base
    npm install -D eslint-config-prettier
    npm install -D eslint-plugin-import
    npm install -D prettier
   ```
   Continue with 
   ```sh
   npm install @hapi/hapi
   ```
     For views
    ```sh
    npm install @hapi/vision
    npm install handlebars
    ```
    For unique id
    ```sh
    npm install uuid
    ```
    For cookie authentication
    ```sh
    npm install @hapi/cookie
    ```
    For .env file
    ```sh
    npm install dotenv
    ```
    For Joi-Schema
    ```sh
    npm install joi
    ```
    For testing
    ```sh
    npm install -g mocha
    npm install -g chai
    ```
    For mongo db
    ```sh
    npm install mongoose
    ```
    For basic API
    ```sh
    npm install @hapi/boom
    npm install -D axios
    ```
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- USAGE EXAMPLES -->
## Usage
The scope of the project is a PlaceMark, A point of interest, or POI, is a specific point location that someone may find useful or interesting. In this project, the PlaceMark is a work locations(e.g. Whereabouts) for the utility sector. The structure is as follows: A user can greate Wherabouts, the whereabout then contains individual jobs, the job has an id, latitude, longitude and description. A category can be assigned to the Whereabout, which allows the user to group it by activity type i.e. Civils, Electrical etc.
***Note this version only allows for manual input of data.***
_You can demo the project by visiting [Whereabouts](https://serene-waters-50231.herokuapp.com/)_
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- LICENSE -->
## License
Distributed under the MIT License. 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- CONTACT -->
## Contact
Anders Ingelsten - 20095402@wit.ie
Project Link: [https://github.com/ingelsten/fullstack](https://github.com/ingelsten/fullstack)
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [Bulma](https://bulma.io/documentation/overview/)
* [Heroku](https://heroku.com/)
* [MongoDB-CloudAtlas](https://www.mongodb.com/atlas/database)
* [Eamonn de Leastar](https://github.com/edeleastar)
* [WIT](https://www.wit.ie)
* [FieldView](https://www.priority1.uk.net/FieldView/Default.aspx)
* [SoapUI](https://www.soapui.org/)
<p align="right">(<a href="#top">back to top</a>)</p>