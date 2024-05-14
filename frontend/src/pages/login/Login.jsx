import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const readyMadeAccounts = [
  {
    fullName: "Anakin Skywalker",
    username: "DartWeider",
    password: "padmeamidala",
    gender: "male",
    avatar: `https://i.imgur.com/YW1sQUu.jpg`,
  },
  {
    fullName: "Obi-Wan Kenobi",
    username: "Kenobi",
    password: "Maytheforcebewithyou",
    gender: "male",
    avatar: `https://i.imgur.com/2cw0btQ.jpg`,
  },
  {
    fullName: "Leia Organa",
    username: "Leia+Han=Love",
    password: "OrganaTheBest",
    gender: "female",
    avatar: `https://i.imgur.com/FgbWpwn.jpg`,
  },
  {
    fullName: "R2-D2",
    username: "0100010",
    password: "0100010000101",
    gender: "male",
    avatar: `https://i.imgur.com/Yf2xkS0.jpg`,
  },
];

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  const choiceAccount = (userName, password) => {
    setUserName(userName);
    setPassword(password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-red-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner" /> : "Login"}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-5">
        <h1 className="text-2xl font-semibold text-center text-gray-300">
          or login under a ready-made account:
        </h1>

        <div className="flex gap-10 mt-2 justify-center">
          {readyMadeAccounts.map((account) => (
            <div
              title={account.fullName}
              className="avatar btn btn-circle w-20 h-20 hover:drop-shadow-xl transition-all"
              key={account.username}
              onClick={() => choiceAccount(account.username, account.password)}
            >
              <div className="w-20 h-20 rounded-full">
                <img src={account.avatar} alt="user avatar" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
