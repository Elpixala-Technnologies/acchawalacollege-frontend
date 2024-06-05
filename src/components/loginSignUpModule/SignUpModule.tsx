"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SignUp } from "@/Asset";
import useSignup from "@/query/hooks/useSignup";
import useUserMetaData from "@/query/hooks/useUserMetaData";
import { useAppDispatch } from "@/Redux";
import { useQuery } from "@apollo/client";
import { getStreams, getCourseLevels } from "@/query/schema";
import { restUrl } from "@/utils/network";
import { setAuthState } from "@/Redux/authSlice";
import { ID, UserSubmittedData } from "@/types/global";
import { OTPInput } from "../otpInput/otp";
import Carousel from "./Carousel";
import { sliderContent } from "./data";

export function SignUpModule({ closeLoginPopup }: any) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  const [error, setError] = useState("");
  const [userSubmittedData, setuserSubmittedData] = useState<UserSubmittedData>(
    {
      name: "",
      email: "",
      number: "",
      isWhatsappNo: false,
      stream: "",
      courseLevel: "",
    },
  );

  const [userOtp, setUserOtp] = useState("");
  const [userId, setUserId] = useState<ID>();
  const [isOtp, setIsOtp] = useState(false);
  const { UserCheck, CheckOTP } = useSignup();
  const { userMetaCreate } = useUserMetaData();
  const dispatch = useAppDispatch();
  const { data: streamsData } = useQuery(getStreams);
  const { data: courseLevelData } = useQuery(getCourseLevels);
  const checkUser = UserCheck(
    userSubmittedData?.number,
    userSubmittedData?.email,
  );
  const otpchecker = CheckOTP(userId!, userSubmittedData?.number, userOtp);

  async function sendSignupOtp() {
    const currentDate = new Date();
    const publishedAt = currentDate.toISOString();

    if ((await checkUser) === false) {
      try {
        let data = JSON.stringify({
          data: {
            name: userSubmittedData.name,
            email: userSubmittedData.email,
            number: userSubmittedData.number,
            stream: userSubmittedData.stream,
            courseLevel: userSubmittedData.courseLevel,
          },
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${restUrl}/api/users-data`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios
          .request(config)
          .then((response: any) => {
            setUserId(response?.data?.data?.id);
            setIsOtp(true);
          })
          .catch((error: any) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error adding user:", error);
      }
    } else {
      setError("User already exists");
    }
  }

  async function handleSubmitSignup() {
    const currentDate = new Date();
    const publishedAt = currentDate.toISOString();

    if (otpchecker != false) {
      try {
        dispatch(
          setAuthState({
            authState: true,
            userID: otpchecker?.loggedInUser?.id,
            userName: otpchecker?.loggedInUser?.attributes?.name,
            email: otpchecker?.loggedInUser?.attributes?.email,
            number: otpchecker?.loggedInUser?.attributes?.number,
          }),
        );

        await userMetaCreate({
          variables: {
            name: userSubmittedData.name,
            email: userSubmittedData.email,
            number: userSubmittedData.number,
            userDataId: userId,
            publishedAt,
          },
        });

        console.log("user signed up");
        closeLoginPopup();
        router.push("/");
      } catch (error) {
        console.error("Error publishing user:", error);
      }
    } else {
      setError("Wrong OTP");
    }
  }

  const handleFormSubmit = async (data: any) => {
    setuserSubmittedData(data);
    isOtp ? handleSubmitSignup() : sendSignupOtp();
  };
  const handleOverlayClick = (e: any) => {
    // Check if the click occurred on the overlay (the background)
    if (e.target === e.currentTarget) {
      closeLoginPopup();
    }
  };

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  return (
    <section
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75"
      onClick={handleOverlayClick}
    >
      {/* Sign-up Module  */}
      <div className="z-10 flex w-full rounded bg-white shadow-lg md:w-[60%]">
        {/* Left Side  */}
        <div className="hidden px-5 py-10 text-black [flex:5] md:block">
          <Image
            src={SignUp}
            alt="SignUp"
            className="h-[250px] w-full rounded-l object-cover"
          />
          <div className="p-5">
            <h3 className="text-center font-bold text-orange-500">
              Why we are better then rest?
            </h3>
            <ul className="list-disc">
              <li>
                <strong>Proven Success : </strong> 90% admission success rate to
                top-choice colleges.
              </li>
              <li>
                <strong>Cost Effective : </strong> 80% cost effective.{" "}
              </li>
              <li>
                <strong>Access to Top Choice : </strong> 70% access to top
                choice.{" "}
              </li>
            </ul>
          </div>
          <div className="relative w-full">
            <Carousel autoSlide={true}>{sliderContent}</Carousel>
          </div>
        </div>
        {/* Right Side  */}
        <div className="relative flex flex-col justify-center rounded-b rounded-r bg-gradient-to-r from-red-400 to-orange-500 p-8 text-black [flex:5]">
          <button
            className="absolute right-[0.05rem] top-[0.05rem] w-max p-3  text-sm   text-white hover:underline"
            onClick={closeLoginPopup}
            type="button"
          >
            Close
          </button>
          <h1 className="font-bold text-zinc-800">
            Explore Top-notch college counseling from experts at absolutely no
            cost. <span>Sign Up Now!</span>
          </h1>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {isOtp ? (
              <div className="mb-2 flex text-xs">
                <OTPInput
                  userOtp={userOtp}
                  setUserOtp={setUserOtp}
                  otpLength={6}
                />
              </div>
            ) : (
              <>
                <Input
                  label="Name "
                  placeholder=" "
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors?.name && (
                  <p className="text-red-600">{errors?.name?.message}</p>
                )}
                {/* Mobile No.  */}
                <Input
                  label="Mobile No "
                  type="phone"
                  placeholder=" "
                  maxLength={10}
                  {...register("number", {
                    required: "Mobile No. is required",
                    pattern: {
                      value: mobileRegex,
                      message: "Please enter a valid 10-digit mobile number",
                    },
                  })}
                />
                {errors.number && (
                  <p className="text-red-600">{errors.number.message}</p>
                )}
                {/* Email  */}
                <Input
                  label="Email ID "
                  type="email"
                  placeholder=" "
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: emailRegex,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
                {/* Stream  */}
                <select
                  className="my-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:outline-zinc-300"
                  {...register("stream", {
                    // required: "Stream Selection is required",
                  })}
                >
                  <option disabled={true} selected={true} value="">
                    Select Stream
                  </option>
                  {streamsData?.streams?.data?.map(
                    (stream: any, index: any) => {
                      return (
                        <option value={stream?.id} key={index}>
                          {stream?.attributes?.streamName}
                        </option>
                      );
                    },
                  )}
                </select>
                {errors.stream && (
                  <p className="text-red-600">{errors.stream.message}</p>
                )}
                {/* courseLevel  */}
                <select
                  className="my-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:outline-zinc-300"
                  {...register("courseLevel", {
                    // required: "courseLevel Selection is required",
                  })}
                >
                  <option disabled={true} selected={true} value="">
                    Select courseLevel
                  </option>
                  {courseLevelData?.courseLevels?.data?.map(
                    (courseLevel: any, index: any) => {
                      return (
                        <option value={courseLevel?.id} key={index}>
                          {courseLevel?.attributes?.levelName}
                        </option>
                      );
                    },
                  )}
                </select>
                {errors.courseLevel && (
                  <p className="text-red-600">{errors.courseLevel.message}</p>
                )}
                {/* Whatsapp No. Check  */}
                <div className="flex items-center">
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      value=""
                      className="peer sr-only"
                      {...register("isWhatsappNo", {})}
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 dark:border-gray-600 dark:bg-orange-700 dark:peer-focus:ring-orange-800"></div>
                  </label>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Whatsapp number is the same as provided above
                  </span>
                </div>
              </>
            )}
            <button
              className="my-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 hover:font-bold focus:bg-gray-50"
              type="submit"
            >
              {isOtp ? "Sign Up" : "Send OTP"}
            </button>
          </form>

          <p className="flex font-sans text-sm leading-normal  text-inherit antialiased">
            Already have an account?
            <Link
              href="/login"
              className="ml-1 block font-sans text-sm font-bold leading-normal text-blue-600  antialiased hover:underline"
            >
              LogIn
            </Link>
          </p>
          {/* Error Message */}
          {error && <p className="mt-5 text-center text-red-600">{error}</p>}
        </div>
      </div>
    </section>
  );
}

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props }: any,
  ref,
) {
  const id = useId();
  return (
    <div className="relative mb-5 mt-1 h-11 w-full min-w-[200px]">
      <input
        type={type}
        className={`border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-primary peer h-full w-full rounded-md border border-t-transparent bg-transparent bg-white px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-t-transparent focus:outline-0 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
      {label && (
        <label
          className="before:content[' '] after:content[' '] before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-focus:before:!border-primary peer-focus:after:!border-primary pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-t-2"
          // htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
});
