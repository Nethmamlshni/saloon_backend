import Booking from "./HomePages/booking";
import Navbar from "./HomePages/navBar";
import PriceList from "./HomePages/pricelist";
import EventPage from "./HomePages/specialevent";
import DisplayFeedback from "./HomePages/feedbackdisplay";
import Contact from "./HomePages/contact";
import Footer from "./HomePages/footer";

const HomePage: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E4E0E1] to-[#D6C0B3] p-6 font-['Times_New_Roman']">
      {/* Navbar */}
      <Navbar />

      {/* Booking section*/ }
      <Booking />    

      {/* Horizontal Line after Booking section */}
      <hr className="my-8 border-t-2 border-[#493628]" />

      {/* Price List */}
      <PriceList />

      {/* Horizontal Line after Price List */}
      <hr className="my-8 border-t-2 border-[#493628]" />

      {/* Special Events */}
      <EventPage />

      {/* Horizontal Line after Special Events */}
      <hr className="my-8 border-t-2 border-[#493628]" />

      {/* Feedback */}
      <DisplayFeedback />

      {/* Horizontal Line after Feedback */}
      <hr className="my-8 border-t-2 border-[#493628]" />

      {/* Contact */}
      <Contact />

      {/* Horizontal Line before Footer */}
      <hr className="my-8 border-t-2 border-[#493628]" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
