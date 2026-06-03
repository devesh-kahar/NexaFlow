
const testimonials = [
    {
        name: "Jessica Morgan",
        role: "Senior Developer at Stripe",
        image:
            "https://images.pexels.com/photos/10041273/pexels-photo-10041273.jpeg",
        content: 
            "NexaFlow completely transformed how our team manages workflows. What used to take hours now happens automatically in the background.",
    },
    {
    name: "Ethan Clarke",
    role: "Tech Lead at Shopify",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The seamless integrations and real-time analytics gave us full visibility into our team's productivity. We ship twice as fast now.",
    },
    {
    name: "Sophia Nguyen",
    role: "CTO at BuildScale",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "We onboarded our entire 50-person team in a single afternoon. NexaFlow just works — no complicated setup, no steep learning curve.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
                    {/* Left Side - Header */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left">
                        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-bold mb-4 sm:mb-6">
                            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                                What developers are saying about us
                            </span>
                            <br />
                        </h2>
                        <p className="text-gray-400 text-base text-xl sm:text-lg mx-w-2xl mx-auto">
                            Join thousands of teams who use NexaFlow to automate workflows, collaborate seamlessly, and deliver results faster.
                        </p>
                    </div>

                    {/* Right side - testimonials */}

                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-6 sm:space-y-8">
                            {testimonials.map((testimonial, key) => (
                                <div
                                    key={key}   
                                    className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                                >
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="flex shrink-0">
                                            <div
                                                className="text-2xl sm:text-3xl lg:text-4xl font-bold
                                                bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                                            >
                                                ""
                                            </div>
                                        </div>

                                        <div className="flex-grow">
                                            <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                                                {testimonial.content}
                                            </p>
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.name} 
                                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h4 className="font-semibold text-white text-sm sm:text-base">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-gray-400">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div >
            </div>
        </section>
    );  
}