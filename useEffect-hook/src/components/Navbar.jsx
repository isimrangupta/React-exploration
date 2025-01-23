import { useEffect } from "react";

const Navbar = ({ color }) => {
  // case 1 : Run on every render
  useEffect(() => {
    alert("I will run on every render !");
  });

  // case 2 : Run only on first render
  useEffect(() => {
    alert("I will run only on first render ");
  }, []);

  // case 3 : Run only when certain values change
  useEffect(() => {
    alert("I am runing beacuse color was changed");
  }, [color]);

  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])
  

  return (
    <>
      <h1>I am navbar of {color} color hehe..</h1>
    </>
  );
};

export default Navbar;
