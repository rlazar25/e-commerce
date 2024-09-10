import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-mainBlue h-[100vh] text-white text-5xl  gap-10">
           <p>You got lost in the store</p>
           <h1>This page does not exist</h1>
           <Link to="/" className="text-mainYellow">Go back to the store</Link>
        </div>
    )
}

export default ErrorPage;