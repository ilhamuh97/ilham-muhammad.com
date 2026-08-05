"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { journeyItems, journeySectionMeta } from "@/data/journey";

export function Journey() {
  return (
    <section
      id="journey"
      className="h-dvh flex flex-col px-6 lg:px-10 pt-24 pb-10 relative overflow-hidden bg-muted/40"
      style={{ scrollSnapAlign: "start" }}
    >
      <span
        aria-hidden
        className="absolute right-2 top-8 select-none pointer-events-none font-display font-medium text-foreground/5 leading-none"
        style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
      >
        {journeySectionMeta.index}
      </span>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col flex-1 min-h-0">
        <div className="flex-shrink-0 mb-6 sm:mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {journeySectionMeta.kicker}
          </p>
          <h2 className="font-display font-medium text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            {journeySectionMeta.heading}
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="flex-1 min-h-0 overflow-y-auto scrollbar-hide"
        >
          {journeyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex flex-1 items-center gap-3 sm:gap-6 text-left min-w-0">
                    <span className="font-mono text-xs text-muted-foreground w-6 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-4 w-4 text-muted-foreground shrink-0 hidden sm:block" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 className="font-display font-medium text-foreground text-base sm:text-lg">
                          {item.title}
                        </h3>
                        {item.employmentType && (
                          <span className="font-mono text-[10px] uppercase tracking-wide border border-border rounded-full px-2 py-0.5 text-muted-foreground">
                            {item.employmentType}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {item.organization}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground shrink-0 hidden sm:block">
                      {item.period}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-9 sm:pl-16 pr-2 sm:pr-8">
                    <p className="sm:hidden font-mono text-xs text-muted-foreground mb-2">
                      {item.period}
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
