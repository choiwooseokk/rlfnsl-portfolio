import { Link, useParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FindProjectById } from "../data/projects";
import type { ProjectCategory } from "../data/projects";

function GetCategoryKey(PublicCategory: ProjectCategory) {
  if (PublicCategory === "게임") return "category.game";
  return "category.content";
}

type DetailTab = "info" | "videos" | "screens" | "code";

export default function ProjectDetailPage() {
  const { t } = useTranslation();
  const PublicParams = useParams();

  const PublicProject = useMemo(() => {
    return FindProjectById(PublicParams.id ?? "");
  }, [PublicParams.id]);

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

  const PublicHasRoles = (PublicProject.roleKeys?.length ?? 0) > 0;
  const PublicHasHighlights = (PublicProject.highlightKeys?.length ?? 0) > 0;
  const PublicHasLinks = (PublicProject.links?.length ?? 0) > 0;
  const PublicHasVideos = (PublicProject.videos?.length ?? 0) > 0;

  const PublicHasScreens = (PublicProject.screenshots?.length ?? 0) > 0;

  const PublicHasSource =
    PublicProject.sourceCode?.enabled === true &&
    (PublicProject.sourceCode.blocks?.some((PublicBlock) => {
      const _hasImages = (PublicBlock.images?.length ?? 0) > 0;
      const _hasText = !!PublicBlock.code && PublicBlock.code.trim().length > 0;
      return _hasImages || _hasText;
    }) ?? false);

  const PublicHasInfoTab = PublicHasTeam || PublicHasEnv || PublicHasTags || PublicHasRoles || PublicHasHighlights || PublicHasLinks;

  const PublicTabs = useMemo(() => {
    const _tabs: Array<{ id: DetailTab; label: string; visible: boolean }> = [
      { id: "info", label: t("detail.info"), visible: PublicHasInfoTab },
      { id: "videos", label: t("detail.videos"), visible: PublicHasVideos },
      { id: "screens", label: t("detail.screenshots"), visible: PublicHasScreens },
      { id: "code", label: t("badge.source"), visible: PublicHasSource },
    ];
    return _tabs.filter((_t) => _t.visible);
  }, [t, PublicHasInfoTab, PublicHasVideos, PublicHasScreens, PublicHasSource]);

  const [PublicActiveTab, SetPublicActiveTab] = useState<DetailTab>(PublicTabs[0]?.id ?? "info");

  useEffect(() => {
    if (PublicTabs.length === 0) return;
    const _exists = PublicTabs.some((_t) => _t.id === PublicActiveTab);
    if (!_exists) SetPublicActiveTab(PublicTabs[0].id);
  }, [PublicTabs, PublicActiveTab]);

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

        {PublicTabs.length > 1 ? (
          <div className="detailTabs" role="tablist">
            {PublicTabs.map((_tab) => {
              const _active = _tab.id === PublicActiveTab;
              return (
                <button
                  key={_tab.id}
                  type="button"
                  className={`detailTabBtn ${_active ? "active" : ""}`}
                  onClick={() => SetPublicActiveTab(_tab.id)}
                  role="tab"
                  aria-selected={_active}
                >
                  {_tab.label}
                </button>
              );
            })}
          </div>
        ) : null}

        <div className="detailGrid">
          {PublicActiveTab === "info" ? (
            <>
              {PublicHasTeam || PublicHasEnv || PublicHasTags ? (
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
                      {PublicProject.tags!.map((_tag) => (
                        <span key={_tag} className="tag">
                          {_tag}
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
                    {PublicProject.roleKeys!.map((_k) => (
                      <li key={_k}>{t(_k)}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {PublicHasHighlights ? (
                <section className="detailCard">
                  <h2 className="detailH2">{t("detail.highlights")}</h2>
                  <ul className="detailList">
                    {PublicProject.highlightKeys!.map((_k) => (
                      <li key={_k}>{t(_k)}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {PublicHasLinks ? (
                <section className="detailCard">
                  <h2 className="detailH2">{t("detail.links")}</h2>
                  <div className="detailLinks">
                    {PublicProject.links!.map((_l) => (
                      <a key={_l.url} className="detailLinkBtn" href={_l.url} target="_blank" rel="noreferrer">
                        {t(_l.labelKey, { defaultValue: _l.labelKey })}
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}
            </>
          ) : null}

          {PublicActiveTab === "videos" && PublicHasVideos ? (
            <section className="detailCard detailCardFull">
              <h2 className="detailH2">{t("detail.videos")}</h2>

              <div className="detailLinks">
                {PublicProject.videos!.map((PublicVideo, _i) => {
                  if (PublicVideo.kind === "youtube") {
                    const _start = PublicVideo.startSeconds ? `?start=${PublicVideo.startSeconds}` : "";
                    const _src = `https://www.youtube.com/embed/${PublicVideo.videoId}${_start}`;

                    return (
                      <div key={`${PublicVideo.videoId}-${_i}`} className="detailVideo">
                        <div className="detailVideoTitle">{t(PublicVideo.labelKey, { defaultValue: PublicVideo.labelKey })}</div>
                        <div className="detailVideoFrame">
                          <iframe
                            className="detailVideoIframe"
                            src={_src}
                            title={t(PublicVideo.labelKey, { defaultValue: PublicVideo.labelKey })}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                      </div>
                    );
                  }

                  if (PublicVideo.kind === "external") {
                    return (
                      <a
                        key={`${PublicVideo.url}-${_i}`}
                        className="detailLinkBtn"
                        href={PublicVideo.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t(PublicVideo.labelKey, { defaultValue: PublicVideo.labelKey })}
                      </a>
                    );
                  }

                  return (
                    <div key={`${PublicVideo.src}-${_i}`} className="detailVideo">
                      <div className="detailVideoTitle">{t(PublicVideo.labelKey, { defaultValue: PublicVideo.labelKey })}</div>
                      <div className="detailVideoFrame">
                        <video
                          className="detailVideoPlayer"
                          controls
                          playsInline
                          preload="metadata"
                          src={PublicVideo.src}
                          poster={PublicVideo.poster}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          {PublicActiveTab === "screens" && PublicHasScreens ? (
            <section className="detailCard detailCardFull">
              <h2 className="detailH2">{t("detail.screenshots")}</h2>
              <div className="detailShots">
                {PublicProject.screenshots!.map((_s) => (
                  <img key={_s} className="detailShot" src={_s} alt="screenshot" />
                ))}
              </div>
            </section>
          ) : null}

          {PublicActiveTab === "code" && PublicHasSource ? (
            <section className="detailCard detailCardFull">
              <div className="detailSourceHeader">
                <h2 className="detailH2">{t("badge.source")}</h2>
              </div>

              <div className="detailSourceBody">
                {PublicProject.sourceCode!.blocks.map((PublicBlock, _idx) => {
                  const PublicHasImages = (PublicBlock.images?.length ?? 0) > 0;
                  const PublicHasTextCode = !!PublicBlock.code && PublicBlock.code.trim().length > 0;

                  return (
                    <div key={_idx} className="codeBlock">
                      {PublicBlock.titleKey ? <div className="codeBlockTitle">{t(PublicBlock.titleKey)}</div> : null}
                      {PublicBlock.descKey ? <div className="codeBlockDesc">{t(PublicBlock.descKey)}</div> : null}

                      {PublicHasImages ? (
                        <div className="codeImageGrid">
                          {PublicBlock.images!.map((PublicImg, _imgIdx) => (
                            <figure key={`${PublicImg.src}-${_imgIdx}`} className="codeFigure">
                              <a className="codeImageLink" href={PublicImg.src} target="_blank" rel="noreferrer">
                                <img className="codeImage" src={PublicImg.src} alt="code" />
                              </a>
                              {PublicImg.captionKey ? <figcaption className="codeCaption">{t(PublicImg.captionKey)}</figcaption> : null}
                            </figure>
                          ))}
                        </div>
                      ) : null}

                      {PublicHasTextCode ? (
                        <pre className="codePre">
                          <code className={`language-${PublicBlock.language || "text"}`}>{PublicBlock.code}</code>
                        </pre>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}