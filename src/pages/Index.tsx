import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home, MessageCircle, Calendar, PhoneCall, Heart, Shield,
  Star, Sparkles, PawPrint, Clock, MapPin, ArrowRight
} from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.jpg';
import illusCageFree from '@/assets/illus-cagefree.png';
import illusFood from '@/assets/illus-food.png';
import illusUpdates from '@/assets/illus-updates.png';

const Index = () => {
  const handleWhatsApp = (msg: string) => {
    const url = `https://wa.me/919719588684?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const trustPoints = [
    {
      img: illusCageFree,
      title: "Cage-Free Stay",
      desc: "Yahan koi cage nahi, koi tight jagah nahi. Dogs khulle ghoomte hain, khelte hain aur aaram se sote hain — bilkul ghar jaisa mahaul, hamesha supervised."
    },
    {
      img: illusFood,
      title: "Homely Food & Routine",
      desc: "Aapke dog ka khaane ka time, walk ka time, sone ka time — sab waise hi follow karte hain jaise aap ghar pe karte ho. Ghar jaisa care, ghar jaisi feeling."
    },
    {
      img: illusUpdates,
      title: "Daily WhatsApp Updates",
      desc: "Roz photos aur videos bhejte hain — taaki aap door hote hue bhi apne baby ko dekh sako aur tension free reh sako."
    }
  ];

  const stats = [
    { num: "500+", label: "Happy Dogs" },
    { num: "5+ Yrs", label: "Experience" },
    { num: "100%", label: "Cage-Free" },
    { num: "24×7", label: "Supervision" }
  ];

  const dayInDen = [
    { time: "7 AM", title: "Morning Walk", desc: "Fresh air, sniff time aur thoda exercise.", icon: <PawPrint className="w-5 h-5" /> },
    { time: "9 AM", title: "Breakfast", desc: "Aapke dog ka usual ghar wala khaana.", icon: <Heart className="w-5 h-5" /> },
    { time: "12 PM", title: "Play Time", desc: "Cage-free area mein doston ke saath masti.", icon: <Sparkles className="w-5 h-5" /> },
    { time: "3 PM", title: "Nap & Cuddles", desc: "Comfortable rest spot pe shaant neend.", icon: <Home className="w-5 h-5" /> },
    { time: "6 PM", title: "Evening Walk", desc: "Ek aur round park aur fresh air ka.", icon: <PawPrint className="w-5 h-5" /> },
    { time: "9 PM", title: "Dinner & Sleep", desc: "Pet ke baad cozy bed aur sukoon ki neend.", icon: <Shield className="w-5 h-5" /> }
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden hero-gradient text-white">
        <div className="absolute inset-0 paw-pattern opacity-30" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-5">
                <Sparkles className="w-4 h-4" /> Delhi's favourite cage-free Den
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                Aryan's Den of <span className="text-yellow-300">Dogs</span> 🐾
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 opacity-95 italic">
                Jahan har dog ko milta hai ek doosra ghar.
              </p>

              <div className="space-y-3 text-base md:text-lg opacity-95 mb-8">
                <p>
                  Apne dog ko chhodne se pehle dil mein ek dar zarur aata hai — "Khana milega? Ro toh nahi raha hoga? Cage mein toh band nahi karenge?" Hum samajhte hain — kyunki hum khud dog parents hain.
                </p>
                <p>
                  Isiliye banaya humne <strong>Aryan's Den</strong> — ek <strong>cage-free dog boarding</strong> jagah Delhi mein, jahan aapka dog mehmaan nahi, family member ki tarah rehta hai.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base px-6 shadow-lg hover:scale-105 transition-transform"
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
                  className="text-base px-6 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-105 transition-transform"
                  onClick={() => handleWhatsApp("Hi Aryan, I want to know more about Aryan's Den of Dogs.")}
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-8 text-sm opacity-95">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />)}
                </div>
                <span>Rated 4.9/5 by 200+ pet parents</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" aria-hidden />
              <img
                src={heroIllustration}
                alt="Happy cage-free dogs playing at Aryan's Den of Dogs in Delhi"
                width={1280}
                height={960}
                className="relative rounded-3xl shadow-2xl w-full h-auto float-slow"
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white text-secondary rounded-2xl shadow-xl px-4 py-3 float-slower">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">100% Safe</p>
                    <p className="text-sm font-bold">Supervised 24×7</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-secondary rounded-2xl shadow-xl px-4 py-3 float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">500+ wagging tails</p>
                    <p className="text-sm font-bold">Loved by parents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.num}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 paw-pattern opacity-50" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Why Pet Parents Trust Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
              Sirf boarding nahi — ek <span className="text-primary">doosra ghar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kyunki aapka dog sirf ek pet nahi, family hai — aur hum bhi waise hi treat karte hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map((p, i) => (
              <Card key={i} className="text-center shadow-card hover:shadow-soft hover:-translate-y-2 transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-5">
                    <div className="w-32 h-32 rounded-full bg-orange-50 flex items-center justify-center">
                      <img src={p.img} alt={p.title} width={120} height={120} loading="lazy" className="wiggle w-24 h-24 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* A DAY AT THE DEN — Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              A Day at the Den
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
              Aapke dog ka <span className="text-primary">poora din</span> kaisa hota hai?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subah se raat tak — ek fixed routine, masti aur pyaar. Kuch bhi miss nahi hota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dayInDen.map((d, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-6 border-2 border-muted hover:border-primary hover:shadow-soft transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {d.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-primary mb-1">{d.time}</div>
                    <h3 className="font-bold text-secondary mb-1">{d.title}</h3>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN BOARDING */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Our #1 Service
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-5">
                Dog Boarding at <span className="text-primary">Aryan's Den</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Soch ke dekho — aap office ya trip pe ho, aur aapka dog ek aisi jagah hai jahan uska din khel-kood, walk, achhe khaane aur pyaar se bhara hota hai. Yahi to hai humara Den.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Cage-free environment, fixed routine, safe play area aur 24×7 supervision — sab kuch ek hi chhat ke neeche.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Day Care, Overnight, Long Stay & VIP Private options",
                  "Chhote pups se bade dogs tak — sabke liye care plan",
                  "Daily WhatsApp photos & videos guarantee"
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="w-3.5 h-3.5 text-green-600 fill-green-600" />
                    </div>
                    <span className="text-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/services">
                  <Button size="lg" className="px-8 shadow-lg hover:scale-105 transition-transform w-full sm:w-auto">
                    See Boarding Plans <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => handleWhatsApp("Hi Aryan, I want to book dog boarding at the Den.")}
                >
                  Book on WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroIllustration}
                alt="Cage-free dog boarding play area at Aryan's Den"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-3">Aur Kya Kya Karte Hain Hum</h2>
            <p className="text-muted-foreground">Boarding ke saath ye services bhi available hain —</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Dog Training", emoji: "🎾", desc: "Basic commands se lekar advanced obedience tak — calm aur friendly methods se.", color: "from-blue-50 to-blue-100" },
              { title: "Dog Walking", emoji: "🚶", desc: "Roz fixed time pe safe walk, taaki aapka dog active aur khush rahe.", color: "from-green-50 to-green-100" },
              { title: "Grooming", emoji: "🛁", desc: "Bath, brushing, nail care — sab kuch gentle hands se, ghar jaisa care.", color: "from-purple-50 to-purple-100" }
            ].map((s, i) => (
              <div key={i} className={`text-center rounded-3xl p-8 bg-gradient-to-br ${s.color} hover:-translate-y-2 transition-transform shadow-card`}>
                <div className="text-6xl mb-4 inline-block wiggle">{s.emoji}</div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-3">Pet Parents Kya Bolte Hain</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-muted-foreground">Rated 4.9/5 by 200+ Delhi pet parents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rohit", area: "Dwarka", text: "Pehli baar Bruno ko 5 din ke liye chhoda tha, dil bhaari tha. But Aryan bhai ne roz video bheji, Bruno khush dikha. Ab toh wo khud Den jaane ko ready ho jaata hai 😄" },
              { name: "Neha", area: "Janakpuri", text: "Cage-free hai sach mein, maine khud visit kiya tha. Saaf jagah, dogs khel rahe the, koi tension nahi. Highly recommend for Delhi pet parents." },
              { name: "Aman", area: "Rohini", text: "Vacation pe gaye the 10 din ke liye. Daily updates milte the WhatsApp pe. Wapas aaya toh Coco bilkul fresh aur khush tha. Trust ban gaya!" }
            ].map((t, i) => (
              <Card key={i} className="shadow-card hover:shadow-soft transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground italic mb-5 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-secondary">{t.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.area}, Delhi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-10 text-sm text-muted-foreground">
            Powered by <strong className="text-secondary">Aryan Dog Trainer</strong> — 5+ Years of Experience 🐶
          </p>
        </div>
      </section>

      {/* OFFER */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" aria-hidden />
        <div className="absolute inset-0 paw-pattern opacity-20" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🎉 Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">First Booking? Get <span className="text-yellow-300">10% OFF</span></h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Pehli baar Den try kar rahe ho? Ek baar visit karo, dog ko jagah dikhao — phir decide karna.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-lg hover:scale-105 transition-transform"
              onClick={() => handleWhatsApp("Hi Aryan, I want to claim the 10% first booking discount at the Den.")}
            >
              <MessageCircle className="w-5 h-5" /> Claim 10% Off
            </Button>
            <a href="tel:+919719588684">
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white w-full sm:w-auto">
                <PhoneCall className="w-5 h-5" /> Call +91 9719588684
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="text-5xl mb-4">🐾</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Aapka Dog Safe Haathon Mein Hai
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Trust, safety aur ek wagging tail — yahi humara promise hai. Ek baar Den dekh lo, baaki sab feel apne aap aa jayega.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 w-full sm:w-auto shadow-lg hover:scale-105 transition-transform">
                Schedule a Den Visit
              </Button>
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
