import React from 'react'
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { login } from '../features/UserSlice';
import { signInWithPopup} from 'firebase/auth'

export default function Login() {
    const dispatch=useDispatch();
    const handleSignIn=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          dispatch(login({
           displayName: user.displayName,
           email:user.email,
           photoUrl:user.photoURL,
          }));
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <div className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center">
    <img  src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg" alt="Amazon logo" className="h-72 mt-4" />
      <h1 className="text-2xl font-bold mb-6">Sign In To Amazon</h1>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSignIn}
      >
        Login
      </button>
     
    </div>
  </div>
  )
}
