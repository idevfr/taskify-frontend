import loaderIcon from "../assets/loader.svg";
type LoaderProps = {
  size?: number;
};
function LoaderFullscreen({ size = 40 }: LoaderProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div style={{ height: `${size}px`, width: `${size}px` }}>
        <img
          className="inline-block h-full w-full animate-spin"
          src={loaderIcon}
          alt="loader-icon"
        />
      </div>
    </div>
  );
}

export default LoaderFullscreen;
