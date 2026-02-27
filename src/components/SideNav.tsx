import { GrAdd, GrBook, GrFormTrash, GrUserSettings } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const Styles = {
  link: "h-16 cursor-pointer rounded-xl border-2 transition-all duration-150",
  navLink:
    "flex h-full w-full items-center justify-center gap-3.5 rounded-2xl transition-all duration-150 hover:scale-95 hover:bg-gray-300 hover:text-xl hover:inset-ring-2 active:scale-100 active:rounded-xl",
};
function SideNav() {
  return (
    <aside className="col-span-2 border-r border-gray-950">
      <nav className="text-lg font-semibold transition-all duration-100 select-none">
        <ul className="space-y-2.5 px-6 pt-10">
          <li className={Styles.link}>
            <NavLink className={Styles.navLink} to={"create-new"}>
              Create New
              <span>
                <GrAdd />
              </span>
            </NavLink>
          </li>
          <li className={Styles.link}>
            <NavLink className={Styles.navLink} to={"todos"}>
              Saved Notes{" "}
              <span>
                <GrBook />
              </span>
            </NavLink>
          </li>
          <li className={Styles.link}>
            <NavLink className={Styles.navLink} to={"trash"}>
              Trash
              <span>
                <GrFormTrash size={28} />
              </span>
            </NavLink>
          </li>
          <li className="mt-6 h-16 cursor-pointer rounded-xl border-2 transition-all duration-150 md:mt-32 lg:mt-52">
            <NavLink className={Styles.navLink} to={"settings"}>
              Profile
              <span>
                <GrUserSettings />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNav;
