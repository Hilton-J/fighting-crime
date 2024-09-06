import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="bg-blue-950 w-screen">
            <div className="flex justify-between flex-wrap lg:py-8 p-[1rem] w-full divide-y-2 sm:divide-y-0">

                <div className="w-[10rem] ">
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link to={'/'} className=" hover:underline">Home</Link>
                        </li>
                        <li className="mb-4">
                            <Link to='/about' className="hover:underline">About us</Link>
                        </li>
                        <li className="mb-4">
                            <Link to='/talk' className="hover:underline">Talk us</Link>
                        </li>
                        <li className="mb-4">
                            <Link to='/wanted' className="hover:underline">Wanted</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-[20rem]">
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Disclaimer</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Web Content Manager: Capt Y Sampson</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">For Technical Assistance: SHOKI</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Copyright @2024 South African Police Service (SAPS) Maintained by: SITA SAPS Webteam (SITA TIS) Best viewed at a screen resolution of 1026 x 800 Most compatible with IE 7 and higher</a>
                        </li>
                    </ul>

                </div>

                <div className="w-full md:w-auto">
                    <h2 className=" mb-6 text-sm font-semibold uppercase text-white">Head Office</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Tel: +27 (0) 12 393 1000</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">SAPS Head Office</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Telkom Towers Building</a>
                            <br />
                            152 Johannes Ramokhoase Street
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Pretoria</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Private Bag X94</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">Pretoria</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:underline">0001</a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer