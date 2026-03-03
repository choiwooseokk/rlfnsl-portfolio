import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { PROJECTS } from "../data/projects";
import type { ProjectCategory } from "../data/projects";

const PUBLIC_FILTERS: Array<"전체" | ProjectCategory> = ["전체", "게임", "콘텐츠"];

function GetCategoryKey(PublicCategory: ProjectCategory) {
  if (PublicCategory === "게임") return "category.game";
  return "category.content";
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [PublicCategory, SetPublicCategory] = useState<"전체" | ProjectCategory>("전체");

  const PublicFiltered = useMemo(() => {
    if (PublicCategory === "전체") return PROJECTS;
    return PROJECTS.filter((p) => p.category === PublicCategory);
  }, [PublicCategory]);

  return (
    <Section id="portfolio" title={t("portfolio.title")} subtitle={t("portfolio.subtitle")}>
      <div className="portfolio">
        <div className="portfolioFilters" role="tablist" aria-label="프로젝트 카테고리">
          {PUBLIC_FILTERS.map((f) => {
            const _active = f === PublicCategory;
            const _label = f === "전체" ? t("portfolio.filter.all") : t(GetCategoryKey(f));

            return (
              <button
                key={f}
                type="button"
                className={`filterBtn ${_active ? "active" : ""}`}
                onClick={() => SetPublicCategory(f)}
                role="tab"
                aria-selected={_active}
              >
                {_label}
              </button>
            );
          })}
        </div>

        <div className="portfolioGrid">
          {PublicFiltered.map((p) => {
            const _hasSource = p.sourceCode?.enabled === true && (p.sourceCode.blocks?.length ?? 0) > 0;

            return (
              <Link key={p.id} to={`/project/${p.id}`} className="projectCard projectLink">
                {p.imageSrc ? (
                  <div className="projectThumb">
                    <img className="projectThumbImg" src={p.imageSrc} alt={t(p.titleKey)} />
                  </div>
                ) : null}

                <div className="projectTop">
                  <div className="projectTitleRow">
                    <div className="projectTitle">{t(p.titleKey)}</div>
                    <span className="projectCategory">{t(GetCategoryKey(p.category))}</span>
                  </div>

                  <div className="projectPeriodRow">
                    {p.period ? <div className="projectPeriod">{p.period}</div> : null}
                    {_hasSource ? <span className="projectBadge">{t("badge.source")}</span> : null}
                  </div>
                </div>

                <div className="projectOneLine">{t(p.oneLineKey)}</div>

                {p.tags && p.tags.length > 0 ? (
                  <div className="projectTags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}