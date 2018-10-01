## Lab Assignment: Your Personal Blog!

### REQUIRED:

- ~Create a database named blog~

- ~Create the following tables~
    - ~Blogs~
        - ~id~
        - ~title~
        - ~content~
        - ~_created~

    - ~Authors~
        - ~id~
        - ~name~
        - ~email~
        - ~_created~

    - ~Tags~
        - ~id~
        - ~name~
        - ~_created~

    - ~BlogTags~
        - ~blogid~
        - ~tagid~
        - ~_created~

- ~Create a stored procedure named spBlogTags to pull back the tag names for a blog~
    - ~Paramater: blogid~
        - ~Hint: You only need to join BlogTags and Tags~


- ~Clone the create-react-boilerplate~
    - ~https://github.com/covalence-io/covalence-react-boilerplate~ <!-- Had to go to the 'db' branch to get proper boilerplate... -->

- ~Once you've cloned the repository:~ <!-- I just downloaded the .zip to avoid all this mess... -->
    - ~Important: If you don't feel comfortable with the following instructions, please reach out to someone.~
    - ~The purpose of these instructions is to disconnect git and reconnect it to your own git repo that is unrelated to the boilerplate repo.~
        - ~cd into the cloned folder~
        - ~Run: git checkout db~
        - ~Run: rm -rf .git~
        - ~Run: git init~ 

    - ~Run the server~
        - ~Run: npm install~
        - ~Run: npm run bulid:server~ <!-- Command is misspelled, should be 'build' instead of 'bulid' -->
        - ~Run: npm run dev~
        - ~Go to http://localhost:3000 and make sure that the app is running~

    - Create the React front end:
        - ~Create a component to input blogs~
        - ~Create a component to display an individual blog~

        <!-- 
            Wrap completed tasks in ~ to strike them out  
            ex. (  - ~ Completed Task ~  )
            -->