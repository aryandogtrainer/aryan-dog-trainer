import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Gallery = () => {
  // Gallery Images Array - Easy to manage!
  // To add new images: simply add a new object to this array with 'url' and 'title' properties
  // Optional: add 'description' for additional text below the title
  const images = [
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0012.jpg', 
      title: 'Basic Training Session',
      description: 'Puppy learning basic commands'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG_20250612_144515.jpg', 
      title: 'Obedience Training',
      description: 'Advanced command training'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0009.jpg', 
      title: 'Success Story',
      description: 'Happy dog with owner'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0011.jpg', 
      title: '50 Dog Training Command',
      description: 'Full Training Guide'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0015.jpg', 
      title: 'Advanced Training',
      description: 'Agility and advanced commands'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0017.jpg', 
      title: 'Therapy Training',
      description: 'Emotional support training'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0018.jpg', 
      title: 'Some Movements pics',
      description: 'Agility and advanced commands'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0022.jpg', 
      title: 'Command Training',
      description: 'Agility and advanced commands'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0023.jpg', 
      title: 'Advanced Training',
      description: 'Agility and advanced commands'
    },
      { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0028.jpg', 
      title: 'silent Movements Training',
      description: 'Emotional support training'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0031.jpg', 
      title: 'forcefull and behaviour Training',
      description: 'Socialization training'
    },
    { 
      url: 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG20220708105436.jpg', 
      title: 'forcefull and behaviour Training',
      description: 'Socialization training'
    }
    
  ];

  // Fallback image for broken URLs
  const fallbackImage = 'https://raw.githubusercontent.com/aryandogtrainer/aryan-dog-trainer/main/src/assets/IMG-20250901-WA0012.jpg';

  // Handle image load errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Training Gallery</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-black">
            See our training sessions in action and success stories from happy dogs and their families
          </p>
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive grid: 1 column on mobile, 2 on tablet, 3-4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  {/* Square image container with hover effects */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content section */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-base text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {image.title}
                    </h3>
                    {image.description && (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {image.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Instructions for adding new images - commented out for cleaner UI
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold text-foreground mb-2">📸 How to Add New Images</h3>
            <p className="text-sm text-muted-foreground mb-3">
              To add new images to this gallery, simply update the <code className="bg-primary/10 px-2 py-1 rounded text-primary">images</code> array in the component:
            </p>
            <div className="bg-card p-4 rounded-md border text-sm font-mono">
              <div className="text-muted-foreground">// Add this to the images array:</div>
              <div className="text-foreground mt-1">
                {`{ url: 'your-image-url.jpg', title: 'Your Title', description: 'Optional description' }`}
              </div>
            </div>
          </div>
          */}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
