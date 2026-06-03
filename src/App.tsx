import React from 'react';
import { motion } from "motion/react";
import {
  CheckCircle2,
  Smartphone,
  UserCheck,
  ShieldCheck,
  Zap,
  Star,
  ChevronDown,
  ArrowRight,
  Download,
  Building2,
  Store,
  Wallet
} from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const BRI_BLUE = "#0157e3";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-semibold text-lg py-2 focus:outline-none"
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="text-slate-600 mt-2 pb-2"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const testimonials = [
  {
    name: "Siti Aminah",
    role: "Perawat di HK Island",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti&baseColor=f9c9b6&clothing=blazer&clothingColor=3c4e5e&hair=longButNotTooLong&hairColor=2c1b18",
    content: "Dulu tiap bulan harus ke Causeway Bay buat antre kirim uang. Sekarang sambil istirahat kerja aja bisa kirim uang lewat remit.go!. Kursnya selalu bersaing!"
  },
  {
    name: "Budi Santoso",
    role: "Pekerja Konstruksi di Kowloon",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi&baseColor=f9c9b6&clothing=shirt&clothingColor=3c4e5e&hair=shortCombover&hairColor=2c1b18",
    content: "Paling suka fitur setor tunai di 7-Eleven. Kerja saya kan shift, jadi bisa setor kapan saja mau jam 2 pagi sekalipun. Uang langsung masuk ke rekening istri di kampung."
  },
  {
    name: "Ratna Sari",
    role: "Domestic Helper di New Territories",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ratna&baseColor=f9c9b6&clothing=collarAndSweater&clothingColor=3c4e5e&hair=bob&hairColor=2c1b18",
    content: "Awalnya ragu kirim online, tapi karena remit.go! didukung BRI saya jadi tenang. Verifikasinya cepat dan aplikasinya gampang dipakai buat yang gaptek kayak saya."
  }
];

const trustSlides = [
  {
    image: "/lpremitgo/long.jpg",
    title: "Cabang Yuen Long",
    desc: "Shop 3, G/F, Yuen Long Commercial Centre, 18-24 Kau Yuk Road, Yuen Long, Hong Kong"
  },
  {
    image: "/lpremitgo/maibranch.jpg",
    title: "Pusat Causeway Bay",
    desc: "Shop B, G/F, Keswick Mansion, 57 Keswick Street, Causeway Bay, Hong Kong"
  },
  {
    image: "/lpremitgo/mongkok.jpg",
    title: "Cabang Mong Kok",
    desc: "Shop A, G/F, 78 Argyle Street, Mong Kok, Kowloon, Hong Kong"
  },
  {
    image: "/lpremitgo/wan.jpg",
    title: "Cabang Tsuen Wan",
    desc: "G/F, 123 Sha Tsui Road, Tsuen Wan, New Territories, Hong Kong"
  },

];

