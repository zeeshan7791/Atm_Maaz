import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  signoutUserFailure,
  signoutUserStart,
  signoutUserSuccess,
} from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(currentUser, "value in currret useer");
  const handleSignOut = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch("api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutUserFailure(data.message));
        return;
      }
      dispatch(signoutUserSuccess());
    } catch (error) {
      dispatch(signoutUserFailure(error.message));
    }
  };
  return (
    <>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-large flex flex-wrap">
              <span className="text-blue-800">UBL </span>
              <span className="text-blue-700">Bank</span>
            </h1>
          </Link>

          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/bank-info">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Account
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              {currentUser ? (
                <li
                  className="hidden sm:inline text-slate-700 hover:underline"
                  onClick={handleSignOut}
                >
                  Sign out
                </li>
              ) : (
                <li className="hidden sm:inline text-slate-700 hover:underline">
                  Sign in
                </li>
              )}
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
