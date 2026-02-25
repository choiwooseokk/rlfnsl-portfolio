import Section from "../components/Section";

export default function Hero() {
  const PUBLIC_EMAIL = "rlfnsl7159@naver.com";
  const PUBLIC_PHONE = "010-5531-7159";

  return (
    <Section
      id="home"
      title="Unity 클라이언트 개발자"
      subtitle="멀티플레이, 최적화, 데이터 기반 구조를 설계하고 구현합니다"
    >
      <div className="hero">
        <div className="heroLeft">
          <h1 className="heroTitle">
            개발자<span className="heroAccent"> 최우석</span>
          </h1>

          <p className="heroDesc">
            Photon Fusion2, URP, Addressables, Firebase, 광고 및 분석 SDK 연동까지
            출시와 운영을 고려한 개발 경험을 보유하고 있습니다.
          </p>

          <div className="heroContact">
            <div className="heroContactRow">
              <span className="heroContactLabel">Email</span>
              <span className="heroContactValue">{PUBLIC_EMAIL}</span>
            </div>
            <div className="heroContactRow">
              <span className="heroContactLabel">Phone</span>
              <span className="heroContactValue">{PUBLIC_PHONE}</span>
            </div>
          </div>

          <div className="heroMeta">
            <span className="chip">게임 클라이언트</span>
            <span className="chip">모바일 클라이언트</span>
            <span className="chip">디바이스 및 시스템 연동</span>
            <span className="chip">라이브 서비스</span>
            <span className="chip">글로벌 출시</span>
            <span className="chip">실시간 동기화</span>
          </div>

          <div className="aboutCard">
            <div className="aboutCardTitle">About</div>
            <div className="aboutCardBody">
              Unity 기반 클라이언트 개발을 중심으로 멀티플레이 동기화, 성능 최적화,
              데이터 기반 구조 설계에 강점이 있습니다. 기능 구현뿐 아니라 운영까지
              고려해 안정적으로 확장 가능한 구조를 만드는 것을 목표로 합니다.
            </div>

            <ul className="aboutCardList">
              <li>Fusion 기반 실시간 동기화 구조 설계 및 디버깅</li>
              <li>URP 환경 렌더링 성능 최적화 및 리소스 관리</li>
              <li>Addressables 및 테이블 기반 기능 확장 구조 구성</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}