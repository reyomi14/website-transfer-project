import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Для кого", href: "#audience" },
  { label: "Как работает", href: "#how" },
  { label: "Экономика", href: "#economics" },
  { label: "Вопросы", href: "#faq" },
  { label: "Истории партнеров", href: "#stories" },
];

const HeroSection = () => {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--orda-green))] flex items-center justify-center text-[hsl(var(--orda-cream))] font-heading font-bold text-sm group-hover:scale-105 transition-transform">
              О
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold tracking-tight">ОРДА</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Партнёр Парк
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/"
              className="hidden md:flex w-10 h-10 rounded-full bg-secondary items-center justify-center hover:bg-[hsl(var(--orda-green))] hover:text-[hsl(var(--orda-cream))] transition-all"
              aria-label="Telegram"
            >
              <Icon name="Send" size={16} />
            </a>
            <a
              href="tel:+79233350610"
              className="hidden sm:block text-sm font-semibold tracking-tight"
            >
              8-923-335-06-10
            </a>
            <Button className="rounded-full bg-[hsl(var(--orda-green))] hover:bg-[hsl(var(--orda-green-deep))] text-[hsl(var(--orda-cream))] px-5 h-11 font-medium">
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[80vh] lg:min-h-[88vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage:
              "url('https://cdn.poehali.dev/projects/b8918883-18ae-4fd9-a195-7aec236008d8/bucket/a9a7d6cb-5b92-4555-a0ec-e18e4f076cf3.png')",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent pointer-events-none"
          aria-hidden
        />

        <div className="container mx-auto relative z-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-balance">
              Работай на себя.
              <br />
              <span className="text-[hsl(var(--orda-green))]">
                Но не в одиночку.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg lg:text-xl text-foreground/70 leading-relaxed">
              Стабильные заказы для владельцев фур
              <br />
              без поиска клиентов и бумаг
            </p>

            <div className="mt-10">
              <Button
                size="lg"
                className="rounded-2xl bg-[hsl(var(--orda-green))] hover:bg-[hsl(var(--orda-green-deep))] text-[hsl(var(--orda-cream))] h-14 px-9 text-base font-semibold group"
              >
                Стать партнёром
                <Icon
                  name="ArrowRight"
                  size={18}
                  className="ml-2 group-hover:translate-x-0.5 transition-transform"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border py-5 bg-[hsl(var(--orda-green))] text-[hsl(var(--orda-cream))]">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-heading text-2xl md:text-3xl font-medium">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {["Реф 20т", "•", "Тент 20т", "•", "Изотерм", "•", "Мега-фура", "•", "Сцепка", "•", "Реф 20т", "•", "Тент 20т", "•", "Изотерм", "•", "Мега-фура", "•", "Сцепка", "•"].map(
                (w, j) => (
                  <span key={j} className={w === "•" ? "text-[hsl(var(--orda-orange))]" : ""}>
                    {w}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
