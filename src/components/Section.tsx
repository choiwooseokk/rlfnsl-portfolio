import type { ReactNode } from "react";

type Props = {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="container sectionInner">
        {title ? <div className="sectionTitle">{title}</div> : null}
        {subtitle ? <div className="sectionSubtitle">{subtitle}</div> : null}
        {children}
      </div>
    </section>
  );
}