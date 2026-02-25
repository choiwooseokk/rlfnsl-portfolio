import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Section from "../components/Section";
import { PROJECTS } from "../data/projects";
import type { ProjectCategory } from "../data/projects";

const PUBLIC_FILTERS: Array<"전체" | ProjectCategory> = [
  "전체",
  "게임",
  "콘텐츠",
  "시스템 연동",
];

export default function Portfolio() {
  const [PublicCategory, SetPublicCategory] = useState<"전체" | ProjectCategory>("전체");

  const PublicFiltered = useMemo(() => {
    if (PublicCategory === "전체") return PROJECTS;
    return PROJECTS.filter((p) => p.category === PublicCategory);
  }, [PublicCategory]);

  return (
    <Section id="portfolio" title="포트폴리오" subtitle="카드를 클릭하면 상세 페이지로 이동합니다">
      <div className="portfolio">
        <div className="portfolioFilters" role="tablist" aria-label="프로젝트 카테고리">
          {PUBLIC_FILTERS.map((f) => {
            const _active = f === PublicCategory;
            return (
              <button
                key={f}
                type="button"
                className={`filterBtn ${_active ? "active" : ""}`}
                onClick={() => SetPublicCategory(f)}
                role="tab"
                aria-selected={_active}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="portfolioGrid">
          {PublicFiltered.map((p) => (
            <Link key={p.id} to={`/project/${p.id}`} className="projectCard projectLink">
              <div className="projectThumb">
                <img className="projectThumbImg" src={p.imageSrc} alt={p.title} />
              </div>

              <div className="projectTop">
                <div className="projectTitleRow">
                  <div className="projectTitle">{p.title}</div>
                  <span className="projectCategory">{p.category}</span>
                </div>
                <div className="projectPeriod">{p.period}</div>
              </div>

              <div className="projectOneLine">{p.oneLine}</div>

              <div className="projectTags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}