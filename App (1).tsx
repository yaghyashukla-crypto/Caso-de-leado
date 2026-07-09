import { useState } from "react";
import {
  Menu, X, Plus, Minus, MapPin, Phone, Mail,
  Instagram, Facebook, Twitter, Leaf, Coffee,
  Wifi, Sunset, ChevronRight, ArrowRight, Star,
  Wind, BookOpen, ShoppingBag, CalendarDays, Users
} from "lucide-react";

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif";
const SANS = "'Inter', system-ui, -apple-system, sans-serif";

const TERRACOTTA = "#b94f38";
const OCHRE = "#dfa732";
const CHARCOAL = "#25221b";
const LINEN = "#f9f7f0";
const LINEN_DARK = "#f3efe4";
const MUTED = "#7a6f5a";
const SUBTLE_BORDER = "rgba(37,34,27,0.12)";
const SUBTLE_BORDER_GOLD = "rgba(223,167,50,0.35)";

const IMGS = {
  hero: "https://images.unsplash.com/photo-1701369310534-a50305230c2b?w=800&h=1100&fit=crop&auto=format",
  courtyard: "https://images.unsplash.com/photo-1764582329312-60420c2da268?w=660&h=420&fit=crop&auto=format",
  garden: "https://images.unsplash.com/photo-1765421619567-e52e0a8a6c7b?w=660&h=520&fit=crop&auto=format",
  suite: "https://images.unsplash.com/photo-1701421016474-09b19faa9f77?w=900&h=620&fit=crop&auto=format",
  pizza: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=720&h=720&fit=crop&auto=format",
  pizza2: "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?w=400&h=300&fit=crop&auto=format",
  shop: "https://images.unsplash.com/photo-1556095667-9760aa7f4885?w=520&h=660&fit=crop&auto=format",
};

type MenuCategory = "All" | "Pizze" | "Pastas" | "Antipasti";

const MENU_ITEMS: Record<Exclude<MenuCategory, "All">, { name: string; price: string; desc: string }[]> = {
  Pizze: [
    { name: "Margherita Clássica", price: "₹680", desc: "San Marzano, fior di latte, fresh basil, cold-pressed olive oil" },
    { name: "Diavola do Leão", price: "₹780", desc: "Spicy Calabrian salami, n'duja, smoked scamorza, chilli honey" },
    { name: "Funghi Selvatici", price: "₹750", desc: "Wild mushrooms, black truffle oil, fontina, fresh thyme" },
    { name: "Bianca do Leão", price: "₹820", desc: "White base, Goan clams, lemon zest, parsley, fleur de sel" },
  ],
  Pastas: [
    { name: "Pappardelle al Ragù", price: "₹720", desc: "Slow-braised local lamb, rosemary, aged parmesan" },
    { name: "Cacio e Pepe Selvatica", price: "₹640", desc: "Spaghetti, pecorino romano, cracked Malabar pepper" },
    { name: "Linguine alle Vongole", price: "₹840", desc: "Clams, white wine, Goan chilli, garlic, extra virgin olive oil" },
  ],
  Antipasti: [
    { name: "Bruschetta da Casa", price: "₹380", desc: "Woodfired sourdough, vine-ripened tomato conserva, basil oil" },
    { name: "Burrata Fresca", price: "₹520", desc: "Seasonal Goan produce, aged balsamic reduction, micro herbs" },
    { name: "Prosciutto e Melone", price: "₹480", desc: "24-month cured ham, cantaloupe, wildflower honey" },
  ],
};

const ALL_ITEMS = Object.values(MENU_ITEMS).flat();

const NAV_LINKS = ["Story", "Stay", "Eat", "Shop", "Inquire"];

