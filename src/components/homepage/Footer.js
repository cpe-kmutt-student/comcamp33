import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="w-screen lg:h-[8vh] bg-black flex justify-center items-center lg:flex-row font-pixel text-white text-[3.6vw] sm:text-lg space-x-2 px-5 flex-col h-[10vh] space-y-[-1vw] lg:space-y-0">
            <div className="flex justify-center items-center flex-row space-x-2"><FaCopyright /><p>2022 Comcamp 33 all rights reserved.</p></div>
            <p>Designed and Developed by CPE35</p>
        </div>
    )
}

export default Footer;