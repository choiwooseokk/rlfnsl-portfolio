import Section from "../components/Section";

export default function About() {
  return (
    <Section
      id="about"
      title="소개"
      subtitle="기능 구현을 넘어서 구조와 운영을 함께 봅니다"
    >
      <div className="grid2">
        <div className="card">
          <div className="cardTitle">내가 중요하게 보는 것</div>
          <ul className="list">
            <li>유지보수 가능한 구조</li>
            <li>동기화 안정성과 예외 상황 대응</li>
            <li>성능과 체감 품질</li>
            <li>협업을 위한 문서화와 커뮤니케이션</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitle">요약</div>
          <p className="p">
            Unity 기반 클라이언트 개발을 중심으로 멀티플레이, 리소스 관리,
            SDK 연동, 최적화 업무를 수행해왔습니다. 프로젝트 섹션은 이후에
            트러블슈팅과 개선 지표를 포함해 문제 해결력을 더 강하게 보여줄 계획입니다.
          </p>
        </div>
      </div>
    </Section>
  );
}