import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { screens, projectInfo } from './data';

const colors = ['#4f46e5', '#7c3aed', '#0891b2', '#059669', '#d97706', '#dc2626', '#2563eb', '#9333ea', '#0d9488'];

function NavDot({ id, active }) {
  const scrollTo = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <button
      onClick={scrollTo}
      className="nav-dot"
      style={{
        width: active ? 24 : 10,
        height: 10,
        borderRadius: 5,
        border: 'none',
        background: active ? '#4f46e5' : '#334155',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      aria-label={`Aller à ${id}`}
    />
  );
}

function Section({ screen, index }) {
  const isReversed = index % 2 === 1;
  const color = colors[index % colors.length];

  return (
    <motion.section
      id={screen.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isReversed ? '1fr 1fr' : '1fr 1fr',
          gap: 48,
          maxWidth: 1280,
          width: '100%',
          alignItems: 'center',
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ order: isReversed ? 2 : 1 }}
        >
          <div
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,.08)',
              boxShadow: `0 20px 60px rgba(0,0,0,.4), 0 0 80px ${color}15`,
              background: '#0f172a',
            }}
          >
            <motion.img
              src={screen.img}
              alt={screen.title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            order: isReversed ? 1 : 2,
            padding: '0 16px',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: color,
              background: `${color}20`,
              padding: '4px 12px',
              borderRadius: 8,
              display: 'inline-block',
              marginBottom: 8,
            }}
          >
            Écran {String(screen.num).padStart(2, '0')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 4,
            }}
          >
            {screen.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1rem',
              color: '#94a3b8',
              marginBottom: 24,
            }}
          >
            {screen.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            style={{
              fontSize: '0.9rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            {screen.objective}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ marginBottom: 20 }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b', marginBottom: 10 }}>
              Fonctionnalités
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {screen.features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + i * 0.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: color, flexShrink: 0 }} />
                  {f}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            style={{
              background: 'linear-gradient(135deg, rgba(79,70,229,.12), rgba(124,58,237,.12))',
              border: '1px solid rgba(99,102,241,.2)',
              borderRadius: 14,
              padding: '14px 18px',
            }}
          >
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#818cf8', marginBottom: 4 }}>
              ✨ Intelligence Artificielle
            </p>
            <p style={{ fontSize: '0.85rem', color: '#c7d2fe', lineHeight: 1.6 }}>
              {screen.ai}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient orbs */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,.15), transparent)',
          top: '-200px',
          right: '-200px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,.1), transparent)',
          bottom: '-150px',
          left: '-150px',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#818cf8',
            background: 'rgba(99,102,241,.15)',
            padding: '6px 16px',
            borderRadius: 20,
            display: 'inline-block',
            marginBottom: 16,
          }}
        >
          ISGA Fès &bull; 4ISI &bull; Entrepreneuriat
        </motion.span>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}
        >
          {projectInfo.name}
          <span style={{
            background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            {projectInfo.tagline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
            color: '#94a3b8',
            maxWidth: 600,
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}
        >
          {projectInfo.description}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65 }}
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 48,
          }}
        >
          {projectInfo.students.map((name, i) => (
            <span
              key={i}
              style={{
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 10,
                padding: '6px 16px',
                fontSize: '0.85rem',
                color: '#cbd5e1',
              }}
            >
              {name}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <span>👨‍🏫 {projectInfo.professor}</span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 48 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: '#fff',
              border: 'none',
              borderRadius: 14,
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(79,70,229,.35)',
            }}
          >
            Découvrir les écrans
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #818cf8)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 1000,
      }}
    />
  );
}

export default function App() {
  const [activeId, setActiveId] = useState('');
  const allScreens = screens;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    allScreens.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <ProgressBar />

      {/* Nav dots */}
      <nav
        style={{
          position: 'fixed',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          zIndex: 100,
        }}
      >
        {allScreens.map((s) => (
          <NavDot key={s.id} id={s.id} active={activeId === s.id} />
        ))}
      </nav>

      {/* Content */}
      <Hero />
      {allScreens.map((screen, i) => (
        <Section key={screen.id} screen={screen} index={i} />
      ))}

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          padding: '48px 24px',
          borderTop: '1px solid rgba(255,255,255,.06)',
          color: '#475569',
          fontSize: '0.85rem',
          lineHeight: 2,
        }}
      >
        <strong style={{ color: '#94a3b8' }}>Saas Gestion d'Entreprise Powered by AI</strong>
        <br />
        {projectInfo.school} &bull; {projectInfo.group} &bull; {projectInfo.module}
        <br />
        {projectInfo.students.join(' — ')}
        <br />
        <span style={{ fontSize: '0.75rem', color: '#334155' }}>
          Année universitaire 2025-2026
        </span>
      </motion.footer>
    </div>
  );
}
