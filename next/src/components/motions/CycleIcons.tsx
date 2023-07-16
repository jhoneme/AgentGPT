import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import React from "react";
import GlowWrapper from "../GlowWrapper";

interface CycleItemsProps extends PropsWithChildren {
  className?: string;
  hoveredItemIndex: number;
  icons: React.ReactNode[];
}

const CycleIcons = (props: CycleItemsProps) => {
  console.log(props.hoveredItemIndex);
  return (
    <GlowWrapper>
      <div className="flex h-[28px] w-[28px] flex-row justify-start gap-x-4 overflow-hidden rounded-full bg-white p-1.5">
        <motion.div
          className="flex gap-2"
          animate={{
            x: -24 * props.hoveredItemIndex,
          }}
          transition={{ type: "spring", duration: 0.5, stiffness: 60, damping: 10 }}
        >
          {props.icons.map((item, i) => (
            <motion.div
              key={`cycle-icon-${i}`}
              className={props.className}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </GlowWrapper>
  );
};

export default CycleIcons;
