import { login, signInWithGithub, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-24 rounded-lg shadow-md w-full max-w-md space-y-6 ">
        <h2 className="text-2xl font-bold text-center text-black">Login</h2>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            //required
            className=" text-black w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            //required
            className="text-black w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            formAction={login}
            className=" w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Log in
          </button>
          <button
            type="submit"
            formAction={signup}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Sign up
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-black text-white w-[16rem] h-[2.5rem] rounded-lg" type="submit" formAction={signInWithGithub}>Github</button>
        </div>
      </form>
    </div>
  );
}
