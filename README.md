# [TwitterX](https://twitter-frontend-utkarsh-gupta.netlify.app)

## Description

**Introducing TwitterX:** a lively social app highlighting my full-stack abilities. Users enjoy easy sign-up, personalized profiles, and creating tweets with images. They can follow, like, and comment, boosting interaction. The timeline shares updates from followed accounts. Dark mode improves usability, while the activity feed keeps users informed. Built with React, Node.js, Express, and MongoDB, TwitterX demonstrates my knack for crafting strong user-focused apps. Join [TwitterX](https://twitter-frontend-utkarsh-gupta.netlify.app) to see how I bring together frontend and backend expertise in this internal project.

## Project Objectives

1. **User Registration / Authentication** :

   - Simply the application will take **emailId** and **password** during the SignUp / SignIn.
   - **Email Id** should be **unique** and if not , it will not be registred.

2. **User Profile** :

   - Enable users to create/edit their own profile.
   - Profile page will consists of
     - User's previous tweets (**POSTS**)
     - Tweets on which user replied to (**REPLIES**)
     - Tweets which were liked by user (**LIKES**)
     - **User Details**
       - Bio (View/Edit)
       - DOB (view/Edit)
       - Email (view/Edit)
       - Name (view/Edit)
       - Location (view/Edit)
       - Change Password (Edit)
       - Followers / Following (View / Edit)
       - Primary Profile Picture (View/Edit)
       - Secondary Profile Picture (View/Edit)

3. **Posting Tweets** :

   - Allow users to compose tweet with content containing either **text** or either **images** or both. Empty should not be allowed to be posted.
   - _Media_ : Composition of tweets should support **multiple image uploads** in a single tweet
   - _Visibility_ : Composed tweet should get **shared** to all it's followers and should be visible to all it's **followers's timeline**
   - _Date_ : Tweet creation timestamp should be visible.

4. **Posted Tweet Actions** :

   - _Follow and Unfollow_ : Allow users to **follow** other users to see their tweets in their timeline, and let them **unfollow** if they choose.
   - _Likes_ : Enable users to **like** (favorite) tweet they find interesting.
   - _Comment Section_ :
     - All the comments that were made in a tweet will get displayed.
     - All of those comments will be **treated as a seperate tweets** which means all comments will have all functionlities that a user gets when posting something.
     - If some user comments on some tweet , that tweet along with the the tweet on which user commented should get displyed on **follower's timeline**.
   - _Reply_ : User should be able to reply in the post as well as **reply** to the comments of other users.

5. **Timeline** :

   - User should be able to see the **activities(New Post/Comment)** of all the accounts whom the user is **following**.
   - For now load all the tweets in **decreasing order of timestamp**.
   - For now load all tweets at once. **No Chunked Loading will be provided as of now**.

6. **Dark Mode Support** : Consider providing a dark mode option for better user experience in low-light environments.

7. **Activity Feed** : Display **user activities** such as new followers, liked tweets, and retweets in a dedicated activity feed.
