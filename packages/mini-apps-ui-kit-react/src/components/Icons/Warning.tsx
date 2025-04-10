import { HTMLAttributes } from "react";

export function Warning(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 0.835449L42.6702 38.0417H1.32983L22 0.835449ZM23.375 15.125V25.2083H20.625V15.125H23.375ZM20.6213 32.5505L23.3987 32.5499L23.3981 29.7999L20.6207 29.8005L20.6213 32.5505Z"
        fill="white"
      />
    </svg>
  );
}
