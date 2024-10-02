document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
  
    // Create header
    const header = document.createElement('header');
    header.className = 'bg-[#1230AE] text-white p-4';
    header.innerHTML = `
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">TrustVideo</h1>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-[#C68FE6] transition-colors">Home</a></li>
          <li><a href="#" class="hover:text-[#C68FE6] transition-colors">About</a></li>
          <li><a href="#" class="hover:text-[#C68FE6] transition-colors">Contact</a></li>
        </ul>
      </nav>
    `;
    app.appendChild(header);
  
    // Create main content
    const main = document.createElement('main');
    
    // Hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'container mx-auto py-20 text-center';
    heroSection.innerHTML = `
      <h2 class="text-4xl font-bold mb-6 text-[#1230AE] opacity-0 transform translate-y-[-20px]">Enhancing Video Content Trustworthiness</h2>
      <p class="text-xl mb-12 text-[#6C48C5] opacity-0 transform translate-y-[-20px]">Verify, Attribute, and Protect Your Video Content</p>
      <button class="bg-[#6C48C5] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1230AE] transition-colors">Get Started</button>
    `;
    main.appendChild(heroSection);
  
    // Animate hero section
    setTimeout(() => {
      heroSection.querySelector('h2').style.transition = 'opacity 0.5s, transform 0.5s';
      heroSection.querySelector('h2').style.opacity = '1';
      heroSection.querySelector('h2').style.transform = 'translateY(0)';
      
      setTimeout(() => {
        heroSection.querySelector('p').style.transition = 'opacity 0.5s, transform 0.5s';
        heroSection.querySelector('p').style.opacity = '1';
        heroSection.querySelector('p').style.transform = 'translateY(0)';
      }, 200);
    }, 100);
  
    // Features section
    const featuresSection = document.createElement('section');
    featuresSection.className = 'bg-white py-20';
    featuresSection.innerHTML = `
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold mb-12 text-center text-[#1230AE]">Our Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="features-grid"></div>
      </div>
    `;
    main.appendChild(featuresSection);
  
    const features = [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        title: "Establish Credentials",
        description: "Verify and track content creators' credentials throughout the video supply chain."
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>',
        title: "Ensure Attribution",
        description: "Easily establish the original source and attribution of video content."
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
        title: "Detect Tampering",
        description: "Identify if video content has been altered or manipulated in any way."
      }
    ];
  
    const featuresGrid = featuresSection.querySelector('#features-grid');
    features.forEach((feature, index) => {
      const featureCard = document.createElement('div');
      featureCard.className = 'bg-[#FFF7F7] p-6 rounded-lg shadow-md';
      featureCard.innerHTML = `
        <div class="text-[#6C48C5] mb-4">${feature.icon}</div>
        <h4 class="text-xl font-semibold mb-2 text-[#1230AE]">${feature.title}</h4>
        <p class="text-[#6C48C5]">${feature.description}</p>
      `;
      
      featureCard.addEventListener('mouseenter', () => {
        featureCard.style.transform = 'scale(1.05)';
        featureCard.style.transition = 'transform 0.3s';
        
        const underline = document.createElement('div');
        underline.className = 'mt-4 h-1 bg-[#C68FE6]';
        underline.style.width = '0';
        featureCard.appendChild(underline);
        
        setTimeout(() => {
          underline.style.transition = 'width 0.3s';
          underline.style.width = '100%';
        }, 50);
      });
  
      featureCard.addEventListener('mouseleave', () => {
        featureCard.style.transform = 'scale(1)';
        const underline = featureCard.querySelector('.bg-[#C68FE6]');
        if (underline) {
          underline.remove();
        }
      });
  
      featuresGrid.appendChild(featureCard);
    });
  
    app.appendChild(main);
  
    // Create footer
    const footer = document.createElement('footer');
    footer.className = 'bg-[#1230AE] text-white py-8';
    footer.innerHTML = `
      <div class="container mx-auto text-center">
        <p>&copy; 2024 TrustVideo. All rights reserved.</p>
      </div>
    `;
    app.appendChild(footer);
  
    // Add global styles
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #FFF7F7;
      }
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      .grid {
        display: grid;
      }
      .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      @media (min-width: 768px) {
        .md\\:grid-cols-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      .gap-8 {
        gap: 2rem;
      }
      .flex {
        display: flex;
      }
      .justify-between {
        justify-content: space-between;
      }
      .items-center {
        align-items: center;
      }
      .space-x-4 > * + * {
        margin-left: 1rem;
      }
      .rounded-full {
        border-radius: 9999px;
      }
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .shadow-md {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .transition-colors {
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      .transform {
        transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
    `;
    document.head.appendChild(style);
  });