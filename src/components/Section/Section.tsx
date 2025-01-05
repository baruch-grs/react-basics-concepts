import React from "react";

interface SectionProps {
  title: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
