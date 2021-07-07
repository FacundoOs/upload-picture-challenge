## Explanation

To solve the challenge I decided to use Express as it makes development easier because it offers functions that allow you to write less code. MongoDb, since it facilitates database creation and queries. For the saving of the image I used Cloudinary, since it offers a very fast and efficient image host service. With this, it is enough just to pass the url created to the database.
For the best handling of states I decided to use useState and useEffect to update the posts after being created. For the requests I used axios since it allows to make simple the operations as an HTTP client.
I included a preview of the selected image and a bar indicating the loading percentage.
For styling I used Material Ui as it offers easy-to-use and easily adaptable components, it also allows to create themes in a clean and fast way. 
Remain pending use Redux for the refactoring of the code and to be able to handle the states in a more efficient way.

### Process

## Installation
```
Clone the repository: https://github.com/FacundoOs/upload-picture-challenge
```

Install dependencies:
```
yarn
```

Inside the backend folder create a file .env and write PORT = 5000 and ATLAS_URI = the host address.</br>
Go back to the main folder and run:
```
yarn start 
```
to initialize the applications

