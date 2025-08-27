import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // For staggered animations in feature cards
          const featureCards = entry.target.querySelectorAll('.feature-card');
          featureCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    // Observe all fadeInUp elements
    const animatedElements = document.querySelectorAll('.fadeInUp');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null;
};

export default ScrollAnimations;
