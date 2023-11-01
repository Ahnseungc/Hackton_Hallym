"use client";

import Link from "next/link";
import {FiChevronLeft} from "react-icons/fi";

const BackBtn = () => {
    return (
        <>
            <Link href="/">
                <FiChevronLeft size={30} color={"#6B7280"}/>
            </Link>
        </>
    );
};

export default BackBtn;
