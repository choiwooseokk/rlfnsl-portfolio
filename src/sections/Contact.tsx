import Section from "../components/Section.jsx";
import LinkButton from "../components/LinkButton.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="연락" subtitle="아래 링크로 편하게 연락 주세요">
      <div className="contactBox">
        <div className="contactMain">
          <div className="contactTitle">최우석</div>
          <div className="contactDesc">
            협업 제안, 면접, 포지션 문의 모두 환영합니다
          </div>
        </div>

        <div className="contactLinks">
          <LinkButton href="mailto:rlfnsl7159@naver.com" label="rlfnsl7159@naver.com" />
          <LinkButton href="https://github.com/" label="GitHub" />
          <LinkButton href="https://www.notion.so/" label="Notion" />
          <LinkButton href="#" label="Resume PDF" />
        </div>
      </div>
    </Section>
  );
}