# The Showshank Redemption
DBMS Project

Tutorial :- [Youtube video](https://www.youtube.com/watch?v=fPuLnzSjPLE&t=2384s&ab_channel=LamaDev)

Tinder Card component :- [CodeSandbox Link](https://codesandbox.io/s/github/3DJakob/react-tinder-card-demo/tree/master/?file=/src/App.css)

## How to start the website

Make a new folder for the DBMS project.

```sh
git clone https://github.com/riyasr21/TheShowshankRedemption.git


```
Navigate to the backend folder in TheShowshankRedemption and the backend is then started using
```sh
npm install
npm start


```

After starting the backend, start the frontend by navigating to the client folder in the TheShowshankRedemption 
```sh
npm install
npm start


```
   
Open up [http://localhost:3000](http://localhost:3000) to go to the website.

# WHAT OUR WEBSITE DOES ? 

1. Extracts movies or shows from an existing database based on user preferences.
2. Creation of user profiles by providing the feature of sign up/ log in into the website
3. Users have the functionality of creating and updating a table of their favourites. 


## ER Model
![ERModel](https://user-images.githubusercontent.com/89318501/204541187-f11f71c2-ca60-4f44-b6fe-9b672e14bda6.png)




## Database design

We had two tables, titles and credits, for three platforms (Hotstar, Netflix and Prime) each. Our database also consisted of a user table (descripiton of the table attached below) which had the details of every user that signed up on our website. For every user that signed up, we created a new table using their email id, which contained all the movies added to the favourites section added by the respective user.
1. titlesH, titlesP, titlesN
2. creditsH, creditsP, creditsN
3. user
4. riyagmailcom (if the user that signed up had the email id of riya@gmail.com)

For every user, as soon as they like a movie, a trigger (BEFORE INSERT TRIGGER) would fetch the details (runtime, release_year and title) from the union of all the titles tables mentioned above and insert the whole record in the user's table.

![image](https://user-images.githubusercontent.com/89318501/204544816-e76e5d9e-299e-4ce8-8aff-a07053442d05.png)
![image](https://user-images.githubusercontent.com/89318501/204544880-27345cc6-f128-4c58-8d36-c6a5b00f26be.png)
![image](https://user-images.githubusercontent.com/89318501/204544958-0b3b82f9-70dd-4e1f-8e50-eb22b6ce1bad.png)







## Home Page
![image](https://user-images.githubusercontent.com/89318501/204545283-f558b817-9bbd-4263-adae-09c82942c8a0.png)


### Thank you!
