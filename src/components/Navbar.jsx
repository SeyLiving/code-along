import NavItem from "./NavItem";

function Navbar() {
    return (
        <nav className="flex justify-between py-5 px-20 shadow-md">
            <h3 className="font-bold ">QUAKES COMPUTER HUB</h3>
            <ul className="flex gap-5">
                <NavItem menu="Home" />
                <NavItem menu="Products" />
                <NavItem menu="Services" />
                <NavItem menu="About Us" />
                <NavItem menu="Contact Us" />
            </ul>
        </nav>
    );
}

export default Navbar;