const branches = [
  {
    name: "Pusat Causeway Bay",
    address: "Shop B, G/F, Keswick Mansion, 57 Keswick Street, Causeway Bay, Hong Kong",
    tel: "+852 2881 9224",
    hours: "Senin - Minggu: 09:00 - 18:00"
  },
  {
    name: "Cabang Yuen Long",
    address: "Shop 3, G/F, Yuen Long Commercial Centre, 18-24 Kau Yuk Road, Yuen Long, Hong Kong",
    tel: "+852 2478 9338",
    hours: "Senin - Minggu: 09:00 - 18:00"
  },
  {
    name: "Cabang Tsuen Wan",
    address: "G/F, 123 Sha Tsui Road, Tsuen Wan, New Territories, Hong Kong",
    tel: "+852 2498 9332",
    hours: "Senin - Minggu: 09:00 - 18:00"
  },
  {
    name: "Cabang Mong Kok",
    address: "Shop A, G/F, 78 Argyle Street, Mong Kok, Kowloon, Hong Kong",
    tel: "+852 2398 9334",
    hours: "Senin - Minggu: 09:00 - 18:00"
  }
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* Logo diletakkan langsung di depan teks */}
              <img src="/lpremitgo/logobaru.png" alt="Logo" className="h-8 w-auto" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/85252920848"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-bold text-base hover:opacity-90 transition-opacity flex items-center gap-2.5 shadow-sm"
            >
              <img src="/lpremitgo/wa.png" alt="WA" className="w-5 h-5 object-contain brightness-0 invert" />
              Tanya kami
            </a>
            <button 
              onClick={() => document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#003b9c] text-white px-6 py-2.5 rounded-full font-bold text-base hover:opacity-90 transition-opacity shadow-sm"
            >
              Download Sekarang
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="mt-10 py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-bold leading-[1.1] mb-8">
              Kirim Uang ke Indonesia <span className="text-[#003b9c]">Gak Pake Ribet, Gak Pake Antre!</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Capek kerja seminggu, masa waktu libur habis cuma buat antre kirim uang? Di <span className="font-semibold text-[--color-bri-blue]">remit.go!</span>, kirim uang semudah kirim pesan. Kurs Tinggi, Biaya Murah, dan Pasti Sampai!
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Gak perlu nunggu hari libur",
                "Gak perlu jauh-jauh ke toko fisik",
                "Kurs tinggi & biaya murah"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#003b9c]" />
                  </div>
                  <span className="font-medium text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 items-center mb-8">
              <a
                href="https://wa.me/85252920848"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-green-200 hover:scale-105 transition-transform"
              >
                <img src="/lpremitgo/wa.png" alt="WA" className="w-4 h-4 object-contain" /> Hubungi Admin CS
              </a>

              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#003b9c] text-white px-5 py-3 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-200/50"
              >
                <div className="p-0.5 rounded-lg">
                  <img src="/lpremitgo/playstore.png" alt="Play Store" className="w-7 h-7 object-contain" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-[10px] uppercase opacity-75 leading-none mb-1">Download di</p>
                  <p className="text-base leading-none">Google Play</p>
                </div>
              </a>

              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-slate-900/10"
              >
                <div className="p-0.5 rounded-lg">
                  <img src="/lpremitgo/appstore.png" alt="App Store" className="w-7 h-7 object-contain" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-[10px] uppercase opacity-75 leading-none mb-1">Download di</p>
                  <p className="text-base leading-none">App Store</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-2">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-xs text-slate-500 font-medium whitespace-nowrap">4.9/5 dari 50rb+ PMI</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:-mr-24 xl:-mr-32"
          >
            <div className="absolute -inset-10 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
            <img
              src="/lpremitgo/imagehero.png"
              alt="Remit.go App Mockup"
              className="w-full h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </Section>



      {/* USP Section */}
      <div className="bg-slate-50">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kenapa Ribuan PMI di Hong Kong Pindah ke remit.go?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#003b9c]" />,
                title: "Kurs Tertinggi & Ongkir Termurah",
                desc: "Dapatkan nilai tukar terbaik setiap hari tanpa biaya siluman. Hemat lebih banyak untuk keluarga di rumah."
              },
              {
                icon: <Store className="w-8 h-8 text-[#003b9c]" />,
                title: "Setor Tunai di 7-Eleven",
                desc: "Gak perlu cari bank. Cukup ke 7-Eleven mana saja di seluruh Hong Kong, buka aplikasi, dan setor tunai 24/7."
              },
              {
                icon: <Wallet className="w-8 h-8 text-[#003b9c]" />,
                title: "Kirim ke Semua Bank & E-Wallet",
                desc: "Kirim langsung ke BRI, Mandiri, BCA, atau E-Wallet favorit seperti Dana, OVO, dan GoPay secara instan."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[--color-bri-blue]">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Mid CTA Section */}
      <div className="bg-slate-50 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-[#003b9c] via-[#0052cc] to-bri-blue rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-blue-400/20"
          >
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300/10 blur-2xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="text-left relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Siap Kirim Uang Lebih Cepat & Hemat?</h3>
              <p className="text-blue-100">Download aplikasi remit.go! sekarang gratis di smartphone Anda.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0 justify-center relative z-10">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-[#003b9c] px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-black/10 hover:shadow-white/10"
              >
                <div className="p-0.5 rounded-lg">
                  <img src="/lpremitgo/playstore.png" alt="Play Store" className="w-6 h-6 object-contain" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-[10px] uppercase opacity-75 leading-none mb-1">Download di</p>
                  <p className="text-base leading-none">Google Play</p>
                </div>
              </a>

              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-black/10 hover:bg-white/20"
              >
                <div className="p-0.5 rounded-lg">
                  <img src="/lpremitgo/appstore.png" alt="App Store" className="w-6 h-6 object-contain" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-[10px] uppercase opacity-75 leading-none mb-1">Download di</p>
                  <p className="text-base leading-none">App Store</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Steps Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl -z-10" />
            <img
              src="gambar3brigo.png"
              alt="Steps Illustration"
              className="w-full max-w-lg mx-auto drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="relative">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cuma 3 Menit, Uang Langsung Sampai</h2>
              <p className="text-slate-600">Lupakan cara lama yang bikin pusing. Ikuti langkah mudah ini:</p>
            </div>

            <div className="space-y-12">
              {[
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "Download Aplikasi",
                  desc: "Tersedia di Google Play Store dan Apple App Store secara gratis."
                },
                {
                  icon: <UserCheck className="w-6 h-6" />,
                  title: "Daftar & Masukkan Data",
                  desc: "Cukup gunakan nomor telepon aktif dan masukkan data rekening tujuan."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Verifikasi ID / Paspor",
                  desc: "Lakukan verifikasi identitas satu kali untuk keamanan transaksi maksimal."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#003b9c] text-white flex items-center justify-center font-bold text-lg relative">
                    {i + 1}
                    {i < 2 && <div className="absolute top-full w-0.5 h-16 bg-blue-100" />}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold mb-2 text-[--color-bri-blue]">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Section */}
      <div className="bg-slate-900 text-white overflow-hidden">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Aman & Terpercaya di Bawah Naungan BRI</h2>
              <p className="text-slate-400 text-lg mb-8">
                remit.go! merupakan partner resmi Bank Rakyat Indonesia (BRI) di Hong Kong. Kami menjamin setiap transaksi diawasi oleh otoritas keuangan kedua negara.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {branches.map((branch, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/60 border border-slate-700/40 p-4.5 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold">
                        <Building2 className="w-4 h-4" />
                        <span className="text-xs tracking-wide">{branch.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-light mb-4">
                        {branch.address}
                      </p>
                    </div>
                    <div className="border-t border-slate-700/40 pt-2.5 flex justify-between text-[9px] text-slate-400 font-medium">
                      <span>Tel: {branch.tel}</span>
                      <span className="text-emerald-400">{branch.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-400">4.9/5</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Play Store Rating</p>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-400">50K+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">PMI Aktif</p>
                </div>
              </div>

              {/* CTA Download App Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#003b9c] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                >
                  <div className="p-0.5 rounded-lg">
                    <img src="/lpremitgo/playstore.png" alt="Play Store" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] uppercase opacity-70 leading-none mb-1.5">Download di</p>
                    <p className="text-xl leading-none">Google Play</p>
                  </div>
                </a>

                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                >
                  <div className="p-0.5 rounded-lg">
                    <img src="/lpremitgo/appstore.png" alt="App Store" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] uppercase opacity-70 leading-none mb-1.5">Download di</p>
                    <p className="text-xl leading-none">App Store</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Slider Foto Cabang & Fitur */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl w-full border border-slate-800 bg-slate-900/50"
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                className="w-full h-full trust-swiper"
              >
                {trustSlides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative aspect-3/4 w-full overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/40 to-transparent p-8 pt-16">
                        <p className="flex items-center gap-2 text-white font-medium text-lg mb-1">
                          <Building2 className="w-5 h-5 text-blue-400" /> {slide.title}
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">{slide.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </Section>
      </div>



      {/* --- Section Banner Slider --- */}
      <div className="w-full py-16 bg-slate-50 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-slate-900 mb-10">Promo Spesial </h2>

          {/* Swiper Container */}
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={24} // Jarak antar gambar
            slidesPerView={1} // Default HP: Tampil 1
            breakpoints={{
              // Layar Tablet/Laptop ke atas
              1024: { slidesPerView: 4 }, // Tampil 4
            }}
            className="w-full pb-14" // Tambah padding bawah untuk titik pagination
          >

            {/* List 10 Banner - Ganti src dengan file Anda di folder public */}
            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/1.png" className="w-full h-full object-cover" alt="Banner 1" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/2.png" className="w-full h-full object-cover" alt="Banner 2" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/3.png" className="w-full h-full object-cover" alt="Banner 3" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/4.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/5.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/6.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/7.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/8.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/9.png" className="w-full h-full object-cover" alt="Banner 4" />
              </div>
            </SwiperSlide>

            {/* Lanjutkan sampai Banner 10 */}
            <SwiperSlide>
              <div className="aspect-3/4 w-full rounded-2xl overflow-hidden shadow-lg">
                <img src="/lpremitgo/10.png" className="w-full h-full object-cover" alt="Banner 10" />
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
      </div>
      {/* --- End Section Slider --- */}
      {/* Final CTA Section */}
      <div id="download-section" className="bg-[#0a0f18] py-24 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5 select-none">
          <span className="text-[20rem] font-black text-white whitespace-nowrap">remit.go!</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-blue-400 text-xs font-bold uppercase tracking-wider mb-10">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Tersedia di iOS & Android
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Kirim Lebih Banyak. <br />
              <span className="text-blue-400">Bayar Lebih Sedikit.</span>
            </h2>

            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              50.000+ PMI sudah membuktikan. Download sekarang, gratis.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <button className="flex items-center gap-4 bg-[#003b9c] text-white px-10 py-5 rounded-[2rem] font-bold hover:scale-105 transition-transform shadow-2xl shadow-blue-500/20">
                <div className="p-0.5 rounded-lg">
                  <img src="/lpremitgo/playstore.png" alt="Play Store" className="w-9 h-9 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase opacity-70 leading-none mb-1.5">Download di</p>
                  <p className="text-2xl leading-none">Google Play</p>
                </div>
              </button>

              <button className="flex items-center gap-4 bg-slate-800 border border-slate-700 text-white px-10 py-5 rounded-[2rem] font-bold hover:scale-105 transition-transform shadow-2xl shadow-slate-900/50">
                <div className="p-0.5 rounded-lg">
                  <img src="/lpremitgo/appstore.png" alt="App Store" className="w-9 h-9 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase opacity-70 leading-none mb-1.5">Download di</p>
                  <p className="text-2xl leading-none">App Store</p>
                </div>
              </button>
            </div>

            <a
              href="https://wa.me/85252920848"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <img src="/lpremitgo/wa.png" alt="WA" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-medium">Ada pertanyaan? Chat via WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* Logo diletakkan langsung di depan teks */}
              <img src="/lpremitgo/logobaru.png" alt="Logo" className="h-8 w-auto" />
            </div>
          </div>
          <p className="text-slate-500 text-sm">© 2026 remit.go! by BRI. Licensed MSO 19-03-02451.</p>
          <div className="flex gap-6">
            <button className="text-slate-400 hover:text-[#003b9c] transition-colors"><Smartphone className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-[#003b9c] transition-colors"><ShieldCheck className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-[#003b9c] transition-colors"><Building2 className="w-5 h-5" /></button>
          </div>
        </div>
      </footer>
    </div>
  );
}
