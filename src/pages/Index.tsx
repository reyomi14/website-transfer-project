import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  { label: "Для кого", href: "#audience" },
  { label: "Как работает", href: "#how" },
  { label: "Экономика", href: "#economics" },
  { label: "Вопросы", href: "#faq" },
  { label: "Истории партнеров", href: "#stories" },
];

const audience = [
  {
    icon: "Truck",
    title: "Вам нужен стабильный поток заказов",
    featured: true,
  },
  { icon: "Clock", title: "Вы устали от простоев" },
  { icon: "TrendingUp", title: "Вы хотите предсказуемый доход и гарантию оплаты" },
  { icon: "FileText", title: "Вам надоело разбираться с документами" },
  {
    icon: "Scale",
    title: "Вы проигрываете крупным компаниям по стоимости топлива, авто и ГСМ",
  },
];

const before = [
  "Поиск заказов вручную по чатам",
  "Простой 5–10 дней в месяц",
  "Ожидание оплаты 30–60 дней",
  "Нет авансирования",
  "Риски неплатежей",
  "Споры и бумажная рутина",
  "«Делай что скажут»",
  "Топливо по рыночной цене",
];

const after = [
  "Плановая загрузка из 270+ заказчиков",
  "Без порожняка",
  "Оплата через 15 дней после получения документов",
  "Аванс со второго месяца",
  "Гарантированная оплата",
  "Документооборот на нас",
  "Вы выбираете направление",
  "Скидки до 20% на ДТ через партнёрские АЗС",
];

const routes = [
  { from: "Владивосток", to: "Москва", km: "9 000", ref: "530 000", tent: "582 000" },
  { from: "Москва", to: "Красноярск", km: "4 100", ref: "500 000", tent: "458 000" },
  { from: "Москва", to: "Краснодар", km: "1 450", ref: "166 000", tent: "175 000" },
  { from: "Санкт-Петербург", to: "Екатеринбург", km: "2 350", ref: "245 000", tent: "262 000" },
  { from: "Новосибирск", to: "Москва", km: "3 350", ref: "390 000", tent: "412 000" },
  { from: "Москва", to: "Казань", km: "820", ref: "118 000", tent: "126 000" },
];

const steps = [
  { n: "01", title: "Оставляете заявку", text: "Звонок с менеджером за 15 минут — обсуждаем парк и регион." },
  { n: "02", title: "Подписываем договор", text: "Без скрытых пунктов. Документы оформляем сами." },
  { n: "03", title: "Получаете маршруты", text: "Доступ к базе из 270+ заказчиков — выбираете направления." },
  { n: "04", title: "Везёте и зарабатываете", text: "Оплата через 15 дней, аванс со второго месяца, скидки на ДТ." },
];

const faq = [
  {
    q: "Сколько стоит вступление в партнёрство?",
    a: "Бесплатно. Мы зарабатываем только когда зарабатываете вы — берём фиксированный процент с выполненного рейса.",
  },
  {
    q: "Какие требования к автопарку?",
    a: "Тент или реф от 20 тонн, год выпуска не старше 2012, исправное ГЛОНАСС. Один автомобиль — уже партнёрство.",
  },
  {
    q: "Когда я получу первую оплату?",
    a: "Через 15 дней после получения закрывающих документов. Со второго месяца подключаем аванс до 50% от рейса.",
  },
  {
    q: "Кто отвечает за документы и споры с грузоотправителем?",
    a: "Мы. Юристы, бухгалтерия и претензионная работа полностью на стороне Орды.",
  },
  {
    q: "Можно ли выбирать направления?",
    a: "Да. У вас личный кабинет с маршрутами — берёте те, что подходят по гео и ставке.",
  },
];

const stories = [
  {
    name: "Алексей М.",
    region: "Новосибирск",
    parc: "3 фуры",
    quote:
      "За полгода в Орде закрыл лизинг на одну машину. Простоев нет, оплата стабильная — впервые сплю спокойно.",
  },
  {
    name: "Дмитрий К.",
    region: "Краснодар",
    parc: "1 тент",
    quote:
      "Раньше сам искал заказы в чатах, терял дни. Теперь маршрут на неделю вперёд и скидка на ДТ — экономлю 40 тысяч в месяц.",
  },
  {
    name: "Сергей В.",
    region: "Екатеринбург",
    parc: "5 рефов",
    quote:
      "Документооборот забрали полностью. Я наконец занимаюсь машинами и водителями, а не бумажками.",
  },
];

