//import React from 'react';

const checkValidateData = (email, password, mobileNumber, username) => {

    const isValidUsername = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(username.trim());
    const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{6,32}$/.test(password.trim());
    //const isStrongPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
    const isValidEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
    const isValidMobileNumber = /^[0-9]{1,10}$/.test(mobileNumber.trim());

    if(!isValidUsername) return "Full Name is not valid";
    if(!isValidPassword) return "Password is not valid";
    if(!isValidEmail) return "Email ID is not valid";
    if(!isValidMobileNumber) return "MobileNumber is not valid";

    if(!isValidUsername) return console.log("Full Name is not valid");
    if(!isValidPassword) return console.log("Password is not valid");
    if(!isValidEmail) return console.log("Email ID is not valid");
    if(!isValidMobileNumber) return console.log("MobileNumber is not valid");

    return null;




    {/*
    const validUsername = (username) => isValidUsername.test(username);
    const validPassword = (password) => isValidPassword.test(password);
    const ValidEmail = (email) => isValidEmail.test(email);
    const ValidMobileNumber = (mobileNumber) => isValidMobileNumber.test(mobileNumber);

    {validUsername(username);
    validPassword(password);
    ValidEmail(email);
    ValidMobileNumber(mobileNumber);
    console.log("validUsername:"+validUsername);
    console.log("validPassword:"+validPassword);
    console.log("ValidEmail:"+ValidEmail);
    console.log("ValidMobileNumber:"+ValidMobileNumber);

    if(validUsername(username) && validPassword(password) && ValidEmail(email) && ValidMobileNumber(mobileNumber)){
        return null;
    } else{
        return "Not a valid userCredentials!";
    }
    */}
};

export default checkValidateData;