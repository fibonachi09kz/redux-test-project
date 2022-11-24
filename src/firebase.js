// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCdeUMf4E61ZhyOCrVeqv23H5Bhp1bvfEI",
	authDomain: "redux-test-project-cf0fc.firebaseapp.com",
	databaseURL: "https://redux-test-project-cf0fc-default-rtdb.firebaseio.com",
	projectId: "redux-test-project-cf0fc",
	storageBucket: "redux-test-project-cf0fc.appspot.com",
	messagingSenderId: "875780002412",
	appId: "1:875780002412:web:e9de007d3d62fe34ba7e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default {app, database}