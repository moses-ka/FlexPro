/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-firstImg' : "url('https://img.freepik.com/free-vector/stretching-exercises-concept-illustration_114360-8922.jpg?w=2000&t=st=1692444124~exp=1692444724~hmac=2a6cc8eec37383fb0369e04a49a1ac8b5217d11ae373e9f5543e697cf41eb8fb')",
        'my-secImg' :"url(https://img.freepik.com/free-vector/male-chef-mixing-flour-eggs-dough-with-whisk-hands-happy-man-apron-preparing-homemade-sweet-dessert-table-home-kitchen-flat-vector-illustration-pastry-cooking-recipe-concept_74855-21965.jpg?w=2000&t=st=1692449504~exp=1692450104~hmac=6368062ab117d648987273a6140386bba8803f6f515c42f78ee96511987b30a3)",
        'my-thirdImg':" url('https://img.freepik.com/free-vector/young-women-presenting-high-fat-foods_74855-5307.jpg?w=1800&t=st=1692444232~exp=1692444832~hmac=edc81a05169dbd1e999b7efc1ca2087a1b22881eefee9997976dd6e81d7df33e')"
      }
      
    }
   
  },

  plugins: [],
}

