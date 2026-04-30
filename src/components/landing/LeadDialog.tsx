import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface LeadDialogProps {
  trigger: React.ReactNode;
  source?: string;
}

const LeadDialog = ({ trigger, source = "form" }: LeadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [parc, setParc] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) {
      toast.error("Укажите телефон, чтобы мы могли перезвонить");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setOpen(false);
    setName("");
    setPhone("");
    setParc("");
    toast.success("Заявка принята! Перезвоним за 15 минут.", {
      description: `Источник: ${source}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-3xl p-0 overflow-hidden border-none">
        <div className="bg-[hsl(var(--orda-green))] text-[hsl(var(--orda-cream))] p-7">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl tracking-tight">
              Заявка в Орда Партнёр Парк
            </DialogTitle>
            <DialogDescription className="text-[hsl(var(--orda-cream))]/80 mt-1.5">
              Менеджер перезвонит за 15 минут и пришлёт расчёт под ваш парк
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-7 space-y-4 bg-background">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Как к вам обращаться
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="mt-2 w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:outline-none focus:border-[hsl(var(--orda-green))] transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Телефон <span className="text-[hsl(var(--orda-orange))]">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 ___ ___ __ __"
              required
              className="mt-2 w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:outline-none focus:border-[hsl(var(--orda-green))] transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Сколько у вас машин
            </label>
            <select
              value={parc}
              onChange={(e) => setParc(e.target.value)}
              className="mt-2 w-full h-12 px-4 rounded-xl bg-secondary border border-border focus:outline-none focus:border-[hsl(var(--orda-green))] transition-colors"
            >
              <option value="">Выберите</option>
              <option value="1">1 машина</option>
              <option value="2-5">2–5 машин</option>
              <option value="5-10">5–10 машин</option>
              <option value="10+">Более 10 машин</option>
            </select>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full h-13 rounded-xl bg-[hsl(var(--orda-green))] hover:bg-[hsl(var(--orda-green-deep))] text-[hsl(var(--orda-cream))] font-semibold"
          >
            {submitting ? (
              "Отправляем…"
            ) : (
              <>
                Отправить заявку
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadDialog;
