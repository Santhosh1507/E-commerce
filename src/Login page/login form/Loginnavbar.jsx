import React from 'react'
import Logo from "../../assets/logo.png";

const Loginnavbar = () => {
    return (
        <div className="bg-primary/50 py-4">
            <div className="container flex justify-between items-center">
                <div className="">
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="Logo" className="w-10" />
                        Shoping
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Loginnavbar