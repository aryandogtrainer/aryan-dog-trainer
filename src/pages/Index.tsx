import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Camera, MessageCircle, Calendar, PhoneCall } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/919719588684?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const trustPoints = [
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: "Cage-Free Stay",
      desc: "Yahan koi cage nahi, koi tight jagah nahi. Dogs khulle ghoomte hain, khelte hain aur aaram se sote hain — bilkul ghar jaisa mahaul, hamesha supervised."
    },
    {
      icon: <Utensils className="w-10 h-10 text-primary" />,
      title: "Homely Food & Routine",
      desc: "Aapke dog ka khaane ka time, walk ka time, sone ka time — sab waise hi follow karte hain jaise aap ghar pe karte ho. Ghar jaisa care, ghar jaisi feeling."
    },
    {
      icon: <Camera className="w-10 h-10 text-primary" />,
      title: "Daily Updates",
      desc: "Roz WhatsApp pe photos aur videos bhejte hain — taaki aap door hote hue bhi apne baby ko dekh sako aur tension free reh sako."
    }
  ];

  return (
    <div>
      {/* SEO H1 + Hero */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">
                Aryan's Den of Dogs
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 opacity-95 italic">
                Jahan har dog ko milta hai ek doosra ghar. 🐾
              </p>

              <div className="space-y-4 text-base md:text-lg opacity-95 mb-8">
                <p>
                  Apne dog ko kisi ke paas chhodne se pehle dil mein ek dar zarur aata hai — "Khana time pe milega ya nahi? Ro toh nahi raha hoga? Cage mein toh band nahi karenge?" Hum yeh feeling samajhte hain, kyunki hum khud dog parents hain.
                </p>
                <p>
                  Isiliye humne banaya <strong>Aryan's Den</strong> — ek <strong>cage-free dog boarding</strong> jagah Delhi mein, jahan aapka dog ek mehmaan nahi, family member ki tarah rehta hai. Na koi kennel jaisi feeling, na koi ghutan — bas khulla mahaul, pyaar aur 24x7 dekh-bhaal.
                </p>
                <p>
                  Aap nikal jao kaam ya trip pe — Den mein aapka baby mast khelta, khaata aur aaram se sota milega.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base px-6"
                  onClick={() => handleWhatsApp("Hi Aryan, I want to book a stay for my dog at the Den.")}
                >
                  <Calendar className="w-5 h-5" /> Book a Stay
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-base px-6 border-white text-black hover:bg-white hover:text-primary w-full sm:w-auto">
                    <Home className="w-5 h-5" /> Schedule a Den Tour
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="text-base px-6 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleWhatsApp("Hi Aryan, I want to know more about Aryan's Den of Dogs.")}
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </Button>
              </div>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Cage-free dog boarding at Aryan's Den of Dogs in Delhi"
                className="rounded-lg shadow-soft w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
              Why Pet Parents Trust Our Den
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kyunki aapka dog sirf ek pet nahi, family hai — aur hum bhi waise hi treat karte hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map((p, i) => (
              <Card key={i} className="text-center shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{p.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{p.title}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Service - Dog Boarding */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Dog Boarding at Aryan's Den of Dogs
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Soch ke dekho — aap office ya trip pe ho, aur aapka dog ek aisi jagah hai jahan uska din khel-kood, walk, achhe khaane aur pyaar se bhara hota hai. Yahi to hai humara Den.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Cage-free environment, fixed routine, safe play area, comfortable rest spots aur 24x7 supervision — sab kuch ek hi chhat ke neeche. Chhote pups se lekar bade dogs tak, sabke liye alag-alag care plan hota hai.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Ye sirf <strong>dog daycare in Delhi</strong> nahi hai — ye ek aisi jagah hai jahan aapka dog wapas jaane ka mann hi nahi karta. 😄
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="px-8">See Boarding Plans</Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => handleWhatsApp("Hi Aryan, I want to book dog boarding at the Den.")}
            >
              Book Boarding on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Aur Kya Kya Karte Hain Hum</h2>
            <p className="text-muted-foreground">Boarding ke saath ye services bhi available hain —</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Dog Training", emoji: "🎾", desc: "Basic commands se lekar advanced obedience tak — calm aur friendly methods se." },
              { title: "Dog Walking", emoji: "🚶", desc: "Roz fixed time pe safe walk, taaki aapka dog active aur khush rahe." },
              { title: "Grooming", emoji: "🛁", desc: "Bath, brushing, nail care — sab kuch gentle hands se, ghar jaisa care." }
            ].map((s, i) => (
              <Card key={i} className="text-center shadow-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{s.emoji}</div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">Pet Parents Kya Bolte Hain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-3">
                  "Pehli baar Bruno ko 5 din ke liye chhoda tha, dil bhaari tha. But Aryan bhai ne roz video bheji, Bruno khush dikha. Ab toh wo khud Den jaane ko ready ho jaata hai 😄"
                </p>
                <p className="font-semibold text-secondary">— Rohit, Dwarka</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic mb-3">
                  "Cage-free hai sach mein, maine khud visit kiya tha. Saaf jagah, dogs khel rahe the, koi tension nahi. Highly recommend for Delhi pet parents."
                </p>
                <p className="font-semibold text-secondary">— Neha, Janakpuri</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Powered by <strong>Aryan Dog Trainer</strong> — 5+ Years of Experience 🐶
          </p>
        </div>
      </section>

      {/* Offer */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">First Booking? 10% OFF 🎉</h2>
          <p className="text-lg mb-6 opacity-95">
            Pehli baar Den try kar rahe ho? Hum aapke liye <strong>10% discount</strong> rakh rahe hain. Ek baar visit karo, dog ko jagah dikhao — phir decide karna.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleWhatsApp("Hi Aryan, I want to claim the 10% first booking discount at the Den.")}
            >
              <MessageCircle className="w-5 h-5" /> Claim 10% Off on WhatsApp
            </Button>
            <a href="tel:+919719588684">
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white w-full sm:w-auto">
                <PhoneCall className="w-5 h-5" /> Call +91 9719588684
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Aapka Dog Safe Haathon Mein Hai 🐾
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Trust, safety aur ek wagging tail — yahi humara promise hai. Ek baar Den dekh lo, baaki sab feel apne aap aa jayega.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 w-full sm:w-auto">Schedule a Den Visit</Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-current"
              onClick={() => handleWhatsApp("Hi Aryan, I want to book my dog at Aryan's Den.")}
            >
              Book Now on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
