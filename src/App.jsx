import "./App.css";

function App() {
  return (
    <div className="App flex sm:h-screen  w-full justify-center items-center bg-back flex-col p-10 sm:p-0 ">
      <h2 className="text-center text-textColor font-bold mb-3 text-xl">
        Tailwind ile card duzeltmek
      </h2>
      <div className="card flex flex-col bg-cardBack w-full sm:w-1/3 rounded-2xl p-6 shadow-sm shadow-buttonBack3">
        <div className="bg-buttonBack1 h-16 w-16 flex justify-center items-center rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={32}
            width={32}
            fill="#E68226"
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </div>
        <h2 className="text-textColor font-bold mb-4 mt-4">
          React Tailwind Css
        </h2>
        <p className="text-textColor2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          beatae, laboriosam pariatur nemo ipsa laudantium.
        </p>
        <div className="flex sm:flex-row flex-col  justify-between">
          <button className="text-textColor bg-buttonBack1 btns">1</button>
          <button className="text-textColor bg-buttonBack1 btns">2</button>
          <button className="text-textColor bg-buttonBack1 btns">3</button>
          <button className="text-textColor bg-buttonBack2 btns">4</button>
          <button className="text-textColor bg-buttonBack3 btns">5</button>
        </div>
        <button className="bg-buttonSubmit justify-center items-center font-serif text-lg mt-5 rounded-3xl text-textColor pb-2 pt-2 font-bold">Submit</button>
      </div>
    </div>
  );
}

export default App;
