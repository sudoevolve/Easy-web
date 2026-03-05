import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Activity, Cpu, Globe, Zap, Menu, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = ({ preset, allPresets }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { colors, fonts } = preset.theme;

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-500 rounded-full px-6 py-4 flex items-center justify-between
        ${scrolled 
          ? `bg-[${colors.background}]/60 backdrop-blur-xl border border-[${colors.text}]/10 shadow-lg` 
          : 'bg-transparent'
        }`}
      style={{
        backgroundColor: scrolled ? `${colors.background}99` : 'transparent',
        borderColor: scrolled ? `${colors.text}1A` : 'transparent',
      }}
    >
      <div className={`text-xl font-bold tracking-tight ${fonts.heading}`} style={{ color: scrolled ? colors.primary : '#FFFFFF' }}>
        {preset.content.brandName}
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {['Philosophy', 'Protocol', 'Membership'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className={`text-sm font-medium transition-transform hover:-translate-y-0.5 ${fonts.subheading}`}
            style={{ color: scrolled ? colors.text : '#FFFFFF' }}
          >
            {item}
          </a>
        ))}
        
        {/* Preset Switcher for Demo */}
        <div className="flex gap-2 ml-4 border-l pl-4" style={{ borderColor: scrolled ? `${colors.text}33` : '#FFFFFF33' }}>
            {Object.keys(allPresets).map(key => (
                <Link 
                    key={key} 
                    to={key === 'A' ? '/' : `/preset-${key.toLowerCase()}`}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:scale-110 ${preset.id === key ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                    style={{ backgroundColor: allPresets[key].theme.colors.primary, color: '#FFF' }}
                    title={allPresets[key].name}
                >
                    {key}
                </Link>
            ))}
        </div>
      </div>

      <button 
        className={`hidden md:flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 ${fonts.heading}`}
        style={{ backgroundColor: colors.accent, color: '#FFFFFF' }}
      >
        {preset.content.cta}
      </button>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ color: scrolled ? colors.text : '#FFFFFF' }}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>
      
       {/* Mobile Menu Overlay */}
       {mobileMenuOpen && (
        <div 
            className="absolute top-full left-0 mt-4 w-full rounded-[2rem] p-6 flex flex-col gap-4 shadow-2xl md:hidden"
            style={{ backgroundColor: colors.background }}
        >
             {['Philosophy', 'Protocol', 'Membership'].map((item) => (
                <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium ${fonts.subheading}`}
                    style={{ color: colors.text }}
                >
                    {item}
                </a>
            ))}
            <div className="h-px w-full bg-current opacity-10" />
            <div className="flex gap-4">
                 {Object.keys(allPresets).map(key => (
                    <Link 
                        key={key} 
                        to={key === 'A' ? '/' : `/preset-${key.toLowerCase()}`}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}
                        style={{ backgroundColor: allPresets[key].theme.colors.primary, color: '#FFF' }}
                    >
                        {key}
                    </Link>
                ))}
            </div>
        </div>
       )}
    </nav>
  );
};

