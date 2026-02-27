import loaderIcon from "../assets/loader.svg";
type LoaderProps = {
  size?: number;
};
function Loader({ size = 40 }: LoaderProps) {
  return (
    <div className="-col-end-1 sm:col-start-3">
      <div className="flex h-full w-full items-center justify-center">
        <div style={{ height: `${size}px`, width: `${size}px` }}>
          <img
            className="inline-block h-full w-full animate-spin"
            src={loaderIcon}
            alt="loader-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
