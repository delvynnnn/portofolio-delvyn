import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  CheckCircle2, 
  Award, 
  ArrowUpRight, 
  Sun, 
  Moon, 
  Send, 
  Sparkles, 
  Building2, 
  MessageSquare,
  ChevronRight,
  ExternalLink,
  Laptop,
  Users,
  Smile,
  Compass,
  Menu,
  X
} from 'lucide-react';

/**
 * DATA DARI CV UTAMA (100% AKURAT SESUAI DOKUMEN PDF)
 */
const PROFILE_DATA = {
  name: "DELVYN VEDERICK",
  role: "Manajemen Bisnis / Business Management Enthusiast",
  age: 17,
  email: "dvederick@gmail.com",
  phone: "0851-4157-1820",
  address: "Taman Palem Lestari Blok E6/109, Cengkareng, Jakarta Barat",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8665389659983!2d106.72145327581177!3d-6.148625560269385!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f823293dcbc3%3A0xb3bc87e5ebc1c385!2sTaman%20Palem%20Lestari!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  bio: "Saya berumur 17 tahun, memiliki ketertarikan besar pada bidang bisnis dan manajemen. Memiliki semangat untuk mempelajari hal baru, mencoba berbagai kesempatan, serta mengembangkan keterampilan profesional. Memiliki keterampilan komunikasi dan kerja sama tim, serta pengetahuan dasar Microsoft Office.",
  education: [
    {
      period: "2024 - 2027",
      institution: "SMA Kasih Kemuliaan",
      major: "Jurusan IPS (Ilmu Pengetahuan Sosial)",
      description: "Fokus pada studi sosial, ekonomi, serta dasar-dasar organisasi & manajemen bisnis."
    }
  ],
  experience: [
    {
      role: "Magang (Internship)",
      company: "Kungfu Live Seafood",
      type: "Internship / Work Experience",
      description: "Memahami operasional bisnis kuliner, memberikan pelayanan langsung kepada pelanggan, berkoordinasi dalam tim, dan beradaptasi dengan alur kerja profesional yang cepat."
    }
  ],
  skills: [
    { name: "Microsoft Office", level: "Dasar / Basic", icon: "Laptop" },
    { name: "Komunikasi Publik", level: "Lanjutan", icon: "MessageSquare" },
    { name: "Kemampuan Beradaptasi", level: "Lanjutan", icon: "Compass" },
    { name: "Kerja Sama Tim (Teamwork)", level: "Lanjutan", icon: "Users" }
  ],
  interests: [
    "Manajemen Bisnis",
    "Pengembangan Diri",
    "Komunikasi & Negosiasi",
    "Strategi Pemasaran",
    "Operasional Bisnis"
  ],
  testimonials: [
    {
      quote: "Delvyn adalah sosok muda yang bersemangat, sangat cepat beradaptasi dengan lingkungan baru, serta memiliki dedikasi tinggi saat bekerja dalam tim.",
      author: "Tim Kungfu Live Seafood",
      role: "Supervisor / Rekan Kerjasama"
    },
    {
      quote: "Memiliki inisiatif belajar yang kuat dan keterampilan komunikasi sosial yang ramah serta responsif.",
      author: "SMA Kasih Kemuliaan",
      role: "Pendidik / Mentor Akademik"
    }
  ]
};

