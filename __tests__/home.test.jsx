const React = require("react");
const { useEffect, useState } = require("react");
const { useNavigate } = require("react-router");
const Cookies = require("js-cookie");
const { Link } = require("react-router-dom");
const { render } = require("@testing-library/react"); // Make sure to import render from @testing-library/react
const  Home  = require ("../src/component/home");
// Rest of your test code goes here...

test("renders the home page correctly", () => {
  const { getByText } = render(< Home />);
  
  // Assert that certain elements are present on the page
  const workoutLink = getByText("Workout");
  const nutritionLink = getByText("Nutrition");
  const recipesLink = getByText("Recipes");
  
  expect(workoutLink).toBeInTheDocument();
  expect(nutritionLink).toBeInTheDocument();
  expect(recipesLink).toBeInTheDocument();
});
