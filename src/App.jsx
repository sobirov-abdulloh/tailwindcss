import "./App.css";

function App() {
  return (
    <body>
      <div class="container mx-auto px-4">
        <header class="flex justify-between text-2xl py-8 border-b-2 border- yellow-400 mb-8">
          <a class="" href="">Logo</a>
          <ul class="flex justify-between ">
            <li><a href="">About</a></li>
            <li class="ml-8"><a href="">Blog</a></li>
            <li class="ml-8"><a href="">Contact</a></li>


           
          </ul>

        </header>
      <div class="grid grid-cols-3 gap-4 text-center">
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          1
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          2
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          3
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          4
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          5
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          6
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          7
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          8
        </div>
        <div class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-red-400 rounded-md p-8">
          9
        </div>
      </div>
      <div class="flex justify-center py-8">
      <svg
        class="animate-bounce w-6 h-6 text-red-400"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
      </div>
      <div class="bg-yellow-400 rounded-md p-8">
        <h2 class="text-lg">The last of us</h2>
        <form action="" class="flex justify-start text-lg -m-2">
          <input class="border-2 border- yellow-400 rounded-md placeholder-yellow-400 px-8 py-4 m-2 w-2/5" type="text" placeholder="Your name" />
          <input class="border-2 border- yellow-400 rounded-md placeholder-yellow-400 px-8 py-4 m-2 w-2/5" type="email"placeholder=" Your email" />
          <button class="bg-red-400 border-2 border-red-400 rounded-md px-8 py-4 m-2 w-1/5" type="sumbit ">Add</button>
        </form>

      </div>
      </div>
    </body>
  );
}

export default App;