const Index = () => {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground font-body grain overflow-x-hidden">
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

      {/* AUDIENCE */}
      <section id="audience" className="py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="mb-12">
            <div className="text-sm text-muted-foreground mb-4 font-medium">
              Для кого
            </div>
            <h2 className="font-heading font-bold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
              Кому подойдёт{" "}
              <span className="text-[hsl(var(--orda-green))]">партнёрство</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((item, i) => {
              const isActive = activeAudience === i;
              return (
                <button
                  key={i}
                  onMouseEnter={() => setActiveAudience(i)}
                  onFocus={() => setActiveAudience(i)}
                  className={`text-left rounded-[2rem] p-8 min-h-[230px] flex flex-col justify-between transition-all duration-500 ${
                    isActive
                      ? "bg-[hsl(var(--orda-green))] text-white shadow-xl shadow-[hsl(var(--orda-green))]/20"
                      : "bg-white text-foreground hover:-translate-y-1"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-[hsl(var(--orda-orange-soft))] text-[hsl(var(--orda-orange))]"
                    }`}
                  >
                    <Icon name={item.icon} size={22} />
                  </div>
                  <h3 className="mt-12 font-heading font-bold text-lg leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            <Button
              variant="ghost"
              className="rounded-2xl bg-white border border-border hover:bg-foreground hover:text-background h-14 px-7 font-medium text-base"
            >
              Проверить, подхожу ли я
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-sm text-muted-foreground mb-4 font-medium">
              Как работает
            </div>
            <h2 className="font-heading font-bold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
              Четыре шага до{" "}
              <span className="text-[hsl(var(--orda-green))]">первого рейса</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-card p-8 lg:p-10 hover:bg-[hsl(var(--orda-green))] hover:text-[hsl(var(--orda-cream))] transition-colors duration-500 group"
              >
                <div className="font-heading text-5xl font-bold text-[hsl(var(--orda-orange))] group-hover:text-[hsl(var(--orda-cream))] transition-colors">
                  {s.n}
                </div>
                <h3 className="mt-10 font-heading font-bold text-xl tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-sm text-muted-foreground mb-4 font-medium">
              Сравнение
            </div>
            <h2 className="font-heading font-bold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
              Что меняется,
              <br />
              <span className="text-[hsl(var(--orda-green))]">когда вы с нами</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="rounded-[2rem] bg-white p-8 lg:p-10">
              <div className="text-base font-semibold text-muted-foreground mb-6">
                Как сейчас
              </div>
              <ul>
                {before.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 py-5 border-b border-border last:border-b-0"
                  >
                    <span className="w-7 h-7 rounded-full bg-[hsl(var(--orda-red-soft))] text-[hsl(var(--orda-red))] flex items-center justify-center shrink-0">
                      <Icon name="X" size={14} strokeWidth={3} />
                    </span>
                    <span className="font-bold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-[hsl(var(--orda-green))] text-white p-8 lg:p-10 relative overflow-hidden">
              <div className="text-base font-semibold opacity-80 mb-6 relative">
                С Орда Партнёр Парк
              </div>
              <ul className="relative">
                {after.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 py-5 border-b border-white/15 last:border-b-0"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                      <Icon name="Check" size={14} strokeWidth={3} />
                    </span>
                    <span className="font-bold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMICS / RATES */}
      <section id="economics" className="py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="mb-10">
            <div className="text-sm text-muted-foreground mb-4 font-medium">
              Экономика
            </div>
            <h2 className="font-heading font-bold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
              Ставки наших маршрутов{" "}
              <span className="text-[hsl(var(--orda-green))]">за неделю</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Работаем со всеми регионами России
            </p>

            <div className="mt-8 inline-flex items-center gap-2.5 bg-white rounded-full pl-5 pr-3 py-2.5">
              <span className="text-sm font-semibold">
                Информация обновлена 27.04.2026
              </span>
              <span className="w-7 h-7 rounded-full bg-[hsl(var(--orda-green-soft))] flex items-center justify-center">
                <Icon
                  name="RefreshCw"
                  size={13}
                  className="text-[hsl(var(--orda-green))]"
                />
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((r, i) => (
              <div
                key={i}
                className="rounded-[2rem] bg-white p-7 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <h3 className="font-heading font-bold text-xl tracking-tight">
                  {r.from} — {r.to}
                </h3>
                <div className="text-sm text-muted-foreground mt-2 mb-7">
                  {r.km} км
                </div>

                <div className="space-y-2">
                  <RateRow label="Выручка реф" value={r.ref} />
                  <RateRow label="Выручка тент" value={r.tent} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-sm text-muted-foreground mb-4 font-medium">
              Истории партнёров
            </div>
            <h2 className="font-heading font-bold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
              Те, кто уже{" "}
              <span className="text-[hsl(var(--orda-green))]">в дороге</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {stories.map((s, i) => (
              <figure
                key={i}
                className="rounded-3xl bg-card p-8 flex flex-col justify-between min-h-[340px]"
              >
                <Icon
                  name="Quote"
                  size={32}
                  className="text-[hsl(var(--orda-orange))]"
                />
                <blockquote className="font-heading font-medium text-lg leading-snug tracking-tight my-6">
                  «{s.quote}»
                </blockquote>
                <figcaption className="flex items-center justify-between pt-5 border-t border-border">
                  <div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.region}</div>
                  </div>
                  <div className="text-xs px-3 py-1.5 rounded-full bg-[hsl(var(--orda-green))] text-[hsl(var(--orda-cream))] font-medium">
                    {s.parc}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-sm text-muted-foreground mb-4 font-medium">
                Вопросы
              </div>
              <h2 className="font-heading font-bold text-[clamp(2rem,4.5vw,4rem)] leading-[1] tracking-tight">
                Спрашивают{" "}
                <span className="text-[hsl(var(--orda-green))] italic font-medium">
                  чаще всего
                </span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md">
                Не нашли ответа? Позвоните или напишите в Telegram —
                разберём ваш случай за 15 минут.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="space-y-3">
                {faq.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-background rounded-2xl px-6 border-none"
                  >
                    <AccordionTrigger className="font-heading font-bold text-left text-lg tracking-tight hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="rounded-[2.5rem] bg-[hsl(var(--orda-green-deep))] text-[hsl(var(--orda-cream))] p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[hsl(var(--orda-orange))/0.2] blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[hsl(var(--orda-green))/0.6] blur-3xl" />

            <div className="relative grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-heading font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
                  Готовы поставить <br /> машину в работу?
                </h2>
                <p className="mt-6 max-w-md opacity-80 text-lg">
                  Оставьте телефон — менеджер перезвонит за 15 минут и пришлёт
                  расчёт под ваш парк.
                </p>
              </div>

              <form className="lg:col-span-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="tel"
                  placeholder="+7 ___ ___ __ __"
                  className="w-full h-14 px-6 rounded-full bg-[hsl(var(--orda-cream))/0.1] border border-[hsl(var(--orda-cream))/0.2] text-[hsl(var(--orda-cream))] placeholder:text-[hsl(var(--orda-cream))/0.5] focus:outline-none focus:border-[hsl(var(--orda-orange))]"
                />
                <Button
                  size="lg"
                  className="w-full h-14 rounded-full bg-[hsl(var(--orda-orange))] hover:bg-[hsl(var(--orda-orange))/0.9] text-foreground font-semibold text-base"
                >
                  Получить расчёт
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </Button>
                <p className="text-xs opacity-60 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[hsl(var(--orda-green))] flex items-center justify-center text-[hsl(var(--orda-cream))] font-heading font-bold text-sm">
              О
            </div>
            <div className="text-sm">
              <div className="font-semibold">Орда Партнёр Парк</div>
              <div className="text-xs text-muted-foreground">
                © 2026 — все права защищены
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="tel:+79233350610" className="hover:text-foreground">
              8-923-335-06-10
            </a>
            <span className="opacity-30">/</span>
            <a href="#" className="hover:text-foreground">
              Telegram
            </a>
            <span className="opacity-30">/</span>
            <a href="#" className="hover:text-foreground">
              Политика
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

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

const RateRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between bg-secondary rounded-2xl pl-5 pr-6 py-4">
    <span className="text-sm font-semibold">{label}</span>
    <span className="font-heading font-bold text-2xl tracking-tight text-[hsl(var(--orda-orange))]">
      {value}{" "}
      <span className="text-base font-bold text-[hsl(var(--orda-orange))]">
        ₽
      </span>
    </span>
  </div>
);

export default Index;