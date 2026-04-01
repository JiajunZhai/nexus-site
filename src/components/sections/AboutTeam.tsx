"use client";

import { motion } from "framer-motion";

type Dictionary = Record<string, any>;

interface AboutTeamProps {
  dict: Dictionary;
}

const teamMembers = [
  { key: "aris", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqmCgn3ymtoFXZdBLWPdEF3LkR89oE6L-wbIeyz0nqTOkz2N3c9T603Ebq0NhddMnKQBxmx6iGBJt99zrXaPo-H44ShHeJuXUoKA4C4K82rPCk6Fo8YsZxP_qtahKzcc9x25VS6T2Ywjd_oUrHRhj2l4FUDKXj44a8qqEiTTb60y1otBf0jQvf7ahihOEqdweCr5gtFuyj_d6hugb5QOfSYD73S_n0haKvbKNdZ6gqBn-en36hwRgx2vKPGJukNKTIvdOv1Pa4Ygc" },
  { key: "elena", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyTjna_vAZ3kTRwH8X7mlAj9T1SzhwRB5TMTZB9jZTI9gipHYsRI2EY_lNPsv8Blj-ThFuBKUbjABLvdx9EOJthS1cx8t493co4z9sJCDX18cZaHfyHKNGVobBCGMwcDz_V1SYWcku0C7YsgnQdOKEG_WDsGBY_lPXT3C4w1GOnPn5J082FLnpWLgxxlowulZj8gvHtJs6UPJcgJae1ycB4Oin8czC8ho-OhoofsxlFa0Sx78ZvO83Y1h8KNzALLhuRNzV2a7k1XE" },
  { key: "marcus", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBStJYaar1ZOsrcoccFwNMQvyX0in91oyA1fTu_abxdiXy4H07C8Q34XRuNAGKg05NMKOwwAFyQM8wiO9_HG0QTZEhPhUTqtCzD5iMzRBdrtRJnNMxt89y-IlJbGwKH6ZiqivPDnHROYcff8zBmzpMlzblYBaKCyyxpd2NLMfHUkHUEuVX2U5u-1_s5qDreuONnXl5Z9gcseomIzYpaGFJIO2Iw-PR4PxQUxRvpwEJ3xbtGc9_GyVsIjxkQjSgVFcWNnyf78cZJEw0" },
  { key: "sana", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHI5THOX96mfPaJqUrcb7lroSiyP-CVYEgkHR2qsSRs4RYxfqczCUsInv080ZuBW3vPZ1AH6ZmbJrmRqlQ0HFaqCAyHV-GT1FVwgulU5jfk8z6SO8ZJ_Ww-6WaKeDhqvU5Gr3nsJcKQ0gJuFR6RDUf-sIRE8GkxgI1f9ja5T3gvGYl63Af9xiyXpQaHTXd-l021pi250Q-p7FPa9ACgZwntsN2NxshNWhtRbeCMWDBWRtFTVWZOW__Bf9n4TT3w-ZSv1yB86CcK9E" },
] as const;

export function AboutTeam({ dict }: AboutTeamProps) {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 mb-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6 mb-20"
      >
        <h2 className="text-5xl font-headline font-bold tracking-tight text-on-surface">
          {dict.about.team.title}
        </h2>
        <p className="text-on-surface-variant max-w-2xl text-lg">
          {dict.about.team.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, i) => (
          <motion.div 
            key={member.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group ${i % 2 === 1 ? "lg:translate-y-12" : ""}`}
          >
            <div className="relative aspect-square overflow-hidden mb-6 rounded-lg bg-surface-container">
              <img 
                alt={dict.about.team.members[member.key as keyof typeof dict.about.team.members].name} 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 transition-transform duration-700" 
                src={member.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface">
              {dict.about.team.members[member.key as keyof typeof dict.about.team.members].name}
            </h3>
            <p className="text-sm font-label text-secondary uppercase tracking-widest mt-1">
              {dict.about.team.members[member.key as keyof typeof dict.about.team.members].role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}