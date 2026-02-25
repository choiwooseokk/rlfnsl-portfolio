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
      <div className="container navInner">
        <button className="brand" type="button" onClick={() => _onClick("home")}>
          최우석
        </button>

        <nav className="navLinks" aria-label="섹션 이동">
          {sections.map((s, _i) => {
            const _isActive = s.id === activeId;
            const _showDivider = _i !== 0;

            return (
              <span key={s.id} className="navItem">
                {_showDivider ? <span className="navDivider">-</span> : null}
                <button
                  type="button"
                  className={`navLink ${_isActive ? "active" : ""}`}
                  onClick={() => _onClick(s.id)}
                >
                  {s.label}
                </button>
              </span>
            );
          })}
        </nav>
      </div>
    </header>
  );
}