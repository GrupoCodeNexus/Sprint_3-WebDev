import React from 'react';
import logo from '../assets/loog.png';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-purple-200 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt='Logo' className='w-10 h-10'/>
          
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">
          Entrar na sua conta
        </h2>

        <div className="bg-purple-300 p-8 rounded-xl shadow border border-gray-200 space-y-6">
          {/* Login e senha */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="form-checkbox" />
                Me lembrar
              </label>
              <a href="#" className="text-indigo-600 hover:underline font-medium">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
