import Icon from "@/components/ui/icon";

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

const CompareAndRatesSection = () => {
  return (
    <>
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
    </>
  );
};

export default CompareAndRatesSection;
