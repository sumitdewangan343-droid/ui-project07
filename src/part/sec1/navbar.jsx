import react from 'react';

const Navbar = () => {  
    return (
        <div className="flex items-center justify-between py-6 px-16">
        <h1 className="bg-black text-white px-4 py-2 rounded-4xl">
            Target Audience
        </h1>
        <button className="bg-gray-100 text-black px-4 py-2 rounded-4xl">
            digital Banking Platforms
        </button>
        </div>
    );
}
export default Navbar;
