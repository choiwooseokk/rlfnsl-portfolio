type Props = {
  href: string;
  label: string;
};

export default function LinkButton({ href, label }: Props) {
  const _isExternal = href.startsWith("http");

  return (
    <a
      className="linkBtn"
      href={href}
      target={_isExternal ? "_blank" : undefined}
      rel={_isExternal ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}