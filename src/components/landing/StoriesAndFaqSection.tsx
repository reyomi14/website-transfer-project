import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const StoriesAndFaqSection = () => {
  const [ctaPhone, setCtaPhone] = useState("");
  const [ctaSubmitting, setCtaSubmitting] = useState(false);

  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaPhone.replace(/\D/g, "").length < 10) {
      toast.error("Укажите телефон, чтобы мы могли перезвонить");
      return;
    }
    setCtaSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setCtaSubmitting(false);
    setCtaPhone("");
    toast.success("Заявка принята! Перезвоним за 15 минут.");
  };

  return (
    <>
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

              <form className="lg:col-span-5 space-y-3" onSubmit={handleCtaSubmit}>
                <input
                  type="tel"
                  required
                  value={ctaPhone}
                  onChange={(e) => setCtaPhone(e.target.value)}
                  placeholder="+7 ___ ___ __ __"
                  className="w-full h-14 px-6 rounded-full bg-white/10 border border-white/20 text-[hsl(var(--orda-cream))] placeholder:text-[hsl(var(--orda-cream))]/50 focus:outline-none focus:border-[hsl(var(--orda-orange))] focus:bg-white/15 transition-colors"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={ctaSubmitting}
                  className="w-full h-14 rounded-full bg-[hsl(var(--orda-orange))] hover:bg-[hsl(var(--orda-orange))]/90 text-foreground font-semibold text-base"
                >
                  {ctaSubmitting ? (
                    "Отправляем…"
                  ) : (
                    <>
                      Получить расчёт
                      <Icon name="ArrowRight" size={18} className="ml-1" />
                    </>
                  )}
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
    </>
  );
};

export default StoriesAndFaqSection;