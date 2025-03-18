import React from "react";
import "animate.css";
import Navbar from "./navBar";

const services = [
  {
    title: "STYLING",
    image: "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?t=st=1742223036~exp=1742226636~hmac=b7ef1b99815995c215c48e7a339a83e11d93564854cb01867055213bf208347a&w=1800",
    description: "Get the perfect look for any occasion with our professional hairstyling services.",
    credit: "Images from Freepik"
  },
  {
    title: "HAIRCUT",
    image: "https://img.freepik.com/free-photo/stylish-man-sitting-barbershop_1157-21499.jpg?t=st=1742220401~exp=1742224001~hmac=5794f7a60e9d1890fab3405051e2e1cdfa9fa360163c2162f3cb801c92864f4b&w=1800",
    description: "Refresh your style with a precise and stylish haircut tailored to your preferences."
  },
  {
    title: "COLOR",
    image: "https://img.freepik.com/free-photo/handsome-man-barbershop-shaving-beard_1303-26258.jpg?t=st=1742223064~exp=1742226664~hmac=efee79b85c76d258503346a00043cb4abbae07ec241236eda61c49f5c4f39b46&w=1800",
    description: "Transform your hair with vibrant colors, highlights, or balayage."
  },
  {
    title: "SPECIALS",
    image: "https://img.freepik.com/free-photo/handsome-man-barber-shop-styling-hair_1303-20978.jpg?t=st=1742222751~exp=1742226351~hmac=430cc1dedba29832f4a1dd5ebbc5a1cba169f475155eb65a9438df0e1a811c7a&w=1800",
    description: "Enjoy exclusive salon specials, including seasonal discounts and customized beauty packages."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 mt-15">
      <h1 className="text-4xl font-serif text-center animate__animated animate__fadeInDown mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp"
          >
            <img src={service.image} alt={service.title} className="w-full h-52 object-cover rounded-lg mb-4 hover:opacity-80 transition-opacity duration-300" />
            <h3 className="text-2xl font-serif font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 font-serif">{service.description}</p>
            {service.credit && <p className="text-xs text-gray-500 mt-2">{service.credit}</p>}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
