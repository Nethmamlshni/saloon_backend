import Booking from "./booking";
import Navbar from "./navBar";

const HomePage: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E4E0E1] to-[#D6C0B3] p-6 font-['Times_New_Roman']">
    {/* Navbar */}
    <Navbar />

    {/* Booking section*/ }
     <Booking />    
       
    </div>
  );
};

export default HomePage;
