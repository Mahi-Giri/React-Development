import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = (event) => {
        setIsSignIn(!isSignIn);
    };
    console.log(isSignIn);

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="bg-img"
                />
            </div>
            <div className="absolute w-1/5 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-75">
                <form className="p-12 flex flex-col gap-3 py-6">
                    <h3 className="font-bold text-2xl text-white mt-5 mb-3">{isSignIn ? "Sign In" : "Sign Up"}</h3>
                    {!isSignIn && (
                        <input
                            className="py-2 px-3 w-full border-none rounded-md outline-none text-sm bg-gray-300"
                            type="text"
                            placeholder="Full Name"
                        />
                    )}
                    <input
                        className="py-2 px-3 w-full border-none rounded-md outline-none text-sm bg-gray-300"
                        type="text"
                        placeholder="Email or phone number"
                    />
                    <input
                        className="py-2 px-3 w-full border-none rounded-md outline-none text-sm bg-gray-300"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="py-2 text-sm bg-red-700 w-full text-white rounded-md mt-4">{isSignIn ? "Sign In" : "Sign Up"}</button>
                    <div className="flex justify-between text-white text-xs">
                        <div className="flex">
                            <input type="checkbox" id="input" className="mr-1" />
                            <label htmlFor="input">Remember me</label>
                        </div>
                        <span className="">Need help?</span>
                    </div>
                    <div className="text-gray-300 mt-10 mb-16">
                        <p className="text-xs">
                            <span className="font-bold text-sm ml-1 cursor-pointer" onClick={toggleSignIn}>
                                {isSignIn ? "New to Netflix? Sign up now." : "You already have a account. Sign In"}
                            </span>
                        </p>
                        <p className="text-xs mt-4 ">
                            This page protrcted by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500">Learn More</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;