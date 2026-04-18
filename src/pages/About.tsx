import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart } from 'lucide-react';
import trainerProfile from '@/assets/trainer-profile.jpg';

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Dogs Trained" },
    { icon: <Clock className="w-6 h-6" />, number: "5+", label: "Years Experience" },
    { icon: <Award className="w-6 h-6" />, number: "100%", label: "Success Rate" },
    { icon: <Heart className="w-6 h-6" />, number: "24/7", label: "Support" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow">About Aryan Dog Trainer</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-black">
            Professional dog training services with a passion for building stronger bonds between dogs and their families
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={trainerProfile} 
                alt="Aryan - Professional Dog Trainer" 
                className="rounded-lg shadow-card w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Meet Aryan - Your Professional Dog Trainer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in professional dog training, Aryan has helped transform 
                  the lives of hundreds of dogs and their families across Delhi. His passion for animal 
                  behavior and positive reinforcement training methods has made him one of the most 
                  trusted dog trainers in the region.
                </p>
                <p>
                  Aryan specializes in various training methods including basic obedience, advanced commands, 
                  behavioral correction, and guard training. His approach combines patience, consistency, 
                  and proven techniques to ensure every dog reaches its full potential.
                </p>
                <p>
                  Whether you have a new puppy that needs basic training or an older dog with behavioral 
                  issues, Aryan creates customized training programs that work for both the dog and the family.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-center text-primary mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-secondary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Training Philosophy */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Our Training Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-secondary mb-3">Positive Reinforcement</h4>
                <p className="text-muted-foreground">
                  We believe in rewarding good behavior rather than punishing bad behavior. 
                  This creates a positive learning environment for your dog.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-3">Customized Approach</h4>
                <p className="text-muted-foreground">
                  Every dog is unique. We develop personalized training plans based on your 
                  dog's personality, age, and specific needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-3">Family Involvement</h4>
                <p className="text-muted-foreground">
                  We train both dogs and their families to ensure consistent results and 
                  strengthen the bond between you and your pet.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-3">Long-term Success</h4>
                <p className="text-muted-foreground">
                  Our goal is not just immediate results, but lasting behavioral changes 
                  that will benefit your dog throughout their life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
