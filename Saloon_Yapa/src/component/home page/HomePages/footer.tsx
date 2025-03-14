function Footer() {
    return (
            <div className="bg-[#AB886D] text-[#FBFBFB] p-4 rounded-lg shadow-lg flex flex-col items-center mt-6">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            {/* About Page Section */}
            <section id="about" >
                <div className="container mx-auto text-center ">
                    <p className="text-lg text-[#FBFBFB]">
                        At Saloon Yapa, we pride ourselves on providing top-notch beauty and wellness services to our valued customers.
                        Our experienced staff ensures that you receive the highest quality treatments in a relaxed and welcoming environment.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-white mt-12">
                <p>&copy; 2025 Saloon Yapa. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;
