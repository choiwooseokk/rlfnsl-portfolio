import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Section from "../components/Section";
import { GetProjectById } from "../data/projects";

export default function ProjectDetailPage() {
  const PublicNavigate = useNavigate();
  const PublicParams = useParams();

  const PublicProject = useMemo(() => {
    const _id = PublicParams.id ?? "";
    return GetProjectById(_id);
  }, [PublicParams.id]);

  if (!PublicProject) {
    return (
      <main className="main">
        <Section id="project-not-found" title="프로젝트를 찾을 수 없습니다" subtitle="목록으로 돌아가 주세요">
          <div className="projectDetailWrap">
            <button className="btnGhost" type="button" onClick={() => PublicNavigate("/")}>
              홈으로
            </button>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main className="main">
      <Section id={`project-${PublicProject.id}`} title={PublicProject.title} subtitle={PublicProject.oneLine}>
        <div className="projectDetailWrap">
          <div className="projectDetailTop">
            <button className="btnGhost" type="button" onClick={() => PublicNavigate(-1)}>
              뒤로
            </button>
            <Link className="btnGhost" to="/">
              포트폴리오로
            </Link>
          </div>

          <div className="projectDetailHeader">
            <div className="projectDetailHeaderLeft">
              <div className="projectDetailPeriod">{PublicProject.period}</div>

              <div className="projectDetailBadges">
                <span className="projectCategory">{PublicProject.category}</span>
                {PublicProject.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="projectDetailBody">
            <div className="projectDetailLeft">
              <img className="projectDetailImg" src={PublicProject.imageSrc} alt={PublicProject.title} />
            </div>

            <div className="projectDetailRight">
              <div className="projectDetailSection">
                <div className="projectDetailSectionTitle">요약</div>
                <div className="projectDetailText">{PublicProject.summary}</div>
              </div>

              <div className="projectDetailSection">
                <div className="projectDetailSectionTitle">담당</div>
                <ul className="projectDetailList">
                  {PublicProject.role.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="projectDetailSection">
                <div className="projectDetailSectionTitle">기술</div>
                <ul className="projectDetailList">
                  {PublicProject.tech.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="projectDetailSection">
                <div className="projectDetailSectionTitle">문제 해결</div>
                <ul className="projectDetailList">
                  {PublicProject.problems.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="projectDetailSection">
                <div className="projectDetailSectionTitle">성과</div>
                <ul className="projectDetailList">
                  {PublicProject.results.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}