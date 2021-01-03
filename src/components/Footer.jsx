import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Logan Preston {year}</p>
    </footer>
  );
}

export default Footer
