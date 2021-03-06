# Harmony Prescription Manager
Harmony is a web application for tracking prescription medications. It's built with Ruby on Rails with a JavaScript/jQuery front end. <a href="https://rxnav.nlm.nih.gov/APIsOverview.html" target="_blank">National Institutes of Health (NIH) APIs</a> are used to verify drug names and determine interactions.

<a href="http://harmony-rx-manager.herokuapp.com/" target='_blank'>Demo Harmony on Heroku</a>

Play account with pre-seeded data:
* Username: <span>johndoe</span>@gmail.com
* Password: password1

##Features
Users can:
* View their daily medication schedule.
* Receive notifications about potential drug interactions.
* Be alerted to prescriptions that are expiring soon.
* Review active and inactive prescriptions.

##Local Setup Instructions
* Clone repo to your machine
* Run `bundle install`
* Run `rake db:migrate`
* Start a localhost server with `rails s`

##Collaborators
Harmony was created by Doug Tebay, Leon Harary, Greg Marquet, and me, Erik Aylward, at Flatiron School in NYC. This particular repo is my personal copy of the project.
