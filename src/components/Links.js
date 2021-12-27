import React from 'react';
import user from "../data/user";

function Links({linked=user.links.linkedin, git=user.links.github}) 
{
  return(
    <>
      <h3>Links</h3>
      <a href={git}>{git}</a>
      <a href={linked}>{linked}</a>
    </>
  )
}

export default Links