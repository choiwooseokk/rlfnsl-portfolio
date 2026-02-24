import Section from "../components/Section";
import LinkButton from "../components/LinkButton";

export default function Hero() {
  return (
    <Section
      id="home"
      title="Unity 클라이언트 개발자"
      subtitle="멀티플레이, 최적화, 데이터 기반 구조를 설계하고 구현합니다"
    >
      <div className="hero">
        <div className="heroLeft">
          <h1 className="heroTitle">
            최우석<span className="heroAccent"> 포트폴리오</span>
          </h1>

          <p className="heroDesc">
            Photon Fusion2, URP, Addressables, Firebase, 광고 및 분석 SDK 연동까지
            출시와 운영을 고려한 개발 경험을 보유하고 있습니다.
          </p>

          <div className="heroCtas">
            <LinkButton href="mailto:rlfnsl7159@naver.com" label="이메일" />
            <LinkButton href="https://github.com/" label="깃허브" />
            <LinkButton href="https://www.notion.so/" label="노션" />
            <LinkButton href="#" label="이력서 PDF" />
          </div>

          <div className="heroMeta">
            <span>서울</span>
            <span className="dot">•</span>
            <span>게임 클라이언트</span>
            <span className="dot">•</span>
            <span>모바일 클라이언트</span>
          </div>
        </div>

        <div className="heroRight">
          <div className="heroCard">
            <div className="heroCardTitle">지금 이 사이트는</div>
            <div className="heroCardBody">
              프로젝트를 나중에 추가할 수 있도록 섹션 구조와 디자인을 먼저 완성한 버전입니다
            </div>
          </div>

          <div className="heroStats">
            <div className="stat">
              <div className="statNum">4+</div>
              <div className="statLabel">경력 연차</div>
            </div>
            <div className="stat">
              <div className="statNum">Global</div>
              <div className="statLabel">출시 경험</div>
            </div>
            <div className="stat">
              <div className="statNum">Net</div>
              <div className="statLabel">동기화 경험</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}