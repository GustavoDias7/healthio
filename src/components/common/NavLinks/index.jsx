import React from "react";

const navLinks = [
  { innerText: "Home", idTitle: "#" },
  { innerText: "Sobre", idTitle: "#about" },
  { innerText: "Design", idTitle: "#design" },
  { innerText: "Download", idTitle: "#download" },
  { innerText: "Começar", idTitle: "#comecar" },
];

const NavLinks = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.idTitle + "menu"}>
              <a href={link.idTitle}>{link.innerText}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
