import React, { useContext, useState } from 'react'
import { Login_Signup_Context } from '../contexts/Login_Signup_Context';
import photo from "../img/woman_hero.png"
import { LuBaggageClaim } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";


const Profile = () => {

    const { loginWithRedirect, logout, user, isAuthenticated } = useContext(Login_Signup_Context);


    return (
        <div className='h-screen flex flex-col sm:flex-row'>
            <div className='w-full md:w-[30%] bg-orange- overflow-x-hidden overflow-y-auto no-scrollbar'>
                <div className="details">
                    <div className="w-full rounded text-black flex flex-col items-center justify-center mt-20">
                        <div className='flex items-center bg-gray-200 gap-6 w-full md:w-[90%] rounded'>
                            {isAuthenticated ? (
                                <>
                                    <div className="mr-3">
                                        <img className='h-16 rounded-full m-1' src={user.picture} alt="photo" />
                                    </div>
                                    <div className="">
                                        <h2>{user.name}</h2>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="mr-3">
                                        <img className='h-16 rounded-full m-1' src={photo} alt="photo" />
                                    </div>
                                    <div className="">
                                        <h2>Hello,<br /> Biswarup Ghosh</h2>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="order mt-5 flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] rounded hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <LuBaggageClaim />
                                MY ORDERS
                            </div>
                            <div className='mr-4'>
                                &gt;
                            </div>
                        </div>
                        <div className="account flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%]  hover:cursor-pointer hover:text-blue-600 mt-5">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <FaUser />
                                ACCOUNT SETTINGS
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Profile Settings
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Manage Information
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                PAN Information
                            </div>
                        </div>

                        <div className="account flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%]  hover:cursor-pointer hover:text-blue-600 mt-5">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <FaWallet />
                                PAYMENT SETTINGS
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Gift Card
                            </div>
                            <div className='mr-4'>
                                $0
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Saved UPI
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                Saved Cards
                            </div>
                        </div>

                        <div className="account flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%]  hover:cursor-pointer hover:text-blue-600 mt-5">
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <MdAccountBalanceWallet />
                                MY STUFF
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                My Coupon
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                My Review & Ratings
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                All Notification
                            </div>
                        </div>
                        <div className="order flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] hover:cursor-pointer hover:text-blue-600">
                            <div className='h-10 flex items-center ml-20 gap-4'>
                                My Wishlist
                            </div>
                        </div>
                        <div className="order mt-5 flex items-center justify-between bg-gray-200 gap-6 w-full md:w-[90%] rounded hover:cursor-pointer hover:text-blue-600 border_black mb-4" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            <div className='h-10 flex items-center ml-7 gap-4'>
                                <FaPowerOff />
                                Log Out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[70%] bg-blue-500'>
                {/* Right side content goes here */}
            </div>
        </div>


    );
};
export default Profile