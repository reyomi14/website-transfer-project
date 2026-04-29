import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Для кого", href: "#audience" },
  { label: "Как работает", href: "#how" },
  { label: "Экономика", href: "#economics" },
  { label: "Вопросы", href: "#faq" },
  { label: "Истории партнеров", href: "#stories" },
];

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-3xl bg-card p-6 hover:bg-[hsl(var(--orda-green))] hover:text-[hsl(var(--orda-cream))] transition-colors duration-500">
    <div className="font-heading font-bold text-4xl lg:text-5xl tracking-tight leading-none">
      {value}
    </div>
    <div className="mt-3 text-xs uppercase tracking-[0.15em] opacity-70">
      {label}
    </div>
  </div>
);

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
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 reveal">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-card">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--orda-orange))] animate-pulse" />
                <span className="text-xs font-medium tracking-wide">
                  Принимаем заявки на 2026 — свободно 42 машино-места
                </span>
              </div>

              <h1 className="font-heading font-bold text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-balance">
                Грузоперевозки <br />
                без простоев <br />
                <span className="text-[hsl(var(--orda-green))] italic font-medium">
                  и долгов.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Партнёрский парк для владельцев фур. 270+ заказчиков, оплата
                через 15 дней, скидки до 20% на ДТ. Документы и споры — на нас.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-[hsl(var(--orda-green))] hover:bg-[hsl(var(--orda-green-deep))] text-[hsl(var(--orda-cream))] h-14 px-8 text-base font-medium group"
                >
                  Стать партнёром
                  <Icon
                    name="ArrowUpRight"
                    size={18}
                    className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base font-medium border-foreground/20 hover:bg-foreground hover:text-background"
                >
                  Посмотреть ставки
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 reveal" style={{ animationDelay: "0.2s" }}>
              <div className="grid grid-cols-2 gap-3">
                <Stat value="270+" label="заказчиков" />
                <Stat value="15" label="дней до оплаты" />
                <Stat value="20%" label="скидка на ДТ" />
                <Stat value="0₽" label="за вступление" />
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="mt-20 -mx-[calc(50vw-50%)] overflow-hidden border-y border-border py-5 bg-[hsl(var(--orda-green))] text-[hsl(var(--orda-cream))]">
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
        </div>
      </section>
    </>
  );
};

export default HeroSection;