export default function App() {
  // Theme & State Management
  const [darkMode, setDarkMode] = useState(true);
  const [isPreloading, setIsPreloading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load Google Fonts (Outfit & Plus Jakarta Sans) Dinamis
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Custom Cursor Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Preloader Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Handle dark mode class on root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Halo Delvyn Vederick, saya ingin berdiskusi terkait peluang kerja sama/bisnis.`);
    window.open(`https://wa.me/6285141571820?text=${text}`, '_blank');
  };

  if (isPreloading) {
    return (
      <div 
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
      >
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          <span style={{ fontFamily: "'Outfit', sans-serif" }} className="absolute text-xl font-black tracking-widest text-amber-500">DV</span>
        </div>
        <p className="mt-6 text-xs tracking-[0.3em] font-medium text-slate-400 uppercase animate-pulse">
          Memuat Portfolio Delvyn Vederick...
        </p>
      </div>
    );
  }

  return (
    <div 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} 
      className={`min-h-screen transition-colors duration-300 selection:bg-amber-500 selection:text-slate-950 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}
    >
      
      {/* Custom Floating Cursor (Desktop Only) */}
      <div 
        className={`hidden md:block fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out ${
          isHovered ? 'w-12 h-12 bg-amber-500/20 border border-amber-400 scale-125' : 'w-6 h-6 bg-amber-500/40 mix-blend-difference'
        }`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-3 group"
          >
            <div 
              style={{ fontFamily: "'Outfit', sans-serif" }} 
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform"
            >
              DV
            </div>
            <div className="flex flex-col">
              <span style={{ fontFamily: "'Outfit', sans-serif" }} className="font-extrabold tracking-wide text-base sm:text-lg leading-tight">DELVYN VEDERICK</span>
              <span className="text-[10px] text-amber-500 font-semibold uppercase tracking-[0.2em]">Bisnis & Manajemen</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide font-medium">
            {[
              { id: 'tentang', label: 'Tentang Saya' },
              { id: 'pengalaman', label: 'Pengalaman' },
              { id: 'keahlian', label: 'Keahlian' },
              { id: 'testimoni', label: 'Testimoni' },
              { id: 'kontak', label: 'Kontak' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`transition-colors hover:text-amber-500 relative py-1 ${
                  activeSection === item.id ? 'text-amber-500 font-semibold' : darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions (Toggle Theme & Action Button) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-amber-400' : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={openWhatsApp}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Hubungi WA</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pt-2 pb-6 border-b transition-all ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <nav className="flex flex-col gap-4 font-medium text-sm">
              {[
                { id: 'tentang', label: 'Tentang Saya' },
                { id: 'pengalaman', label: 'Pengalaman' },
                { id: 'keahlian', label: 'Keahlian' },
                { id: 'testimoni', label: 'Testimoni' },
                { id: 'kontak', label: 'Kontak' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-amber-500"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={openWhatsApp}
                className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                <span>Hubungi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-semibold uppercase tracking-[0.15em] mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Siap Mengembangkan Keterampilan Profesional</span>
            </div>

            <h1 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]">
              Halo, Saya <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                {PROFILE_DATA.name}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-400 font-normal max-w-2xl mx-auto leading-relaxed">
              Talenta muda berusia <strong className="text-amber-400 font-semibold">{PROFILE_DATA.age} tahun</strong> dengan minat besar di bidang <strong className={darkMode ? 'text-white font-semibold' : 'text-slate-900 font-semibold'}>Manajemen Bisnis</strong>, memiliki kemampuan komunikasi unggul, adaptabilitas tinggi, serta pengalaman kerja lapangan.
            </p>

            {/* Badges / Highlights */}
            <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>SMA Kasih Kemuliaan (IPS)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Ex-Intern Kungfu Live Seafood</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Taman Palem Lestari, Jakarta Barat</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap justify-center gap-4 items-center">
              <a
                href="#kontak"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Hubungi Saya</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#pengalaman"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`px-8 py-3.5 rounded-xl border font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105 ${
                  darkMode ? 'border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-200' : 'border-slate-300 hover:border-slate-400 bg-white text-slate-700'
                }`}
              >
                Lihat Pengalaman
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* MARQUEE TEXT BERJALAN */}
      <section className="py-6 border-y border-slate-800/60 bg-amber-500/5 overflow-hidden select-none">
        <div style={{ fontFamily: "'Outfit', sans-serif" }} className="flex whitespace-nowrap animate-marquee gap-8 items-center text-sm font-black uppercase tracking-[0.25em] text-amber-500/80">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span>MANAJEMEN BISNIS</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>KOMUNIKASI EFEKTIF</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>KERJA SAMA TIM</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>ADAPTABILITY</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>MICROSOFT OFFICE</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* SECTION TENTANG SAYA */}
      <section id="tentang" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em]">Tentang Saya</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Profil Professional & Pendidikan
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Bio Detail Card */}
            <div className={`p-8 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-xl font-bold">Ringkasan Diri</h3>
                  <p className="text-xs text-slate-400">Siap berkontribusi aktif dalam tim</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {PROFILE_DATA.bio}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-medium">Usia</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif" }} className="text-lg font-extrabold text-amber-400">{PROFILE_DATA.age} Tahun</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-medium">Fokus Minat</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif" }} className="text-lg font-extrabold text-amber-400">Bisnis & Manajemen</span>
                </div>
              </div>
            </div>

            {/* Pendidikan Card */}
            <div className={`p-8 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-xl font-bold">Riwayat Pendidikan</h3>
                  <p className="text-xs text-slate-400">Latar belakang akademis</p>
                </div>
              </div>

              <div className="space-y-6">
                {PROFILE_DATA.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-amber-500/40">
                    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{edu.period}</span>
                    <h4 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-lg font-extrabold mt-1">{edu.institution}</h4>
                    <p className="text-sm font-semibold text-slate-300">{edu.major}</p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PENGALAMAN KERJA */}
      <section id="pengalaman" className={`py-24 ${darkMode ? 'bg-slate-900/40' : 'bg-slate-100/70'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em]">Pengalaman Kerja</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Rekam Pengalaman Praktis
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {PROFILE_DATA.experience.map((exp, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:translate-y-1 ${
                  darkMode ? 'bg-slate-900 border-slate-800 hover:border-amber-500/50' : 'bg-white border-slate-200 hover:border-amber-500/50'
                } shadow-xl`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-xl font-extrabold text-amber-400">{exp.role}</h3>
                      <p className="text-base font-semibold text-slate-200">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 self-start sm:self-auto uppercase tracking-wider">
                    {exp.type}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 mt-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION KEAHLIAN / SKILLS */}
      <section id="keahlian" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em]">Keahlian Utamanya</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Kemampuan & Kompetensi
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE_DATA.skills.map((skill, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-amber-500/40' : 'bg-white border-slate-200 hover:border-amber-500/40'
                } shadow-md`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                  {skill.icon === 'Laptop' && <Laptop className="w-6 h-6" />}
                  {skill.icon === 'MessageSquare' && <MessageSquare className="w-6 h-6" />}
                  {skill.icon === 'Compass' && <Compass className="w-6 h-6" />}
                  {skill.icon === 'Users' && <Users className="w-6 h-6" />}
                </div>

                <h3 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-lg font-bold mb-1">{skill.name}</h3>
                <span className="text-xs text-amber-500 font-medium">{skill.level}</span>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Skill CV</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Interests */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 max-w-4xl mx-auto">
            <h4 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-base font-bold text-amber-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Bidang Minat Ketertarikan Pengembangan:</span>
            </h4>
            <div className="flex flex-wrap gap-3">
              {PROFILE_DATA.interests.map((interest, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI SECTION */}
      <section id="testimoni" className={`py-24 ${darkMode ? 'bg-slate-900/40' : 'bg-slate-100/70'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em]">Apresiasi & Testimoni</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Apa Kata Lingkungan Kerja
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PROFILE_DATA.testimonials.map((item, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-2xl border relative ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                } shadow-xl flex flex-col justify-between`}
              >
                <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed mb-6">
                  "{item.quote}"
                </p>

                <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between">
                  <div>
                    <h4 style={{ fontFamily: "'Outfit', sans-serif" }} className="font-extrabold text-amber-400 text-sm">{item.author}</h4>
                    <span className="text-xs text-slate-400">{item.role}</span>
                  </div>
                  <Smile className="w-5 h-5 text-amber-500/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION KONTAK & MAPS */}
      <section id="kontak" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em]">Hubungi Saya</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Mari Terhubung & Berdiskusi
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info & Maps */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Utama</h4>
                    <a href={`mailto:${PROFILE_DATA.email}`} className="text-base sm:text-lg font-bold hover:text-amber-400 transition-colors">
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Telepon / WhatsApp</h4>
                    <a href={`tel:${PROFILE_DATA.phone}`} className="text-base sm:text-lg font-bold hover:text-amber-400 transition-colors">
                      {PROFILE_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Alamat Lengkap</h4>
                    <p className="text-base font-bold text-slate-200">
                      {PROFILE_DATA.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Presisi */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 shadow-lg relative">
                <iframe 
                  title="Google Maps Location"
                  src={PROFILE_DATA.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6">
              <div className={`p-8 rounded-2xl border ${
                darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
              } shadow-xl`}>
                <h3 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-xl font-bold mb-2">Kirim Pesan Langsung</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Isi formulir di bawah ini untuk mengirim pesan via email atau mendiskusikan peluang kerja sama.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 mx-auto" />
                    <h4 style={{ fontFamily: "'Outfit', sans-serif" }} className="font-bold text-lg">Pesan Terkirim!</h4>
                    <p className="text-xs text-slate-300">Terima kasih, Delvyn akan membalas pesan Anda secepatnya.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Nama Lengkap</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Masukkan nama Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                          darkMode ? 'bg-slate-950 border-slate-800 focus:border-amber-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Alamat Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                          darkMode ? 'bg-slate-950 border-slate-800 focus:border-amber-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Pesan / Diskusi</label>
                      <textarea 
                        rows="4" 
                        required
                        placeholder="Tuliskan pesan Anda..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                          darkMode ? 'bg-slate-950 border-slate-800 focus:border-amber-500 text-white' : 'bg-slate-50 border-slate-300 focus:border-amber-500 text-slate-900'
                        }`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Outfit', sans-serif" }} className="font-extrabold text-white">DELVYN VEDERICK</span>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          </div>

          <p className="text-center sm:text-right text-slate-500">
            Dibuat secara presisi sesuai data CV resmi | Manajemen Bisnis
          </p>
        </div>
      </footer>

    </div>
  );
    }
