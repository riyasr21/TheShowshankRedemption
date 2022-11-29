# The Showshank Redemption
DBMS Project
Tutorial :- [Youtube video](https://www.youtube.com/watch?v=fPuLnzSjPLE&t=2384s&ab_channel=LamaDev)

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
npm run


```
   
Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

# WHAT OUR WEBSITE DOES ? 

1. Extracts movies or shows from an existing database based on user preferences.
2. Creation of user profiles by providing the feature of sign up/ log in into the website
3. Users have the functionality of creating and updating a table of their favourites. 


## ER Model
![ERModel](https://user-images.githubusercontent.com/89318501/204541187-f11f71c2-ca60-4f44-b6fe-9b672e14bda6.png)


<details>
<summary>Read more</summary>

- The SCSS files are automatically watched and compiled when changes are made in any scss files within the project.

- When sending it to the server, the compiled CSS files are sent along with the SCSS files(Obsolete: In the final site, we'll set up a script that removes all scss files from the project since after compiling it, there's no need for scss files)

</details>


## Commit naming conventions

<details>
<summary>Read more</summary>

For now, we'll use just these:

- `fix:` - fixes a bug
- `feat:` - new feature
- `chore:` - other changes and cleanups

Example:

- `fix: fixed navigation bar`
- `feat: added new sign in feature`
- `chore: Removed all comments and print statements`

If theres a specific file thats changed or a specific sub category of the project has changes, you can specify it like so:

- `fix(NavBar): fixed overflowing image in nav bar`
- `feat(SignIn): Added user verification before sign In`

These are just good practices and it'll be easy to revert back if some new merge is breaking the project.

</details>


## Pull requests

<details>
<summary>Read more</summary>

Each contributing member should make a separate branch for completing their tasks.
You can follow these commands to do so:

- `git checkout -b <branch name>`
- `git add .`
- `git commit -m "<Meaningful message following the convention>"`
- `git push origin <branch name>`

Then in the github repo, you can create a new pull request under pull requests tab.

To keep your branch up-to-date with the master branch, you can use the following commands:

- `git merge main`
- `git push`

<em>Note: Make sure there are no changes in your branch before merging. If there are any, you'll lose the progress.</em>

</details>



## New page

<details>
<summary>Read more</summary>

This one's quite tricky. I've setup `demo.js` and `demo.scss` in project.

When you want to make a new page, you can create a new file in the appropriate directory and copy the contents of `demo.js` and `demo.scss` into it.

Make sure to:

- Change path of stylesheet on the js file.
- Change the function name(Doesn't matter but just for consistency)
- Change the class name.
- Change path of \_mixin import in style sheet(remove the old one, type "`../`" and vs code will show the path automatically)

For a clean project structure, We'll be adding stylesheets to directories same as js files inside `styles/routes/` directory.

</details>



## New Component

<details>
<summary>Read more</summary>
Components won't have much difference compared to React components.

Just create a folder followed by a `.js` file and a `.scss` file with the same name(The function should also be named same as the folder name).

One additional step is to import the `.scss` file in the `styles/root/components.scss` directory.

For example:
```css
@import "../../Components/MockNavigator/MockNavigator.scss";
```

<em>Note: Don't name two components with same name. Since all components are styled from same file, we don't want overlaps of style. That'll mess everything up.</em>

</details>
