# README
Description
Groups is a single page application built using react front end and ruby on rails backend that allows people collaborate on group trips. Users can create/join groups, chat with group members, share pictures and create events.

Requirements
Ruby 2.7.4
NodeJS (v16), and npm
Heroku CLI
Postgresql
Setup
Start by cloning (not forking) the project template repository and removing the remote:

$ git clone git@github.com:learn-co-curriculum/project-template-react-rails-api.git your-project-name
$ cd your-project-name
$ git remote rm origin
Then, create a new remote repository on GitHub. Head to github.com and click the + icon in the top-right corner and follow the steps to create a new repository. Important: don't check any of the options such as 'Add a README file', 'Add a .gitignore file', etc — since you're importing an existing repository, creating any of those files on GitHub will cause issues.

Finally, connect the GitHub remote repository to your local repository and push up your code:

$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
When you're ready to start building your project, run:

bundle install
rails db:create
npm install --prefix client
You can use the following commands to run the application:

rails s: run the backend on [http://localhost:3001]
npm start --prefix client: run the frontend on [http://localhost:4000]
Make sure to also update this README to include documentation about your project. Here's a list of some awesome readmes for inspiration.

Deploying
This application has all the starter code needed to help you deploy your application to Heroku.

To deploy, first log in to your Heroku account using the Heroku CLI:

heroku login
Create the new Heroku app:

heroku create my-app-name
Add the buildpacks for Heroku to build the React app on Node and run the Rails app on Ruby:

heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
To deploy, commit your code and push the changes to Heroku:

git add .
git commit -m 'Commit message'
git push heroku main
Note: depending on your Git configuration, your default branch might be named master or main. You can verify which by running git branch --show-current. If it's master, you'll need to run git push heroku master instead.

Any time you have changes to deploy, just make sure your changes are committed on the main branch of your repo, and push those changes to Heroku to deploy them.

You can view your deployed app with:

heroku open