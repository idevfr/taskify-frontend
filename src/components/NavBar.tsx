import icon from "../assets/icon.svg";
import { useLogout } from "../hooks/useLogout";
function NavBar() {
  const { logoutUser, isLoggingout } = useLogout();

  return (
    <nav className="flex items-center justify-between border-b p-6">
      <div className="flex items-center justify-center">
        <img className="h-6 px-1.5" src={icon} alt="taskify icon" />
      </div>
      <div>
        <button
          onClick={() => logoutUser()}
          className="cursor-pointer border-r border-l px-1.5 text-xl font-bold transition-all duration-300 hover:scale-105 active:scale-90"
          disabled={isLoggingout}
        >
          Log out
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
