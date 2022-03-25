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

