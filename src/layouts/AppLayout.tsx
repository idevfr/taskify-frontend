import type { PropsWithChildren } from "react";
type Props = {
  overflowALlowed?: boolean;
} & PropsWithChildren;

function AppLayout({ overflowALlowed = false, children }: Props) {
  return (
    <div
      className={`-col-end-1 ${overflowALlowed ? "overflow-y-scroll" : "overflow-hidden"} sm:col-start-3`}
    >
      {children}
    </div>
  );
}

export default AppLayout;
