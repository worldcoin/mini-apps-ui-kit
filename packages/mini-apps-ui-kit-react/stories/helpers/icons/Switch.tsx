export function Switch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="30"
      height="18"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="1" y="1" width="38" height="22" rx="11" fill="#191C20" />
      <rect x="1" y="1" width="38" height="22" rx="11" stroke="#191C20" stroke-width="2" />
      <rect x="18" y="2" width="20" height="20" rx="10" fill="white" />
    </svg>
  );
}
