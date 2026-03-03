import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FindProjectById } from "../data/projects";
import type { ProjectCategory } from "../data/projects";

function GetCategoryKey(PublicCategory: ProjectCategory) {
  if (PublicCategory === "게임") return "category.game";
  return "category.content";
}

export default function ProjectDetailPage() {
  const { t } = useTranslation();
  const PublicParams = useParams();

  const PublicProject = useMemo(() => {
    return FindProjectById(PublicParams.id ?? "");
  }, [PublicParams.id]);

  const [PublicShowSource, SetPublicShowSource] = useState(false);

  if (!PublicProject) {
    return (
      <main className="main">
        <div className="container">
          <h1 className="pageTitle">{t("detail.notfound")}</h1>
          <Link to="/" className="detailBackLink">
            {t("detail.back")}
          </Link>
        </div>
      </main>
    );
  }

  const PublicHasTags = (PublicProject.tags?.length ?? 0) > 0;
  const PublicHasTeam = !!PublicProject.teamKey;
  const PublicHasEnv = (PublicProject.environment?.length ?? 0) > 0;
  const PublicHasInfo = PublicHasTeam || PublicHasEnv || PublicHasTags;

  const PublicHasRoles = (PublicProject.roleKeys?.length ?? 0) > 0;
  const PublicHasHighlights = (PublicProject.highlightKeys?.length ?? 0) > 0;
  const PublicHasScreens = (PublicProject.screenshots?.length ?? 0) > 0;
  const PublicHasLinks = (PublicProject.links?.length ?? 0) > 0;
  const PublicHasVideos = (PublicProject.videos?.length ?? 0) > 0;

  const PublicHasSource =
    PublicProject.sourceCode?.enabled === true && (PublicProject.sourceCode.blocks?.length ?? 0) > 0;

  return (
    <main className="main">
      <div className="container detailPage">
        <Link to="/" className="detailBackLink">
          {t("detail.back")}
        </Link>

        <div className="detailHeader">
          <div className="detailHeaderTop">
            <h1 className="detailTitle">{t(PublicProject.titleKey)}</h1>
            <span className="detailCategory">{t(GetCategoryKey(PublicProject.category))}</span>
          </div>

          {PublicProject.period ? <div className="detailPeriod">{PublicProject.period}</div> : null}
          <p className="detailOneLine">{t(PublicProject.oneLineKey)}</p>

          {PublicProject.imageSrc ? (
            <div className="detailThumbWrap">
              <img className="detailThumb" src={PublicProject.imageSrc} alt={t(PublicProject.titleKey)} />
            </div>
          ) : null}
        </div>

        <div className="detailGrid">
          {PublicHasInfo ? (
            <section className="detailCard">
              <h2 className="detailH2">{t("detail.info")}</h2>

              {PublicHasTeam ? (
                <div className="detailInfoRow">
                  <div className="detailInfoLabel">{t("detail.team")}</div>
                  <div className="detailInfoValue">{t(PublicProject.teamKey as string)}</div>
                </div>
              ) : null}

              {PublicHasEnv ? (
                <div className="detailInfoRow">
                  <div className="detailInfoLabel">{t("detail.env")}</div>
                  <div className="detailInfoValue">{PublicProject.environment!.join(", ")}</div>
                </div>
              ) : null}

              {PublicHasTags ? (
                <div className="detailTags">
                  {PublicProject.tags!.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {PublicHasRoles ? (
            <section className="detailCard">
              <h2 className="detailH2">{t("detail.roles")}</h2>
              <ul className="detailList">
                {PublicProject.roleKeys!.map((k) => (
                  <li key={k}>{t(k)}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {PublicHasHighlights ? (
            <section className="detailCard">
              <h2 className="detailH2">{t("detail.highlights")}</h2>
              <ul className="detailList">
                {PublicProject.highlightKeys!.map((k) => (
                  <li key={k}>{t(k)}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {PublicHasScreens ? (
            <section className="detailCard detailCardFull">
              <h2 className="detailH2">{t("detail.screenshots")}</h2>
              <div className="detailShots">
                {PublicProject.screenshots!.map((s) => (
                  <img key={s} className="detailShot" src={s} alt="screenshot" />
                ))}
              </div>
            </section>
          ) : null}

          {PublicHasLinks ? (
            <section className="detailCard">
              <h2 className="detailH2">{t("detail.links")}</h2>
              <div className="detailLinks">
                {PublicProject.links!.map((l) => (
                  <a key={l.url} className="detailLinkBtn" href={l.url} target="_blank" rel="noreferrer">
                    {t(l.labelKey, { defaultValue: l.labelKey })}
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {PublicHasVideos ? (
            <section className="detailCard">
              <h2 className="detailH2">{t("detail.videos")}</h2>

              <div className="detailLinks">
                {PublicProject.videos!.map((v) => {
                  if (v.kind === "external") {
                    return (
                      <a key={v.url} className="detailLinkBtn" href={v.url} target="_blank" rel="noreferrer">
                        {t(v.labelKey, { defaultValue: v.labelKey })}
                      </a>
                    );
                  }

                  return (
                    <div key={v.src} className="detailVideo">
                      <div className="detailVideoTitle">{t(v.labelKey, { defaultValue: v.labelKey })}</div>
                      <video className="detailVideoPlayer" controls playsInline preload="metadata" poster={v.poster}>
                        <source src={v.src} />
                      </video>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          {PublicHasSource ? (
            <section className="detailCard detailCardFull">
              <div className="detailSourceHeader">
                <h2 className="detailH2">{t("badge.source")}</h2>
                <button
                  type="button"
                  className="detailSourceToggle"
                  onClick={() => SetPublicShowSource((v) => !v)}
                >
                  {t("detail.source.toggle")}
                </button>
              </div>

              {PublicShowSource ? (
                <div className="detailSourceBody">
                  {PublicProject.sourceCode!.blocks.map((b, idx) => (
                    <div key={idx} className="codeBlock">
                      {b.titleKey ? <div className="codeBlockTitle">{t(b.titleKey)}</div> : null}
                      <pre className="codePre">
                        <code className={`language-${b.language || "text"}`}>{b.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}