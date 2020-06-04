export const appConfig ={
    appName: "LION Dashboard",
    webApi:"http://104.211.92.151:8010/api/"
};

/* export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   return theInput;
};
 */

export const userDetails = () => {
   const userData =JSON.parse(localStorage.getItem("userData"));
if(userData){
   const user ={
       firstName: userData.firstname,
       lastName: userData.lastname,
       id: userData.id,
   };
return user;
} else{
    window.location.href="/login";
}
};