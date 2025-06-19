import Link from "next/link";

import React from "react";
import Image from "next/image";

function Logo() {
  return (
    
      <Link
        href="/"
        className="bg-white p-1"
      >
        <Image src="/CompanyLogo.png" alt="" width={200} height={100} />
      </Link>
    
  );
}

export default Logo;