const Hero = ({ preset }) => {
  const containerRef = useRef(null);
  const { colors, fonts, imageMood } = preset.theme;
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, [preset]);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(https://source.unsplash.com/1600x900/?${imageMood.replace(/ /g, ',')})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to top, #000000 0%, ${colors.primary}CC 60%, ${colors.primary}40 100%)`
        }}
      />

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-32">
        <div className="max-w-4xl">
          <h1 className="flex flex-col">
            <span 
                className={`hero-text text-5xl md:text-7xl lg:text-8xl font-bold mb-4 ${fonts.heading}`}
                style={{ color: '#FFFFFF' }}
            >
              {preset.content.hero.line1}
            </span>
            <span 
                className={`hero-text text-6xl md:text-8xl lg:text-9xl italic ${fonts.drama}`}
                style={{ color: colors.accent }}
            >
              {preset.content.hero.line2}
            </span>
          </h1>
          
          <p 
            className={`hero-text mt-8 text-xl md:text-2xl max-w-xl opacity-90 ${fonts.subheading}`}
            style={{ color: '#E0E0E0' }}
          >
            {preset.content.purpose}
          </p>

          <button 
            className={`hero-text mt-10 px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 transition-transform hover:scale-105 ${fonts.heading}`}
            style={{ backgroundColor: colors.accent, color: '#FFFFFF' }}
          >
            {preset.content.cta} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ShufflerCard = ({ title, desc, labels, theme }) => {
    const [active, setActive] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % labels.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [labels]);

    return (
        <div className="relative h-full flex flex-col justify-between">
            <div>
                <h3 className={`text-2xl font-bold mb-2 ${theme.fonts.heading}`} style={{ color: theme.colors.text }}>{title}</h3>
                <p className={`opacity-70 ${theme.fonts.subheading}`} style={{ color: theme.colors.text }}>{desc}</p>
            </div>
            
            <div className="relative h-32 mt-8 overflow-hidden">
                {labels.map((label, i) => {
                    const offset = (i - active + labels.length) % labels.length;
                    // 0 is active, 1 is next, 2 is last (hidden/waiting)
                    let y = 0;
                    let opacity = 0;
                    let scale = 0.8;
                    let zIndex = 0;

                    if (offset === 0) {
                        y = 0; opacity = 1; scale = 1; zIndex = 10;
                    } else if (offset === 1) {
                        y = 100; opacity = 0; scale = 0.9; zIndex = 5;
                    } else {
                        y = -100; opacity = 0; scale = 0.9; zIndex = 1;
                    }
                    
                    // Simple stack simulation
                     return (
                        <div 
                            key={i}
                            className={`absolute inset-0 flex items-center justify-center rounded-xl border transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
                            style={{ 
                                backgroundColor: theme.colors.background,
                                borderColor: `${theme.colors.text}20`,
                                transform: `translateY(${offset * 10}px) scale(${1 - offset * 0.05})`,
                                opacity: offset === 0 ? 1 : 0.5 - (offset * 0.2),
                                zIndex: labels.length - offset
                            }}
                        >
                            <span className={`text-lg font-bold ${theme.fonts.data}`} style={{ color: theme.colors.primary }}>
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TypewriterCard = ({ title, desc, labels, theme }) => {
    const [text, setText] = useState('');
    const fullText = labels[0] || "System Active";
    
    useEffect(() => {
        let i = 0;
        let direction = 1;
        const interval = setInterval(() => {
            if (direction === 1) {
                if (i <= fullText.length) {
                    setText(fullText.substring(0, i));
                    i++;
                } else {
                    direction = -1;
                    setTimeout(() => {}, 1000); // pause
                }
            } else {
                if (i >= 0) {
                    setText(fullText.substring(0, i));
                    i--;
                } else {
                    direction = 1;
                }
            }
        }, 150);
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <h3 className={`text-2xl font-bold mb-2 ${theme.fonts.heading}`} style={{ color: theme.colors.text }}>{title}</h3>
                <p className={`opacity-70 ${theme.fonts.subheading}`} style={{ color: theme.colors.text }}>{desc}</p>
            </div>
            
            <div className="mt-8 p-4 rounded-xl border bg-black/5 font-mono text-sm h-32 overflow-hidden relative">
                 <div className={`absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: theme.colors.accent }} />
                 <div className={`${theme.fonts.data}`} style={{ color: theme.colors.text }}>
                    {'>'} {text}
                    <span className="animate-pulse" style={{ color: theme.colors.accent }}>_</span>
                 </div>
                 <div className="mt-2 opacity-50 text-xs">
                    <div>CPU: 42%</div>
                    <div>MEM: 1.2GB</div>
                    <div>NET: CONNECTED</div>
                 </div>
            </div>
        </div>
    )
}

const SchedulerCard = ({ title, desc, labels, theme }) => {
    const [activeDay, setActiveDay] = useState(2);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDay(prev => (prev + 1) % 7);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <h3 className={`text-2xl font-bold mb-2 ${theme.fonts.heading}`} style={{ color: theme.colors.text }}>{title}</h3>
                <p className={`opacity-70 ${theme.fonts.subheading}`} style={{ color: theme.colors.text }}>{desc}</p>
            </div>
            
            <div className="mt-8 grid grid-cols-7 gap-1">
                {['S','M','T','W','T','F','S'].map((day, i) => (
                    <div 
                        key={i} 
                        className={`aspect-square rounded flex items-center justify-center text-xs font-bold transition-colors duration-300`}
                        style={{ 
                            backgroundColor: i === activeDay ? theme.colors.accent : `${theme.colors.text}10`,
                            color: i === activeDay ? '#FFF' : theme.colors.text
                        }}
                    >
                        {day}
                    </div>
                ))}
                <div className="col-span-7 mt-4 flex items-center gap-2">
                     <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: theme.colors.accent }} />
                     <span className={`text-xs ${theme.fonts.data}`} style={{ color: theme.colors.text }}>
                        {labels[activeDay % labels.length] || "Scheduled"}
                     </span>
                </div>
            </div>
        </div>
    )
}

