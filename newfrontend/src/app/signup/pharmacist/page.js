"use client"
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pharmacyanimation from '../../../../public/pharmacy.json'
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "@/app/redux/actions/authActions";
import {useRouter} from "next/router";
import { redirect } from "next/navigation";
import { Button, TextInput } from "@tremor/react";
import { BottomCallout } from "@/components/BottomCallout";
import {
    validateEmail,
    validatePassword,
    validatePhoneNumber,
  } from "../../../../../newfrontend/src/app/redux/validators";
  
const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
        gender: "",
        dateOfBirth: "",
        eName: "",
        eNumber: "",
        erelationToPatient: "",
        passwordConfirm: "",
      });
    
      const [showPassword, setShowPassword] = useState(false);
    
      const [showPasswordConfirm, setShowPasswordConfrim] = useState(false);
      const [passwordMatch, setPasswordMatch] = useState(true); // Passwords match state
      const [formValid, setFormValid] = useState(false);
    
      const handlePasswordConfirmChange = (e) => {
        const confirmPassword = e.target.value;
        setPasswordMatch(
          formData.password === confirmPassword ||
            formData.passwordConfirm === confirmPassword
        );
        handleInputChange(e);
      };
    
      useEffect(() => {
        // Update overall form validity based on individual validations
        const isValid =
          validateEmail(formData.email) &&
          validatePhoneNumber(formData.mobileNumber) &&
          validatePassword(formData.password) &&
          passwordMatch;
    
        setFormValid(isValid);
      }, [formData, passwordMatch]);
    
      const togglePasswordVisibility = (field) => {
        if (field === "password") {
          setShowPassword(!showPassword);
        } else {
          setShowPasswordConfrim(!showPasswordConfirm);
        }
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const dispatch = useDispatch();
      const { loading, isAuthenticated, error } = useSelector(
        (state) => state.registerReducer
      );
    
      const handleSignUp = (e) => {
        // Gather data in the formData object and send it to the backend
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add your code to send data to the backend here
    
        dispatch(
          registerAction({
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            passwordConfirm: formData.passwordConfirm,
            role: "patient",
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            mobileNumber: formData.mobileNumber,
            emergencyContact: {
              fullName: formData.eName,
              mobileNumber: formData.eNumber,
              relationToPatient: formData.erelationToPatient,
            },
          })
        );
      };
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
      <Lottie animationData={pharmacyanimation} className='w-[550px] h-[550px]' loop={true} />
        <div className="lg:w-2/3 xl:w-2/3 p-6 sm:p-12 transform scale-70">
          <div className="flex flex-col items-center rounded-lg border border-purple-600 px-8 pt-8 pb-12 shadow-lg w-full ">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-l">

              <TextInput 
               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
               type="text"
               placeholder="Enter name" 
               name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                />
               
              <div class="grid lg:grid-cols-2 gap-y-7 gap-x-7">
                {/* Log In Form */}
                {/* Left column */}
                <div class="col-span-1">
              
                
              
              

               <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  error={
                    !validateEmail(formData.email) && formData.email !== ""
                  }
                  errorMessage={
                    !validateEmail(formData.email) &&
                    formData.email !== "" &&
                    "Please enter a valid email"
                  }
                />

                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="username"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                 
                  

                />
                  <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  required
                  isInvalid={!passwordMatch}
                  onChange={handlePasswordConfirmChange}
                />
                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="Number"
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                  required
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  isInvalid={
                    formData.mobileNumber &&
                    !validatePhoneNumber(formData.mobileNumber)
                  }
                />
                </div>

                {/* Right column */}
                {/* 3ayza aghayar el gender aslan akhalih icons lessa fa ma7atetsh code el integration  */}
                <div class="col-span-1">
                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                />
        


<div>
{/* <Image src="/birthday.svg" height={25} width={25}></Image> <p className="ml-3 text-lg"></p> */}
                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="date"
                  placeholder="Date of Birth"
                  name="dateOfBirth"
                  onChange={handleInputChange}
                  required
                  value={formData.dateOfBirth}
              
                />
                </div>
                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="text"
                  placeholder="Emergency Contact Name"
                  name="eName"
                  value={formData.eName}
                  required
                  onChange={handleInputChange}
                />
                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="Number"
                  required
                  placeholder="Emergency Contact Phone"
                  name="eNumber"
                  value={formData.eNumber}
                  onChange={handleInputChange}
                  isInvalid={
                    formData.eNumber &&
                    !validatePhoneNumber(formData.eNumber)
                  }
                />
                <TextInput
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-800 border border-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 mt-5"
                  type="text"
                  placeholder="relation to patient"
                  name="erelationToPatient"
                  value={formData.erelationToPatient}
                  onChange={handleInputChange}
                  required
                />
                
                </div>
               </div>
          {/* Sign Up Button */}
          <Button className="mt-5 tracking-wide font-semibold bg-purple-600 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={handleSignUp}
                // loading = {loginLoading}
                color={"purple"}
                loadingText="Logging In...">
                <span className="ml-3">Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
          
 
        </div>
        
        {/* GIF to the Right */}
       
       

        {/* {loginError && (
        <BottomCallout
          message="Invalid Username or Password"
          variant="error"
          visible={true}
          setVisible={setVisibleFeedback}
        />
      )} */}
        
      </div>
    </div>
  );
};

export default Signup;
