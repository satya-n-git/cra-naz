import './index.css';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex justify-center items-center relative">
      {/* Moonlight Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://cdn.pixabay.com/photo/2016/11/29/03/21/moon-1869391_960_720.jpg')] bg-cover bg-center opacity-40"></div>

      <div className="bg-black bg-opacity-70 p-8 md:p-12 rounded-xl shadow-xl text-center relative z-10 max-w-sm md:max-w-5xl w-full">
        <h1 className="text-2xl md:text-5xl font-poppins text-white mb-6">
          I'm unable to sleep... Please call me.
        </h1>
        <p className="text-2xl md:text-3xl font-poppins text-gray-300 mb-6">
          You can count on me...
        </p>
      </div>
    </div>
  );
}

export default App;
