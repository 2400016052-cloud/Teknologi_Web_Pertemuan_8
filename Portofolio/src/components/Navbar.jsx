import { Link, useLocation } from 'react-router-dom';

function Navbar() {
 const location = useLocation(); // Hooks untuk tahu kita ada di halaman mana

    return (
        <nav className="flex gap-4 p-4 bg-white shadow-md">
            <Link
                to="/"
                className="px-4 py-2 bg-blue-600 text-red-500 rounded 
                hover:bg-red-700 transition"
            >
                Beranda
            </Link>

            <Link
                to="/projects"
                className="px-4 py-2 bg-blue-600 text-red-500 rounded 
                hover:bg-red-700 transition"
            >
                Proyek
            </Link>

            <Link
                to="/contact"
                className="px-4 py-2 bg-blue-600 text-red-500 rounded 
                hover:bg-red-700 transition"
            >
                Kontak
            </Link>
        </nav>
    );
}

export default Navbar;