import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-600">
          Create your account
        </h2>
      </motion.div>
      <motion.div
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2 pl-10 bg-white border border-gray-600 rounded-md shadow-sm 
                focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 pl-10 bg-white border border-gray-600 rounded-md shadow-sm 
                focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent 
			rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600
		  hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="animate-spin mr-2 h-5 w-5" />
                  Loading
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
                  Log in
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Not a mumber?{" "}
            <Link
              to="/signup"
              className="text-emerald-600 hover:text-emerald-800 font-medium"
            >
              Sign up here{" "}
              <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default LogInPage;