const Features = ({ preset }) => {
    const { colors, fonts } = preset.theme;
    
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto" style={{ backgroundColor: colors.background }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {preset.content.features.map((feature, i) => {
                    const CardComponent = i === 0 ? ShufflerCard : i === 1 ? TypewriterCard : SchedulerCard;
                    
                    return (
                        <div 
                            key={i}
                            className="p-8 rounded-[2rem] border shadow-lg hover:-translate-y-2 transition-transform duration-300"
                            style={{ 
                                backgroundColor: colors.surface, 
                                borderColor: `${colors.text}10` 
                            }}
                        >
                            <CardComponent 
                                title={feature.title} 
                                desc={feature.desc} 
                                labels={feature.labels} 
                                theme={preset.theme} 
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

const Philosophy = ({ preset }) => {
    const { colors, fonts, imageMood } = preset.theme;
    const ref = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".philo-text", {
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section 
            id="philosophy"
            ref={ref}
            className="relative py-32 overflow-hidden"
            style={{ backgroundColor: colors.primary }} // Dark background usually
        >
             <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
                style={{ backgroundImage: `url(https://source.unsplash.com/1600x900/?${imageMood.replace(/ /g, ',')})` }}
            />
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <p 
                    className={`philo-text text-xl md:text-2xl mb-8 opacity-60 ${fonts.subheading}`}
                    style={{ color: '#FFFFFF' }} // Always light on dark
                >
                    {preset.content.philosophy.neutral}
                </p>
                <h2 
                    className={`philo-text text-5xl md:text-7xl lg:text-8xl italic ${fonts.drama}`}
                    style={{ color: '#FFFFFF' }}
                >
                    We focus on: <span style={{ color: colors.accent }}>{preset.content.philosophy.differentiated.split(': ')[1] || "Difference"}</span>
                </h2>
            </div>
        </section>
    );
};

const Protocol = ({ preset }) => {
    const { colors, fonts } = preset.theme;
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');
            
            cards.forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => gsap.to(card, { scale: 1, opacity: 1, filter: "blur(0px)" }),
                    onLeave: () => gsap.to(card, { scale: 0.9, opacity: 0.5, filter: "blur(10px)" }),
                    onEnterBack: () => gsap.to(card, { scale: 1, opacity: 1, filter: "blur(0px)" }),
                    onLeaveBack: () => gsap.to(card, { scale: 0.9, opacity: 0.5, filter: "blur(10px)" }),
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="py-24" style={{ backgroundColor: colors.background }}>
            <div className="max-w-4xl mx-auto px-6 space-y-32">
                {preset.content.protocol.map((step, i) => (
                    <div 
                        key={i} 
                        className="protocol-card sticky top-32 min-h-[60vh] p-12 rounded-[3rem] border shadow-2xl flex flex-col justify-center overflow-hidden"
                        style={{ 
                            backgroundColor: colors.surface, 
                            borderColor: `${colors.text}10`,
                            color: colors.text
                        }}
                    >
                        {/* Decorative background element based on index */}
                        <div className="absolute -right-20 -top-20 opacity-5">
                             {i === 0 && <Activity size={400} />}
                             {i === 1 && <Cpu size={400} />}
                             {i === 2 && <Zap size={400} />}
                        </div>

                        <div className={`text-6xl md:text-8xl font-bold mb-8 opacity-20 ${fonts.data}`}>
                            {step.step}
                        </div>
                        <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${fonts.heading}`}>
                            {step.title}
                        </h3>
                        <p className={`text-xl md:text-2xl opacity-80 max-w-xl ${fonts.subheading}`}>
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Membership = ({ preset }) => {
    const { colors, fonts } = preset.theme;
    
    if (!preset.content.pricing.enabled) return null;

    return (
        <section id="membership" className="py-32 px-6" style={{ backgroundColor: colors.background }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {preset.content.pricing.tiers.map((tier, i) => {
                        const isMiddle = i === 1;
                        return (
                            <div 
                                key={i}
                                className={`relative p-10 rounded-[2.5rem] border flex flex-col justify-between ${isMiddle ? 'scale-105 shadow-2xl z-10' : 'shadow-lg'}`}
                                style={{ 
                                    backgroundColor: isMiddle ? colors.primary : colors.surface,
                                    borderColor: `${colors.text}10`,
                                    color: isMiddle ? '#FFFFFF' : colors.text,
                                    height: isMiddle ? '600px' : '500px'
                                }}
                            >
                                <div>
                                    <h3 className={`text-xl font-bold mb-2 ${fonts.heading}`}>{tier.name}</h3>
                                    <div className={`text-4xl font-bold mb-8 ${fonts.data}`}>{tier.price}</div>
                                    <ul className="space-y-4">
                                        {tier.features.map((feat, j) => (
                                            <li key={j} className="flex items-center gap-3">
                                                <Check size={18} style={{ color: isMiddle ? colors.accent : colors.primary }} />
                                                <span className={`text-sm ${fonts.subheading}`}>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button 
                                    className={`w-full py-4 rounded-full font-bold transition-transform hover:scale-105 ${fonts.heading}`}
                                    style={{ 
                                        backgroundColor: isMiddle ? colors.accent : `${colors.text}10`,
                                        color: isMiddle ? '#FFFFFF' : colors.text
                                    }}
                                >
                                    Select
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const Footer = ({ preset }) => {
    const { colors, fonts } = preset.theme;
    
    return (
        <footer 
            className="py-24 px-6 rounded-t-[4rem] mt-[-4rem] relative z-20"
            style={{ backgroundColor: '#050505', color: '#FFFFFF' }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className={`text-3xl font-bold mb-4 ${fonts.heading}`}>{preset.content.brandName}</h2>
                    <p className={`opacity-60 max-w-sm ${fonts.subheading}`}>
                        {preset.content.purpose}
                    </p>
                    <div className="mt-8 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className={`text-xs opacity-50 ${fonts.data}`}>SYSTEM OPERATIONAL</span>
                    </div>
                </div>
                
                <div>
                    <h4 className={`text-sm font-bold mb-6 opacity-50 ${fonts.heading}`}>SITEMAP</h4>
                    <ul className="space-y-2 opacity-80">
                        <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
                        <li><a href="#protocol" className="hover:text-white transition-colors">Protocol</a></li>
                        <li><a href="#membership" className="hover:text-white transition-colors">Membership</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className={`text-sm font-bold mb-6 opacity-50 ${fonts.heading}`}>LEGAL</h4>
                    <ul className="space-y-2 opacity-80">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie Settings</li>
                    </ul>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex justify-between opacity-40 text-xs">
                <span>© 2024 {preset.content.brandName}. All rights reserved.</span>
                <span>CINEMATIC BUILDER v1.0</span>
            </div>
        </footer>
    );
};

// --- Main Landing Page Component ---

export const LandingPage = ({ preset, allPresets }) => {
    // Reset scroll on preset change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [preset.id]);

    return (
        <div className={`min-h-screen w-full overflow-x-hidden ${preset.theme.fonts.heading} selection:bg-black selection:text-white`}>
            <Navbar preset={preset} allPresets={allPresets} />
            <Hero preset={preset} />
            <Features preset={preset} />
            <Philosophy preset={preset} />
            <Protocol preset={preset} />
            <Membership preset={preset} />
            <Footer preset={preset} />
        </div>
    );
};
