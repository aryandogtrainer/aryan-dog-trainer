import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Home, Sun, Moon, CalendarDays } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Basic Training",
      price: "₹4,000",
      duration: "2-3 weeks (depending on dog's behavior)",
      objective: "Introduce basic commands and establish good habits",
      features: [
        "Sit, Stay, Come, Down commands",
        "Leash training and walking etiquette",
        "Socialization with other dogs",
        "House training basics"
      ],
      idealFor: "Puppies and new dog owners who want a strong foundation",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Obedience Training",
      price: "₹5,000",
      duration: "3-4 weeks",
      objective: "Ensure your dog listens reliably in different environments",
      features: [
        "Advanced command training (heel, off, leave it)",
        "Response to verbal and hand signals",
        "Discouraging undesirable behaviors (jumping, barking)",
        "Reinforcement of leash manners"
      ],
      idealFor: "Dogs that already know basic commands but need more discipline",
      buttonColor: "bg-green-500 hover:bg-green-600",
      borderColor: "border-green-200",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "Guard Training",
      price: "₹6,000",
      duration: "4-5 weeks",
      objective: "Train your dog to act as a loyal and alert protector",
      features: [
        "Alerting and warning behaviors",
        "Controlled guarding techniques",
        "Responding to intruders without aggression to family members",
        "Controlled biting exercises (if necessary)"
      ],
      idealFor: "Homeowners and businesses seeking added security with their dog",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50",
      badge: "Most Popular"
    },
    {
      id: 4,
      title: "Advance Training",
      price: "₹7,000",
      duration: "5-6 weeks",
      objective: "Develop highly trained, disciplined, and responsive dogs",
      features: [
        "Combination of obedience + guard + agility training",
        "Problem behavior correction (aggression, anxiety)",
        "Specialized tasks or tricks",
        "Enhanced socialization and focus training"
      ],
      idealFor: "Owners wanting a fully trained dog for personal, security, or competitive purposes",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50"
    }
  ];

  const handleWhatsAppClick = (serviceName: string) => {
    const message = encodeURIComponent(`Hello Aryan i am interested in your ${serviceName} please contact me.`);
    const whatsappUrl = `https://wa.me/919719588684?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const boardingTypes = [
    {
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: "Day Care Boarding",
      price: "₹600 / day",
      desc: "Subah chhod do, shaam ko le jao. Cage-free play, naps aur supervised fun — busy pet parents ke liye perfect.",
      features: ["Cage-free open play area", "2 meals + water", "Rest & nap time", "Pickup till evening"]
    },
    {
      icon: <Moon className="w-8 h-8 text-blue-500" />,
      title: "Overnight Boarding",
      price: "₹900 / night",
      desc: "Ek raat ke liye out of town? Aapka dog Den mein safely sota hai — homely food aur supervised rest ke saath.",
      features: ["Cage-free sleeping area", "Dinner + breakfast", "Night supervision", "Daily WhatsApp update"]
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-green-500" />,
      title: "Long Stay Boarding",
      price: "₹800 / day (5+ days)",
      desc: "Long trip ya vacation? Long stay package mein discounted rate, fixed routine aur extra love — ghar jaisa.",
      features: ["Discounted daily rate", "Fixed walk + meal routine", "Daily photos & videos", "Grooming add-on available"],
      badge: "Best Value"
    },
    {
      icon: <Home className="w-8 h-8 text-purple-500" />,
      title: "VIP Private Boarding",
      price: "₹1,500 / day",
      desc: "Private room jaisa setup, extra one-on-one attention aur custom routine. Shy ya senior dogs ke liye ideal.",
      features: ["Private resting space", "1-on-1 attention", "Custom meal plan", "Priority updates"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our Services at Aryan’s Den</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto text-black">
            Cage-free boarding, training, walking & grooming — sab kuch ek hi Den mein.
          </p>
        </div>
      </section>

      {/* Dog Boarding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Dog Boarding Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the type of stay that suits your dog — har plan cage-free, supervised aur ghar jaisa care deta hai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardingTypes.map((b, i) => (
              <div key={i} className="relative bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:shadow-lg transition-all">
                {b.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {b.badge}
                    </span>
                  </div>
                )}
                <div className="mb-3">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{b.title}</h3>
                <div className="text-2xl font-bold text-orange-500 mb-3">{b.price}</div>
                <p className="text-sm text-gray-600 mb-4">{b.desc}</p>
                <ul className="space-y-2 mb-5">
                  {b.features.map((f, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsAppClick(b.title)}
                  className="w-full py-2.5 px-4 rounded-lg text-white font-medium bg-orange-500 hover:bg-orange-600 transition-colors text-sm"
                >
                  Book {b.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Header */}
      <section className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Dog Training Programs</h2>
          <p className="opacity-95">Calm, friendly aur proven training methods.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className={`relative bg-white rounded-2xl p-8 ${service.borderColor} border-2 shadow-sm hover:shadow-lg transition-all`}>
                {service.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {service.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{service.price}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span><strong>Duration:</strong></span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{service.duration}</p>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 mr-2 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span><strong>Objective:</strong></span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{service.objective}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Ideal For:</h4>
                  <p className="text-sm text-gray-600">{service.idealFor}</p>
                </div>

                <button 
                  onClick={() => handleWhatsAppClick(service.title)}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${service.buttonColor}`}
                >
                  Book {service.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
