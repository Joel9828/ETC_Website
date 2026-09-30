import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {items.map((item, i) => (
        <AccordionItem 
          key={i} 
          value={`item-${i}`}
          className="border border-white/20 rounded-xl bg-white/5 overflow-hidden transition-all duration-300 data-[state=open]:bg-white/10"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline font-heading font-bold text-left text-white [&[data-state=open]>svg]:rotate-45">
            <div className="flex items-start justify-between w-full gap-4">
              <span className="flex-1 text-lg leading-tight">{item.q}</span>
              <Plus className="w-6 h-6 shrink-0 transition-transform duration-300 text-accent" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 text-base leading-relaxed">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}