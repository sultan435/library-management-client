import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="menu w-80 min-h-full bg-base-200 space-y-2 text-center">
            {/* Sidebar content here */}
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-400 underline' : ''}>Home</NavLink>
            <NavLink to="/addBook" className={({ isActive }) => isActive ? 'text-red-400 underline' : ''}>Add Book</NavLink>
            <NavLink to="/allBook" className={({ isActive }) => isActive ? 'text-red-400 underline' : ''}>All Book</NavLink>
            <NavLink to="/borrowed" className={({ isActive }) => isActive ? 'text-red-400 underline' : ''}>Borrowed Book</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'text-red-400 underline' : ''}>Login</NavLink>
        </div>
    );
};

export default Sidebar;