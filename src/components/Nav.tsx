import Logo from "../assets/logo-text.png";

const Nav = () => {

  return (
    <nav className="bg-rose-50  p-3 fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between ">
        <img src={Logo} alt="" className="w-32 md:w-auto" />
        <ul className="  gap-7 items-center hidden md:flex">
          <li className="transition-shadow duration-300 hover:shadow-lg">Home</li>
          <li className="transition-shadow duration-300 hover:shadow-lg">Technologies</li>
          <li className="transition-shadow duration-300 hover:shadow-lg">Projects</li>
          <li className="transition-shadow duration-300 hover:shadow-lg">About</li>
          <li className="transition-shadow duration-300 hover:shadow-lg">Contact</li>
        </ul>
        <div className="flex gap-2">
          <button className="btn btn-neutral btn-outline border-none">
            Sign In
          </button>
          <button className="btn btn-active btn-secondary rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
