import React from "react";
import "animate.css";
import Navbar from "./navBar";

const workers = [
  {
    name: "Dasun Pramuditha",
    position: "Senior Stylist",
    //image: "https://img.freepik.com/free-photo/hairdresser-getting-ready-their-clients_23-2149205931.jpg",
    image:"public/DasunDP.png",
    description: "With over 10 years of experience, John specializes in trendy and personalized hairstyles.",
    credentials: "Certified Hair Stylist, 10+ Years Experience",
    rating: 4,
    animationClass: "animate__fadeInLeft",
  },
  {
    name: "Jane Smith",
    position: "Hair Colorist",
    image: "https://img.freepik.com/free-photo/confident-young-handsome-male-barber-uniform-holding-scissors_141793-75115.jpg",
    description: "Jane is an expert in balayage, ombre, and highlights, delivering vibrant results.",
    credentials: "Specialist in Hair Coloring, Balayage Expert",
    rating: 5,
    animationClass: "animate__fadeInRight",
  },
  {
    name: "Michael Lee",
    position: "Barber",
    image: "https://img.freepik.com/free-photo/portrait-smiling-owner-hairdresser-salon_329181-1953.jpg",
    description: "Michael is known for precision cuts, beard shaping, and classic barbering.",
    credentials: "Master Barber, Experienced in Classic Cuts",
    rating: 4.5,
    animationClass: "animate__fadeInUp",
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return (
    <div className="flex space-x-1 text-yellow-400 ">
      {Array(fullStars).fill("★").map((s, i) => <span key={i}>{s}</span>)}
      {halfStar ? <span>☆</span> : null}
      {Array(emptyStars).fill("★").map((s, i) => <span key={i} className="text-gray-300">{s}</span>)}
    </div>
  );
};

const WorkersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 font-serif mt-15">
      <Navbar />
      <h2 className="text-3xl font-bold text-center mb-10 animate__animated animate__fadeInDown">Meet Our Experts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {workers.map((worker, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 animate__animated ${worker.animationClass}`}
          >
            <img src={worker.image} alt={worker.name} className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{worker.name}</h3>
              <h4 className="text-gray-400 mb-4">{worker.position}</h4>
              <p className="text-gray-300 text-sm mb-4">{worker.description}</p>
              <p className="text-gray-500 text-xs mb-4">{worker.credentials}</p>
              {renderStars(worker.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkersPage;
