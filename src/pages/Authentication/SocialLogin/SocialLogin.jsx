import React from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Signed in successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to sign in. Please try again.");
      });
  };
  return (
    <div className="mt-6 text-center">
      <div className="divider text-sm text-gray-500">OR</div>

      <button
        onClick={handleGoogleSignIn}
        className="btn w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 hover:shadow-md transition duration-300"
      >
        <svg
          aria-label="Google logo"
          width="20"
          height="20"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="#fff" d="M0 0h512v512H0z" />
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            />
            <path
              fill="#4285f4"
              d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            />
            <path
              fill="#fbbc02"
              d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"
            />
            <path
              fill="#ea4335"
              d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            />
          </g>
        </svg>
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
