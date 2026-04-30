import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import LeadDialog from "@/components/landing/LeadDialog";

const navItems = [
  { label: "Для кого", href: "#audience" },
  { label: "Как работает", href: "#how" },
  { label: "Экономика", href: "#economics" },
  { label: "Вопросы", href: "#faq" },
  { label: "Истории партнеров", href: "#stories" },
];

const HERO_DESKTOP =
  "https://cdn.poehali.dev/projects/b8918883-18ae-4fd9-a195-7aec236008d8/bucket/e28d0981-862d-4ab1-9a7f-5b06b5565920.png";
const HERO_MOBILE =
  "https://cdn.poehali.dev/projects/b8918883-18ae-4fd9-a195-7aec236008d8/files/8cb034c4-baba-4e98-a9e5-5465a69796f8.jpg";

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
            <LeadDialog
              source="header"
              trigger={
                <Button className="rounded-full bg-[hsl(var(--orda-green))] hover:bg-[hsl(var(--orda-green-deep))] text-[hsl(var(--orda-cream))] px-5 h-11 font-medium">
                  Оставить заявку
                </Button>
              }
            />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <picture aria-hidden>
          <source media="(max-width: 767px)" srcSet={HERO_MOBILE} />
          <img
            src={HERO_DESKTOP}
            alt=""
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </picture>

        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent pointer-events-none hidden md:block"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/30 to-background pointer-events-none md:hidden"
          aria-hidden
        />

        <div className="container mx-auto relative z-10 min-h-[78vh] md:min-h-[82vh] flex items-center py-20 md:py-24">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-[clamp(2.5rem,6vw,5.75rem)] leading-[1.02] tracking-tight text-balance">
              Работай на себя.
              <br />
              <span className="text-[hsl(var(--orda-green))]">
                Но не в одиночку.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-lg lg:text-xl text-foreground/75 leading-relaxed">
              Стабильные заказы для владельцев фур
              <br className="hidden sm:block" />
              без поиска клиентов и бумаг
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <LeadDialog
                source="hero"
                trigger={
                  <Button
                    size="lg"
                    className="rounded-2xl bg-[hsl(var(--orda-green))] hover:bg-[hsl(var(--orda-green-deep))] text-[hsl(var(--orda-cream))] h-14 px-9 text-base font-semibold group shadow-lg shadow-[hsl(var(--orda-green))]/20"
                  >
                    Стать партнёром
                    <Icon
                      name="ArrowRight"
                      size={18}
                      className="ml-2 group-hover:translate-x-0.5 transition-transform"
                    />
                  </Button>
                }
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl h-14 px-7 text-base font-semibold border-foreground/20 bg-background/60 backdrop-blur-sm hover:bg-foreground hover:text-background"
              >
                <a href="#economics">Посмотреть ставки</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {[
                { icon: "Truck", value: "270+", label: "заказчиков" },
                { icon: "Wallet", value: "15", label: "дней до оплаты" },
                { icon: "Fuel", value: "−20%", label: "на ДТ" },
                { icon: "ShieldCheck", value: "0₽", label: "за вступление" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-background/70 backdrop-blur-sm border border-border/60 p-4"
                >
                  <Icon
                    name={s.icon}
                    size={18}
                    className="text-[hsl(var(--orda-green))]"
                  />
                  <div className="mt-2 font-heading font-bold text-2xl tracking-tight leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
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