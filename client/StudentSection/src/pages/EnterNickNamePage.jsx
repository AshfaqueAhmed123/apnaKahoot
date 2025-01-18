import React, { useState } from "react";
import bgImage from "../assets/bg.webp";
import kahootLogo from "../assets/logo.svg";
import LoadingScreen from "../components/LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnterNickNamePage = () => {
    const notifyError = (message = "Something went wrong") =>
        toast.error(message);

    const [nickName, setNickName] = useState("");
    const [loadingText, setLoadingText] = useState(
        "please, Wait a little Bit, connecting..."
    );
    const [loadingPageState, setLoadingPageState] = useState(false);
    const handleSubmit = (e, PIN) => {
        e.preventDefault();
        if (nickName) {
            (async () => {
                setLoadingPageState((prev) => !prev);
            })();
        } else {
            notifyError("Enter Your NickName");
        }
    };

    return (
        <>
            {loadingPageState && <LoadingScreen loadingText={loadingText} />}

            <ToastContainer />
            <div
                className="w-100 h-screen overflow-hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    fontFamily:
                        '"Montserrat", "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, "Bai Jamjuree", sans-serif',
                }}
            >
                <div className="w-1/3 flex flex-col items-center justify-center p-4">
                    <img src={kahootLogo} alt="kahoot" className="w-48 mb-10" />
                    <div className="w-72 h-36 bg-white rounded-md p-3 flex flex-col items-center justify-center">
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e, nickName);
                            }}
                        >
                            <input
                                value={nickName}
                                onChange={(e) => {
                                    setNickName(e.target.value);
                                }}
                                className="w-full h-12 text-center font-bold rounded-md text-[#2f2f2f] border-2 border-gray-500 outline-none focus:border-black"
                                type="text"
                                placeholder="Enter NickName"
                            />
                            <button
                                type="submit"
                                className="bg-[#2f2f2f] text-white w-full h-12 mt-3 rounded-md transition-all"
                            >
                                Enter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnterNickNamePage;
