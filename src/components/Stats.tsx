import { useEffect, useState, useRef } from "react";
import { Award, Users, Star, ThumbsUp } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

function Counter({ end, suffix, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      icon: <Award className="w-5 h-5 text-edu-accent" />,
      end: 25,
      suffix: "+",
      label: "Years Experience",
      subtext: "Guiding careers since 2001"
    },
    {
      icon: <Users className="w-5 h-5 text-edu-accent" />,
      end: 1500,
      suffix: "+",
      label: "Students Mentored",
      subtext: "Personal attention in Jaipur"
    },
    {
      icon: <Star className="w-5 h-5 text-edu-accent" />,
      end: 98,
      suffix: "%.4", // Render as % after count
      label: "Top Score Secured",
      subtext: "In SST & Humanities Board"
    },
    {
      icon: <ThumbsUp className="w-5 h-5 text-edu-accent" />,
      end: 100,
      suffix: "%",
      label: "Parent Satisfaction",
      subtext: "Trust built on real results"
    }
  ];

  return (
    <section className="relative bg-[#0F2942] py-20 overflow-hidden">
      
      {/* Visual background vector layers */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-edu-accent blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-sky-300 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="text-center space-y-3.5 p-6 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col items-center group hover:border-[#C5A03C]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              
              {/* Stat Icon Circle wrapper */}
              <div className="bg-white/10 p-3 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>

              {/* Number with auto counter */}
              <div className="flex items-baseline justify-center">
                {stat.suffix === "%.4" ? (
                  <div className="flex items-baseline">
                    <Counter end={98} suffix="" />
                    <span className="font-display font-black text-white text-4xl sm:text-5xl">.4%</span>
                  </div>
                ) : (
                  <Counter end={stat.end} suffix={stat.suffix} />
                )}
              </div>

              {/* Descriptions */}
              <div className="space-y-1">
                <h3 className="text-white font-display font-bold text-sm sm:text-base leading-tight tracking-wide uppercase">
                  {stat.label}
                </h3>
                <p className="text-slate-400 text-[11px] sm:text-xs">
                  {stat.subtext}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
