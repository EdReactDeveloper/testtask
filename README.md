1. to start the app run: npm start
2. technologies: React/Redux, react-bootstrap
3. functionality: register, login, logout, fetch a web api, field validation, pagination, search
4. the auth process is localStorage based: 
 - the user is registered by saving his encrypted(hashed) credentials in localStorage as a simple web token
 - to login, the hashed credentials must match the webtoken which allowes the app to change the isLogged property from false to true
 - logout changes the the isLoggedIn property back to false
 
 
