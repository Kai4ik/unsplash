# Unsplash

- photo gallery web application (Unsplash-inspired design). Users can view the list of all photos in the masonry layout, upload a new photo to the gallery, search for specific photos by label and view individual photo in a pop-up window with details (photo label, upload date, user who added a photo)

- Firebase Cloud storage is used to store photos that are uploaded by users

- Firebase Cloud Firestore is used to store and query data about photos (image url (from Firebase storage), photo label, name of the user who uploaded the photo)

**Application is hosted on Vercel platform - https://unsplash-web-gallery.vercel.app/**

---

## Build with

- React (entirely using React Hooks) 
- [styled-components](https://styled-components.com/docs)
- [react-use](https://www.npmjs.com/package/react-use)
- [Firebase Storage](https://firebase.google.com/products/storage)
- [Firebase Realtime Database](https://firebase.google.com/products/firestore)
- [Font Awesome Icons](https://fontawesome.com/)

## Usage

Before running any scripts, run

> `npm install`

Then, in the project directory, you can run:

> `npm start`

Runs the app in the development mode. The page will reload when you make changes.

> `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

--- 
