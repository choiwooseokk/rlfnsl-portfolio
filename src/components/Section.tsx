import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="sectionHeader">
        <h2 className="sectionTitle">{title}</h2>
        {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
      </div>
      <div className="sectionBody">{children}</div>
    </section>
  );
}