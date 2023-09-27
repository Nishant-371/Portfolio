import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />
            </nav>

            <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>
        </>
    );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    );
};

const NavContent = ({ setMenuOpen }) => (
    <>
        <h2>Nishant.</h2>
        <div>
            <a onClick={() => setMenuOpen(false)} href="#home">
                Home
            </a>
            <a onClick={() => setMenuOpen(false)} href="#work">
                Work
            </a>
            <a onClick={() => setMenuOpen(false)} href="#timeline">
                Experience
            </a>
            <a onClick={() => setMenuOpen(false)} href="#services">
                Services
            </a>
            <a onClick={() => setMenuOpen(false)} href="#About_me">
                About Me
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact">
                Contact
            </a>

        </div>
        {/* */}
        {/* https://drive.google.com/drive/u/2/folders/1QPayAGbyng3kwOGaxFDUl9y461wC9vSZ */}

        <a href="https://drive.google.com/file/d/16VfDxJfpG1LdqXrnTeawiXndmpDEBS86/view?usp=share_link" target={"blank"}>
            <button>Resume</button>
        </a>



    </>
);

export default Header;