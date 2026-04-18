import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Calendar, MessageCircle, PhoneCall, Star, MapPin,
  Shield, Heart, CheckCircle2
} from 'lucide-react';
import trainerHero from '@/assets/trainer-hero.jpg';
import iconBoarding from '@/assets/icon-boarding.png';
import iconGrooming from '@/assets/icon-grooming.png';
import iconTraining from '@/assets/icon-training.png';
import iconWalking from '@/assets/icon-walking.png';

const Index = () => {
  const handleWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919719588684?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const services = [
    { icon: iconBoarding, title: 'Dog Boarding', desc: 'Cage-free, safe & spacious stays with 24×7 ghar jaisa care.', link: '/services' },
    { icon: iconGrooming, title: 'Dog Grooming', desc: 'Bath, brushing aur nail care — gentle hands se sab kuch.', link: '/services' },
    { icon: iconTraining, title: 'Dog Training', desc: 'Basic se advanced obedience tak — calm, friendly methods se.', link: '/services' },
    { icon: iconWalking,  title: 'Dog Walking',  desc: 'Roz fixed time pe safe walk, taaki dog active aur khush rahe.', link: '/services' },
  ];

  const testimonials = [
    { name: 'Rohit', area: 'Dwarka',     text: 'Pehli baar Bruno ko 5 din chhoda tha, dil bhaari tha. Aryan bhai roz video bhejte the. Ab Bruno khud Den jaane ko ready!' },
    { name: 'Neha',  area: 'Janakpuri',  text: 'Cage-free hai sach mein. Maine khud visit kiya — saaf jagah, dogs khel rahe the. Highly recommend.' },
    { name: 'Aman',  area: 'Rohini',     text: '10 din vacation pe gaye the. Daily updates milte the WhatsApp pe. Wapas aaya toh Coco bilkul fresh tha.' },
  ];

  const marqueeWords = ['Cage-Free', '24×7 Care', 'Daily Updates', 'Ghar Jaisa Khaana', '5+ Years', 'Trusted by 500+ Parents'];

  return (
    <div className="bg-background">
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 dot-grid opacity-70 hidden md:block" aria-hidden />
        <div className="absolute bottom-20 left-10 w-20 h-20 dot-grid opacity-60 hidden md:block" aria-hidden />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="fade-up">
              <span className="eyebrow mb-5">Enjoy your vacation</span>
              <h1 className="font-display text-5xl md:text-7xl text-secondary leading-[1.05] mb-6 mt-3">
                We Pamper Your <br/>
                <span className="relative inline-block">
                  Pup Like
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/60 -z-0" aria-hidden />
                </span>{' '}
                <span className="text-primary">Family !</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Delhi ka pehla cage-free dog boarding Den. Ghar jaisa khaana, fixed routine, daily WhatsApp updates aur 24×7 supervision — sab kuch ek hi chhat ke neeche.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  size="lg"
                  className="text-base px-8 h-14 rounded-full shadow-soft hover:scale-105 transition-transform"
                  onClick={() => handleWhatsApp("Hi Aryan, I want to book a stay at Aryan's Den.")}
                >
                  <Calendar className="w-5 h-5" /> Make Appointment
                </Button>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 h-14 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto"
                  >
                    Schedule Den Tour <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['R','N','A','S'].map((c,i)=>(
                    <div key={i} className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold border-2 border-background">{c}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    <span className="ml-1 text-sm font-semibold text-secondary">4.9/5</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Loved by 500+ Delhi pet parents</p>
                </div>
              </div>
            </div>

            {/* Hero Image with torn edge */}
            <div className="relative">
              <div className="absolute -inset-6 dot-grid opacity-50 -z-10" aria-hidden />
              <img
                src={trainerHero}
                alt="Aryan with a happy Labrador at Aryan's Den of Dogs in Delhi"
                width={1280}
                height={1280}
                className="w-full h-auto torn-edge"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft p-5 float-slow border border-border max-w-[220px]">
                <div className="font-display text-4xl text-primary leading-none">5+</div>
                <p className="text-sm font-semibold text-secondary mt-1">Years Experienced Trainer</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full px-5 py-3 shadow-soft float-slower">
                <p className="text-sm font-bold flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> 100% Cage-Free</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden border-y-4 border-primary">
          <div className="marquee flex gap-12 whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w,i)=>(
              <span key={i} className="font-display text-2xl flex items-center gap-12">
                {w} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="eyebrow">Our Services</span>
            <h2 className="font-display text-4xl md:text-6xl text-secondary mt-3">
              Where Every Dog <span className="text-primary">Feels at Home</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link to={s.link} key={i} className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-soft hover:-translate-y-2 transition-all duration-300 border border-border">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <img src={s.icon} alt={s.title} width={64} height={64} loading="lazy" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="font-display text-2xl text-secondary mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ABOUT ============== */}
      <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 dot-grid opacity-60 hidden md:block" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={trainerHero}
                alt="Aryan caring for a dog at the Den"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full h-auto torn-edge"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl shadow-soft px-6 py-4">
                <div className="font-display text-3xl leading-none">500+</div>
                <p className="text-xs font-semibold mt-1">Happy Tails Wagged</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="eyebrow">About Us</span>
              <h2 className="font-display text-4xl md:text-6xl text-secondary mt-3 mb-6 leading-[1.05]">
                Where Every Dog <br/>
                <span className="text-primary italic">Feels at Home</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Aryan’s Den of Dogs sirf ek boarding nahi — ek loving, safe aur joyful jagah hai aapke furry family member ke liye. Spacious cage-free stays, round-the-clock care, playtime, training aur ghar jaisa khaana — sab kuch ek hi Den mein.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Certified Trainer',
                  '24/7 Supervision',
                  'Cage-Free Play Areas',
                  'Daily WhatsApp Updates'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-semibold text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button size="lg" className="rounded-full px-8 h-13 shadow-soft">
                  Discover More <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA BANNER ============== */}
      <section className="py-16 md:py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 paw-pattern opacity-100" aria-hidden />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="eyebrow !text-primary">While you Relax</span>
          <h2 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[1.05]">
            We Keep Their <br/>
            <span className="text-primary italic">Tails Wagging !</span>
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            First booking pe <strong className="text-primary">10% OFF</strong>. Ek baar Den dekh lo, baaki sab feel apne aap aa jayega.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 h-14 shadow-soft hover:scale-105 transition-transform"
              onClick={() => handleWhatsApp("Hi Aryan, I want to claim the 10% first booking discount.")}
            >
              <MessageCircle className="w-5 h-5" /> Claim 10% Off on WhatsApp
            </Button>
            <a href="tel:+919719588684">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                <PhoneCall className="w-5 h-5" /> +91 9719588684
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="eyebrow">Clients Feedback</span>
            <h2 className="font-display text-4xl md:text-6xl text-secondary mt-3">
              Pet Parents <span className="text-primary italic">Love Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-shadow border border-border relative">
                <div className="absolute -top-5 left-8 bg-primary text-secondary rounded-full w-12 h-12 flex items-center justify-center font-display text-3xl shadow-soft">“</div>
                <div className="flex items-center gap-1 mb-4 mt-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-display text-lg text-secondary leading-none">{t.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {t.area}, Delhi
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 dot-grid opacity-60 hidden md:block" aria-hidden />
        <div className="absolute bottom-10 right-10 w-32 h-32 dot-grid opacity-60 hidden md:block" aria-hidden />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <span className="eyebrow">Ready When You Are</span>
          <h2 className="font-display text-4xl md:text-6xl text-secondary mt-3 mb-6 leading-[1.05]">
            Train the <span className="text-primary italic">Best Friend</span> <br/>
            You Deserve!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Trust, safety aur ek wagging tail — yahi humara promise hai. Aaj hi appointment book karo.
          </p>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Heart className="w-5 h-5 fill-primary text-primary" />
            <p className="text-sm text-secondary font-semibold">Powered by Aryan Dog Trainer · 5+ Years of Experience</p>
            <Heart className="w-5 h-5 fill-primary text-primary" />
          </div>
          <Button
            size="lg"
            className="mt-6 rounded-full px-10 h-14 shadow-soft hover:scale-105 transition-transform"
            onClick={() => handleWhatsApp("Hi Aryan, I want to make an appointment at the Den.")}
          >
            Make Appointment <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
