import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList = links.map((link)=>{
    const url = '#' + link
    return <a key={link} href={url}>{link}</a>
  })
  return(
    <nav>
    {linkList}
    </nav>
  )
}

export default NavBar;
