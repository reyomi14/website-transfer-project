import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import LeadDialog from "@/components/landing/LeadDialog";

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

const steps = [
  { n: "01", title: "Оставляете заявку", text: "Звонок с менеджером за 15 минут — обсуждаем парк и регион." },
  { n: "02", title: "Подписываем договор", text: "Без скрытых пунктов. Документы оформляем сами." },
  { n: "03", title: "Получаете маршруты", text: "Доступ к базе из 270+ заказчиков — выбираете направления." },
  { n: "04", title: "Везёте и зарабатываете", text: "Оплата через 15 дней, аванс со второго месяца, скидки на ДТ." },
];

const AudienceAndStepsSection = () => {
  const [activeAudience, setActiveAudience] = useState(0);

  return (
    <>
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
            <LeadDialog
              source="audience"
              trigger={
                <Button
                  variant="ghost"
                  className="rounded-2xl bg-white border border-border hover:bg-foreground hover:text-background h-14 px-7 font-medium text-base"
                >
                  Проверить, подхожу ли я
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              }
            />
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
    </>
  );
};

export default AudienceAndStepsSection;