import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  sections,
  className,
}: {
  sections: {
    title: string;
    items: {
      logo: string;
    }[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-10 py-10", className)}>
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx}> 
          <h3 className="text-3xl font-bold text-neutral-200 dark:text-white mb-6">
            {section.title}
          </h3>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {chunkItems(section.items).map((panel, panelIdx) => (
                <motion.div
                  key={panelIdx}
                  className="min-w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {panel.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative group block p-2 h-full w-full"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <AnimatePresence>
                        {hoveredIndex === idx && (
                          <motion.span
                            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: { duration: 0.15 },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.15, delay: 0.2 },
                            }}
                          />
                        )}
                      </AnimatePresence>
                      <Card>
                        <img
                          src={item.logo}
                          alt="Logo"
                          className="h-24 w-24 mx-auto"
                        />
                      </Card>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Function to chunk items into panels of 6
const chunkItems = (items: { logo: string }[]) => {
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += 6) {
    chunkedItems.push(items.slice(i, i + 6));
  }
  return chunkedItems;
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