const SUITE_FEATURES = [
  { icon: <Sunset size={18} />, label: "Espresso Veranda", sub: "Private sun terrace" },
  { icon: <Leaf size={18} />, label: "Tropical Canopy", sub: "Palm-shaded courtyard" },
  { icon: <Wifi size={18} />, label: "Curated Amenities", sub: "No television. Slow living." },
  { icon: <Coffee size={18} />, label: "Morning Ritual", sub: "Filter coffee & fresh papaya" },
  { icon: <Wind size={18} />, label: "Cross Ventilation", sub: "Colonial high-ceiling rooms" },
  { icon: <Star size={18} />, label: "Heritage Grade I", sub: "Listed by INTACH Goa" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MenuCategory>("Pizze");
  const [guests, setGuests] = useState(2);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const displayedItems = activeTab === "All" ? ALL_ITEMS : MENU_ITEMS[activeTab as Exclude<MenuCategory, "All">];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: SANS }}
    >
      {/* ═══════════════════════════════════════ NAVIGATION */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "rgba(249,247,240,0.94)",
          backdropFilter: "blur(12px)",
          borderColor: SUBTLE_BORDER,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Brandmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Casa do Leão home"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              style={{ background: TERRACOTTA, color: LINEN, fontFamily: SERIF }}
            >
              L
            </div>
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: SERIF, color: CHARCOAL }}
            >
              Casa do Leão
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] tracking-[0.18em] uppercase transition-colors duration-200"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = CHARCOAL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Reserve CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-200 hover:opacity-80"
              style={{ background: CHARCOAL, color: LINEN }}
            >
              Reserve
            </a>
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: CHARCOAL }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t px-6 py-6 flex flex-col gap-5"
            style={{ background: LINEN, borderColor: SUBTLE_BORDER }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm tracking-[0.15em] uppercase font-medium"
                style={{ color: MUTED }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#booking"
              className="mt-2 text-center py-3 rounded-full text-[11px] tracking-[0.18em] uppercase font-medium"
              style={{ background: CHARCOAL, color: LINEN }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve a Stay
            </a>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════ HERO */}
      <section
        className="pt-16 min-h-screen grid lg:grid-cols-[1fr_1fr]"
        id="story"
      >
        {/* Left: editorial text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ background: OCHRE }} />
            <span
              className="text-[10px] tracking-[0.25em] uppercase font-medium"
              style={{ color: TERRACOTTA }}
            >
              Est. 1874 · Nerul, North Goa
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl xl:text-7xl font-medium leading-[1.05] mb-6"
            style={{ fontFamily: SERIF, color: CHARCOAL, letterSpacing: "-0.01em" }}
          >
            A restored<br />
            <em
              className="not-italic"
              style={{ color: TERRACOTTA }}
            >
              Portuguese
            </em>
            <br />
            heritage<br />
            sanctuary
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[56px]" style={{ background: OCHRE }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: OCHRE }} />
          </div>

          <p
            className="text-base lg:text-[17px] leading-relaxed max-w-[400px] mb-10"
            style={{ color: MUTED, lineHeight: "1.75" }}
          >
            Slow mornings, woodfired evenings, and the soft architecture of time.
            Come as a guest. Leave as a keeper of stories. A space where Goa's soul
            breathes through every archway.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-85"
              style={{ background: CHARCOAL, color: LINEN }}
            >
              Reserve a Stay
              <ArrowRight size={15} />
            </a>
            <a
              href="#stay"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide border transition-all duration-200 hover:bg-foreground hover:text-primary-foreground"
              style={{
                borderColor: CHARCOAL,
                color: CHARCOAL,
                background: "transparent",
              }}
            >
              Explore the Villa
            </a>
          </div>

          {/* Trust signals */}
          <div
            className="flex items-center gap-6 mt-12 pt-8 border-t"
            style={{ borderColor: SUBTLE_BORDER }}
          >
            {[
              { label: "150", sub: "Years of Heritage" },
              { label: "6", sub: "Suites & Rooms" },
              { label: "4.9", sub: "Guest Rating" },
            ].map(({ label, sub }) => (
              <div key={sub}>
                <p
                  className="text-2xl font-semibold leading-none mb-1"
                  style={{ fontFamily: SERIF, color: CHARCOAL }}
                >
                  {label}
                </p>
                <p className="text-[11px] tracking-wide uppercase" style={{ color: MUTED }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: arch photo frame */}
        <div
          className="relative flex items-center justify-center px-8 lg:px-12 xl:px-16 py-16 lg:py-20"
          style={{ background: LINEN_DARK }}
        >
          {/* Decorative label */}
          <div
            className="absolute top-12 right-8 lg:right-12 flex flex-col items-end gap-1.5 hidden sm:flex"
          >
            <div className="h-px w-16" style={{ background: OCHRE }} />
            <p
              className="text-[10px] tracking-[0.22em] uppercase"
              style={{ color: MUTED }}
            >
              150 Years of Legacy
            </p>
          </div>

          {/* Arch frame */}
          <div className="relative w-full max-w-[380px] lg:max-w-[420px] mx-auto">
            {/* Outer gold frame offset */}
            <div
              className="absolute -top-3 -left-3 w-full h-full rounded-t-[160px] rounded-b-xl border pointer-events-none"
              style={{ borderColor: OCHRE, opacity: 0.4, borderWidth: "1px" }}
            />

            {/* Main photo frame */}
            <div
              className="relative overflow-hidden rounded-t-[160px] rounded-b-xl shadow-2xl"
              style={{ aspectRatio: "3/4", background: LINEN_DARK }}
            >
              <img
                src={IMGS.hero}
                alt="Casa do Leão heritage villa with Portuguese colonial architecture"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 55%, ${CHARCOAL}55 100%)`,
                }}
              />
            </div>

            {/* Floating caption card */}
            <div
              className="absolute bottom-5 left-5 right-5 rounded-xl p-4 border"
              style={{
                background: "rgba(249,247,240,0.92)",
                backdropFilter: "blur(10px)",
                borderColor: SUBTLE_BORDER,
              }}
            >
              <p
                className="text-sm font-medium leading-snug mb-0.5"
                style={{ fontFamily: SERIF, color: CHARCOAL }}
              >
                The Great Hall & Verandah
              </p>
              <p className="text-[11px]" style={{ color: MUTED }}>
                Built 1874 · Nerul Village, North Goa, India
              </p>
            </div>
          </div>

          {/* Decorative corner mark */}
          <div
            className="absolute bottom-12 left-8 lg:left-12 flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: TERRACOTTA }} />
            <div className="h-px w-12" style={{ background: TERRACOTTA, opacity: 0.5 }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ OUR STORY */}
      <section
        className="py-24 lg:py-36"
        id="story"
        style={{ background: LINEN }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left: narrative */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ background: OCHRE }} />
              <span
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ color: TERRACOTTA }}
              >
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl font-medium leading-[1.1] mb-8"
              style={{ fontFamily: SERIF, color: CHARCOAL }}
            >
              A house that<br />
              <em style={{ color: TERRACOTTA }}>remembers</em><br />
              everything
            </h2>

            <div className="space-y-5" style={{ color: MUTED }}>
              <p className="text-base leading-relaxed">
                Originally built in 1874 by the Fernandes family — Goan Catholic merchants
                who returned from Lisbon with azulejo tiles, iron balustrades, and a recipe
                for bread that has never been written down — Casa do Leão has stood through
                monsoons, partition, and the long quiet of modernity.
              </p>
              <p className="text-base leading-relaxed">
                Today, it houses six restored guest suites, a sourdough pizzeria fired
                in the original wood-kiln corner, and a small boutique curating slow-fashion
                pieces from ethical Goan makers. Every corner holds a story; every meal
                is an act of memory.
              </p>
              <p className="text-base leading-relaxed">
                We do not call it a hotel. We call it a{" "}
                <em style={{ fontFamily: SERIF, color: CHARCOAL }}>
                  casa que respira
                </em>
                {" "}— a house that breathes.
              </p>
            </div>

            {/* Separator with gold */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-px flex-1" style={{ background: OCHRE }} />
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border"
                style={{ borderColor: OCHRE, color: OCHRE, fontFamily: SERIF }}
              >
                L
              </div>
              <div className="h-px flex-1" style={{ background: OCHRE }} />
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { n: "Nerul Village", d: "North Goa" },
                { n: "Grade I Heritage", d: "INTACH Listed" },
                { n: "5 Acres", d: "Tropical Gardens" },
              ].map(({ n, d }) => (
                <div key={n}>
                  <p className="text-sm font-medium" style={{ color: CHARCOAL, fontFamily: SERIF }}>
                    {n}
                  </p>
                  <p className="text-[11px] tracking-wide uppercase mt-0.5" style={{ color: MUTED }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: offset double photo */}
          <div className="relative h-[520px] lg:h-[600px]">
            {/* Back photo */}
            <div
              className="absolute top-0 right-0 w-[78%] h-[62%] rounded-xl overflow-hidden border shadow-lg"
              style={{ borderColor: SUBTLE_BORDER_GOLD }}
            >
              <img
                src={IMGS.courtyard}
                alt="Arched colonial courtyard at Casa do Leão"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Front photo */}
            <div
              className="absolute bottom-0 left-0 w-[74%] h-[60%] rounded-xl overflow-hidden shadow-xl border"
              style={{ borderColor: SUBTLE_BORDER }}
            >
              <img
                src={IMGS.garden}
                alt="Shaded garden terrace at Casa do Leão"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold accent strip */}
            <div
              className="absolute top-[58%] right-[18%] w-px h-24"
              style={{ background: `linear-gradient(to bottom, ${OCHRE}, transparent)` }}
            />

            {/* Pull quote card */}
            <div
              className="absolute bottom-[28%] right-0 w-[40%] rounded-xl p-4 border shadow-md"
              style={{ background: LINEN, borderColor: SUBTLE_BORDER_GOLD }}
            >
              <p
                className="text-sm leading-snug italic"
                style={{ fontFamily: SERIF, color: CHARCOAL }}
              >
                "Every room has a window with a view worth waking up for."
              </p>
              <p className="text-[10px] tracking-wide uppercase mt-2" style={{ color: MUTED }}>
                — Priya M., Guest 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ HERITAGE STAY */}
      <section
        className="py-24 lg:py-36"
        id="stay"
        style={{ background: LINEN_DARK }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Section header */}
          <div className="flex items-center justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px" style={{ background: OCHRE }} />
                <span
                  className="text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: TERRACOTTA }}
                >
                  Heritage Stay
                </span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-medium leading-tight"
                style={{ fontFamily: SERIF, color: CHARCOAL }}
              >
                Rooms that hold<br />the weight of{" "}
                <em style={{ color: TERRACOTTA }}>time</em>
              </h2>
            </div>
            <a
              href="#booking"
              className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-all duration-200 hover:bg-foreground hover:text-primary-foreground"
              style={{ borderColor: CHARCOAL, color: CHARCOAL }}
            >
              Book a Room <ChevronRight size={15} />
            </a>
          </div>

          {/* Main stay layout */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start">
            {/* Photo frame */}
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: SUBTLE_BORDER_GOLD, aspectRatio: "16/10" }}
            >
              <img
                src={IMGS.suite}
                alt="Heritage suite room with pool view at Casa do Leão"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, transparent 60%, ${CHARCOAL}40 100%)`,
                }}
              />
              {/* Price badge */}
              <div
                className="absolute top-5 right-5 rounded-xl px-4 py-2.5 border"
                style={{
                  background: "rgba(249,247,240,0.9)",
                  backdropFilter: "blur(8px)",
                  borderColor: SUBTLE_BORDER_GOLD,
                }}
              >
                <p className="text-[10px] tracking-widest uppercase" style={{ color: MUTED }}>
                  From
                </p>
                <p
                  className="text-xl font-semibold leading-none mt-0.5"
                  style={{ fontFamily: SERIF, color: CHARCOAL }}
                >
                  ₹8,400
                </p>
                <p className="text-[10px]" style={{ color: MUTED }}>per night</p>
              </div>
              {/* Inner architectural frame border */}
              <div
                className="absolute inset-3 rounded-xl pointer-events-none border"
                style={{ borderColor: SUBTLE_BORDER_GOLD }}
              />
            </div>

            {/* Features panel */}
            <div>
              <div
                className="rounded-2xl p-7 border mb-5"
                style={{ background: LINEN, borderColor: SUBTLE_BORDER }}
              >
                <h3
                  className="text-xl font-medium mb-1.5"
                  style={{ fontFamily: SERIF, color: CHARCOAL }}
                >
                  The Fernandes Suite
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
                  The flagship room of the casa. Original rosewood furniture, hand-painted
                  azulejo headboard panel, and a private verandah facing the coconut grove.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {SUITE_FEATURES.map(({ icon, label, sub }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 p-3 rounded-xl border"
                      style={{
                        borderColor: SUBTLE_BORDER,
                        background: LINEN_DARK,
                      }}
                    >
                      <div
                        className="mt-0.5 shrink-0"
                        style={{ color: TERRACOTTA }}
                      >
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-medium leading-tight" style={{ color: CHARCOAL }}>
                          {label}
                        </p>
                        <p className="text-[11px] mt-0.5 leading-tight" style={{ color: MUTED }}>
                          {sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#booking"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-85"
                style={{ background: CHARCOAL, color: LINEN }}
              >
                Reserve the Fernandes Suite
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Suite type row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { name: "The Fernandes Suite", size: "580 sq ft", from: "₹8,400" },
              { name: "Garden Room", size: "340 sq ft", from: "₹5,200" },
              { name: "Azulejo Studio", size: "280 sq ft", from: "₹4,100" },
              { name: "Mango Loft", size: "420 sq ft", from: "₹6,300" },
            ].map(({ name, size, from }) => (
              <div
                key={name}
                className="rounded-xl p-4 border hover:border-current transition-colors duration-200 cursor-pointer group"
                style={{ borderColor: SUBTLE_BORDER, background: LINEN }}
              >
                <p
                  className="text-sm font-medium leading-snug mb-1"
                  style={{ fontFamily: SERIF, color: CHARCOAL }}
                >
                  {name}
                </p>
                <p className="text-[11px]" style={{ color: MUTED }}>{size}</p>
                <p
                  className="text-sm font-medium mt-2"
                  style={{ color: TERRACOTTA }}
                >
                  {from} <span className="text-[11px] font-normal" style={{ color: MUTED }}>/night</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ LEÃO PIZZERIA */}
      <section
        className="py-24 lg:py-36"
        id="eat"
        style={{ background: CHARCOAL }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
            {/* Left: Gallery */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px" style={{ background: OCHRE }} />
                <span
                  className="text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: OCHRE }}
                >
                  Leão Pizzeria
                </span>
              </div>

              <h2
                className="text-4xl lg:text-5xl font-medium leading-tight mb-6"
                style={{ fontFamily: SERIF, color: LINEN }}
              >
                Woodfired.<br />
                <em style={{ color: OCHRE }}>Slow-risen.</em><br />
                Unforgettable.
              </h2>

              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "rgba(249,247,240,0.6)" }}
              >
                Our sourdough starter — Maria — has been alive since 1991. Every pizza is fired
                in the original wood-kiln at 450°C, topped with produce from Nerul market and
                Goan spice gardens.
              </p>

              {/* Main gallery frame */}
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: SUBTLE_BORDER_GOLD, aspectRatio: "1/1" }}
              >
                <img
                  src={IMGS.pizza}
                  alt="Woodfired sourdough pizza at Leão Pizzeria"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${CHARCOAL}70 0%, transparent 50%)`,
                  }}
                />
                {/* Inner frame */}
                <div
                  className="absolute inset-3 rounded-xl pointer-events-none border"
                  style={{ borderColor: SUBTLE_BORDER_GOLD }}
                />
                {/* Caption */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-medium" style={{ color: LINEN }}>
                    Diavola do Leão
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: OCHRE }}>
                    The signature since 1991
                  </p>
                </div>
              </div>

              {/* Open hours */}
              <div
                className="flex items-center gap-4 mt-6 p-4 rounded-xl border"
                style={{ borderColor: "rgba(223,167,50,0.3)", background: "rgba(249,247,240,0.06)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: TERRACOTTA }}
                >
                  <Coffee size={15} style={{ color: LINEN }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: LINEN }}>
                    Open Daily · 12:00 — 22:00
                  </p>
                  <p className="text-[11px]" style={{ color: "rgba(249,247,240,0.5)" }}>
                    Reservations recommended for dinner
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Menu */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-xl font-medium"
                  style={{ fontFamily: SERIF, color: LINEN }}
                >
                  Today's Menu
                </h3>
                <div
                  className="text-[11px] tracking-wide uppercase"
                  style={{ color: "rgba(249,247,240,0.4)" }}
                >
                  Seasonal · Handwritten daily
                </div>
              </div>

              {/* Category tabs */}
              <div
                className="flex gap-1.5 p-1 rounded-full mb-8"
                style={{ background: "rgba(249,247,240,0.07)" }}
              >
                {(["All", "Pizze", "Pastas", "Antipasti"] as MenuCategory[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex-1 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200"
                    style={
                      activeTab === tab
                        ? { background: OCHRE, color: CHARCOAL }
                        : { color: "rgba(249,247,240,0.55)" }
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Menu items */}
              <div className="space-y-1">
                {displayedItems.map((item, i) => (
                  <div
                    key={item.name + i}
                    className="group flex items-start justify-between gap-4 py-4 border-b transition-all duration-150"
                    style={{
                      borderColor: "rgba(249,247,240,0.09)",
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium leading-snug mb-1"
                        style={{ fontFamily: SERIF, color: LINEN }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-[12px] leading-relaxed"
                        style={{ color: "rgba(249,247,240,0.48)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: OCHRE }}
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-85"
                  style={{ background: OCHRE, color: CHARCOAL }}
                >
                  <ShoppingBag size={15} />
                  Order Food Online
                </button>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-medium border transition-all duration-200 hover:bg-[rgba(249,247,240,0.1)]"
                  style={{ borderColor: "rgba(249,247,240,0.2)", color: LINEN }}
                >
                  Full Menu PDF
                </a>
              </div>

              {/* Allergen note */}
              <p
                className="text-[11px] text-center mt-4"
                style={{ color: "rgba(249,247,240,0.3)" }}
              >
                All items contain gluten. Please inform us of allergies. Prices inclusive of taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ ETHICAL WEAR SHOP */}
      <section
        className="py-24 lg:py-36"
        id="shop"
        style={{ background: LINEN }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left: Boutique content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px" style={{ background: OCHRE }} />
                <span
                  className="text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: TERRACOTTA }}
                >
                  The Boutique
                </span>
              </div>

              <h2
                className="text-4xl lg:text-5xl font-medium leading-tight mb-6"
                style={{ fontFamily: SERIF, color: CHARCOAL }}
              >
                Wear what<br />
                the{" "}
                <em style={{ color: TERRACOTTA }}>earth</em>
                {" "}makes
              </h2>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: MUTED }}
              >
                A curated selection of organic linen, handwoven khadi, and naturally dyed
                textiles — sourced exclusively from Goan and Konkan artisan cooperatives.
                Every piece is slow-made, limited-run, and ethically traced.
              </p>

              {/* Collection highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "Organic Linen", sub: "Handwoven in Aldona, Goa" },
                  { label: "Natural Dyes", sub: "Indigo, madder & turmeric" },
                  { label: "Zero Synthetics", sub: "100% natural fibres only" },
                  { label: "Artisan-Made", sub: "15 local cooperatives" },
                ].map(({ label, sub }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl border"
                    style={{ borderColor: SUBTLE_BORDER, background: LINEN_DARK }}
                  >
                    <p className="text-sm font-medium" style={{ color: CHARCOAL }}>
                      {label}
                    </p>
                    <p className="text-[11px] mt-0.5" style={{ color: MUTED }}>
                      {sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* LANA novel highlight card */}
              <div
                className="rounded-2xl p-6 border relative overflow-hidden"
                style={{ background: CHARCOAL, borderColor: "rgba(223,167,50,0.3)" }}
              >
                {/* Decorative gold corner */}
                <div
                  className="absolute top-0 right-0 w-20 h-20"
                  style={{
                    background: `radial-gradient(circle at 100% 0%, ${OCHRE}25 0%, transparent 70%)`,
                  }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: OCHRE }}
                  >
                    <BookOpen size={20} style={{ color: CHARCOAL }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase mb-1"
                      style={{ color: OCHRE }}
                    >
                      Featured in the Boutique
                    </p>
                    <p
                      className="text-xl font-medium leading-snug mb-1"
                      style={{ fontFamily: SERIF, color: LINEN }}
                    >
                      LANA
                    </p>
                    <p
                      className="text-[12px] leading-relaxed mb-3"
                      style={{ color: "rgba(249,247,240,0.6)" }}
                    >
                      A novel by Tatsiana Chykhayeva. A slow, gorgeous meditation on
                      belonging, textile memory, and what we inherit from those
                      who dressed before us.
                    </p>
                    <button
                      className="inline-flex items-center gap-1.5 text-xs font-medium"
                      style={{ color: OCHRE }}
                    >
                      Available in-store & online <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Shop photo */}
            <div className="relative">
              {/* Main photo */}
              <div
                className="relative rounded-2xl overflow-hidden border shadow-xl"
                style={{ aspectRatio: "4/5", borderColor: SUBTLE_BORDER_GOLD }}
              >
                <img
                  src={IMGS.shop}
                  alt="Organic linen textile at Casa do Leão boutique"
                  className="w-full h-full object-cover"
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 60%, ${CHARCOAL}35 100%)`,
                  }}
                />
                {/* Inner frame */}
                <div
                  className="absolute inset-3 rounded-xl border pointer-events-none"
                  style={{ borderColor: SUBTLE_BORDER_GOLD }}
                />
              </div>

              {/* Floating product tag */}
              <div
                className="absolute top-8 -left-4 rounded-xl p-4 border shadow-lg max-w-[170px]"
                style={{ background: LINEN, borderColor: SUBTLE_BORDER_GOLD }}
              >
                <div
                  className="w-5 h-5 rounded-full mb-2"
                  style={{ background: TERRACOTTA }}
                />
                <p className="text-xs font-medium" style={{ color: CHARCOAL, fontFamily: SERIF }}>
                  Summer Linen Kurta
                </p>
                <p className="text-[11px] mt-0.5" style={{ color: MUTED }}>
                  Handloom · Natural indigo
                </p>
                <p
                  className="text-sm font-semibold mt-2"
                  style={{ color: TERRACOTTA, fontFamily: SERIF }}
                >
                  ₹3,200
                </p>
              </div>

              {/* Shop CTA button */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-85 shadow-lg"
                  style={{ background: CHARCOAL, color: LINEN }}
                >
                  <ShoppingBag size={15} />
                  Browse the Boutique
                </a>
              </div>

              {/* Decorative offset mark */}
              <div
                className="absolute -bottom-4 right-8 w-24 h-px"
                style={{ background: OCHRE }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ BOOKING CARD */}
      <section
        className="py-24 lg:py-36"
        id="booking"
        style={{ background: LINEN_DARK }}
      >
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          {/* Section label */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: OCHRE }} />
              <span
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ color: TERRACOTTA }}
              >
                Reservations
              </span>
              <div className="h-px w-8" style={{ background: OCHRE }} />
            </div>
            <h2
              className="text-4xl lg:text-5xl font-medium leading-tight"
              style={{ fontFamily: SERIF, color: CHARCOAL }}
            >
              Reserve your<br />
              <em style={{ color: TERRACOTTA }}>sanctuary</em>
            </h2>
            <p className="text-sm mt-4 max-w-md mx-auto" style={{ color: MUTED }}>
              We confirm within 4 hours. Flexible cancellation up to 72 hours prior.
            </p>
          </div>

          {/* Booking card */}
          <div
            className="rounded-3xl border shadow-2xl overflow-hidden"
            style={{ borderColor: SUBTLE_BORDER_GOLD, background: LINEN }}
          >
            {/* Card header strip */}
            <div
              className="px-8 py-5 border-b flex items-center justify-between"
              style={{ background: CHARCOAL, borderColor: "rgba(223,167,50,0.2)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: OCHRE, color: CHARCOAL, fontFamily: SERIF }}
                >
                  L
                </div>
                <div>
                  <p
                    className="text-sm font-medium leading-none"
                    style={{ color: LINEN, fontFamily: SERIF }}
                  >
                    Casa do Leão
                  </p>
                  <p
                    className="text-[11px] mt-0.5"
                    style={{ color: "rgba(249,247,240,0.5)" }}
                  >
                    Nerul Village, North Goa
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: "#4ade80" }} />
                <p className="text-[11px]" style={{ color: "rgba(249,247,240,0.5)" }}>
                  Rooms available
                </p>
              </div>
            </div>

            {/* Form body */}
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Check-in */}
                <div>
                  <label
                    className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium mb-2"
                    style={{ color: MUTED }}
                  >
                    <CalendarDays size={13} style={{ color: TERRACOTTA }} />
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkin}
                    onChange={(e) => setCheckin(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: LINEN_DARK,
                      borderColor: SUBTLE_BORDER,
                      color: CHARCOAL,
                      fontFamily: SANS,
                    }}
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label
                    className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium mb-2"
                    style={{ color: MUTED }}
                  >
                    <CalendarDays size={13} style={{ color: TERRACOTTA }} />
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: LINEN_DARK,
                      borderColor: SUBTLE_BORDER,
                      color: CHARCOAL,
                      fontFamily: SANS,
                    }}
                  />
                </div>
              </div>

              {/* Room type */}
              <div className="mb-5">
                <label
                  className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium mb-2"
                  style={{ color: MUTED }}
                >
                  Room Type
                </label>
                <select
                  className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                  style={{
                    background: LINEN_DARK,
                    borderColor: SUBTLE_BORDER,
                    color: CHARCOAL,
                    fontFamily: SANS,
                  }}
                >
                  <option>The Fernandes Suite — ₹8,400 / night</option>
                  <option>Garden Room — ₹5,200 / night</option>
                  <option>Azulejo Studio — ₹4,100 / night</option>
                  <option>Mango Loft — ₹6,300 / night</option>
                </select>
              </div>

              {/* Guest stepper */}
              <div className="mb-8">
                <label
                  className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium mb-2"
                  style={{ color: MUTED }}
                >
                  <Users size={13} style={{ color: TERRACOTTA }} />
                  Guests
                </label>
                <div
                  className="flex items-center justify-between px-4 py-3 rounded-xl border"
                  style={{ background: LINEN_DARK, borderColor: SUBTLE_BORDER }}
                >
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-150 hover:bg-foreground hover:text-primary-foreground"
                    style={{ borderColor: SUBTLE_BORDER, color: CHARCOAL }}
                    aria-label="Decrease guests"
                  >
                    <Minus size={14} />
                  </button>
                  <div className="text-center">
                    <p
                      className="text-xl font-semibold leading-none"
                      style={{ fontFamily: SERIF, color: CHARCOAL }}
                    >
                      {guests}
                    </p>
                    <p className="text-[11px] mt-1" style={{ color: MUTED }}>
                      {guests === 1 ? "Guest" : "Guests"}
                    </p>
                  </div>
                  <button
                    onClick={() => setGuests(Math.min(8, guests + 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-150 hover:bg-foreground hover:text-primary-foreground"
                    style={{ borderColor: SUBTLE_BORDER, color: CHARCOAL }}
                    aria-label="Increase guests"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                className="w-full py-4 rounded-full text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-85"
                style={{ background: CHARCOAL, color: LINEN }}
              >
                Check Availability
                <ArrowRight size={16} />
              </button>

              {/* Policy note */}
              <p
                className="text-center text-[11px] mt-4 leading-relaxed"
                style={{ color: MUTED }}
              >
                Free cancellation · No credit card required to hold ·{" "}
                <span style={{ color: TERRACOTTA }}>Instant email confirmation</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ FOOTER */}
      <footer
        style={{ background: "#1a1814", borderTop: `1px solid rgba(255,255,255,0.06)` }}
      >
        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Col 1: Brand + address */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: TERRACOTTA, color: LINEN, fontFamily: SERIF }}
                >
                  L
                </div>
                <span
                  className="text-base font-medium"
                  style={{ fontFamily: SERIF, color: LINEN }}
                >
                  Casa do Leão
                </span>
              </div>
              <p
                className="text-[13px] leading-relaxed mb-6"
                style={{ color: "rgba(249,247,240,0.45)" }}
              >
                A Portuguese heritage villa,<br />
                pizzeria & slow-fashion boutique<br />
                in the heart of Nerul, Goa.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: OCHRE }} />
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(249,247,240,0.45)" }}>
                    Casa do Leão, Nerul Village,<br />
                    North Goa — 403 114, India
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} style={{ color: OCHRE }} />
                  <p className="text-[12px]" style={{ color: "rgba(249,247,240,0.45)" }}>
                    +91 98765 43210
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} style={{ color: OCHRE }} />
                  <p className="text-[12px]" style={{ color: "rgba(249,247,240,0.45)" }}>
                    hello@casadoleao.in
                  </p>
                </div>
              </div>
            </div>

            {/* Col 2: Explore links */}
            <div>
              <p
                className="text-[10px] tracking-[0.22em] uppercase font-medium mb-5"
                style={{ color: OCHRE }}
              >
                Explore
              </p>
              <ul className="space-y-3">
                {[
                  "Our Story",
                  "Heritage Stay",
                  "Leão Pizzeria",
                  "The Boutique",
                  "Events & Residencies",
                  "Gift Vouchers",
                  "Press & Media",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] transition-colors duration-150"
                      style={{ color: "rgba(249,247,240,0.45)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = LINEN)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(249,247,240,0.45)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Map locator */}
            <div>
              <p
                className="text-[10px] tracking-[0.22em] uppercase font-medium mb-5"
                style={{ color: OCHRE }}
              >
                Find Us
              </p>
              {/* Map placeholder */}
              <div
                className="relative rounded-xl overflow-hidden mb-4"
                style={{ aspectRatio: "4/3", background: "#2a2620", border: "1px solid rgba(223,167,50,0.2)" }}
              >
                {/* Stylised map grid */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={`h${i}`}
                      className="absolute left-0 right-0 h-px"
                      style={{ top: `${(i + 1) * 16}%`, background: OCHRE }}
                    />
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={`v${i}`}
                      className="absolute top-0 bottom-0 w-px"
                      style={{ left: `${(i + 1) * 20}%`, background: OCHRE }}
                    />
                  ))}
                </div>
                {/* Pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: TERRACOTTA }}
                    >
                      <MapPin size={16} style={{ color: LINEN }} />
                    </div>
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                      style={{ background: TERRACOTTA }}
                    />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-3 left-3">
                  <p className="text-[10px] font-medium" style={{ color: LINEN }}>
                    Nerul, North Goa
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] flex items-center gap-1.5 transition-colors duration-150"
                style={{ color: OCHRE }}
              >
                Open in Google Maps <ChevronRight size={12} />
              </a>
            </div>

            {/* Col 4: Social + newsletter */}
            <div>
              <p
                className="text-[10px] tracking-[0.22em] uppercase font-medium mb-5"
                style={{ color: OCHRE }}
              >
                Follow the Casa
              </p>
              <div className="flex gap-3 mb-8">
                {[
                  { icon: <Instagram size={17} />, label: "Instagram" },
                  { icon: <Facebook size={17} />, label: "Facebook" },
                  { icon: <Twitter size={17} />, label: "Twitter" },
                ].map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-150"
                    style={{
                      borderColor: "rgba(249,247,240,0.15)",
                      color: "rgba(249,247,240,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = OCHRE;
                      e.currentTarget.style.color = OCHRE;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(249,247,240,0.15)";
                      e.currentTarget.style.color = "rgba(249,247,240,0.5)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              <p
                className="text-[10px] tracking-[0.22em] uppercase font-medium mb-3"
                style={{ color: "rgba(249,247,240,0.35)" }}
              >
                Slow Letters
              </p>
              <p
                className="text-[12px] leading-relaxed mb-4"
                style={{ color: "rgba(249,247,240,0.35)" }}
              >
                Seasonal dispatches from the casa — stories, menus, new pieces.
              </p>
              <div className="flex rounded-full overflow-hidden border" style={{ borderColor: "rgba(249,247,240,0.12)" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 text-sm bg-transparent outline-none"
                  style={{ color: LINEN, fontFamily: SANS }}
                />
                <button
                  className="px-4 py-2.5 text-xs font-medium tracking-wide transition-all duration-150 hover:opacity-80"
                  style={{ background: OCHRE, color: CHARCOAL }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(249,247,240,0.06)" }}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              className="text-[11px]"
              style={{ color: "rgba(249,247,240,0.25)" }}
            >
              © 2025 Casa do Leão, Nerul, Goa. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {["Privacy Policy", "Terms & Conditions", "Accessibility"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[11px] transition-colors duration-150"
                  style={{ color: "rgba(249,247,240,0.25)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(249,247,240,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(249,247,240,0.25)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
