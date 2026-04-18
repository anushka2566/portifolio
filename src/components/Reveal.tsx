import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
}

export const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};
