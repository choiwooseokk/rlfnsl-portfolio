type SectionItem = {
  id: string;
  label: string;
};

type Props = {
  sections: SectionItem[];
  activeId: string;
};

export default function Navbar({ sections, activeId }: Props) {
  const _onClick = (id: string) => {
    const _el = document.getElementById(id);
    if (!_el) return;
    _el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="navInner">
        <button className="brand" onClick={() => _onClick("home")} type="button">
          최우석
        </button>

        <nav className="navLinks" aria-label="섹션 이동">
          {sections.map((s) => {
            const _isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                className={`navLink ${_isActive ? "active" : ""}`}
                onClick={() => _onClick(s.id)}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        <div className="navRight">
          <a className="pill" href="#contact">
            연락
          </a>
        </div>
      </div>
    </header>
  );
}