// A simple loading spinner.
// Used while waiting for fake API calls to finish.
function Loader({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* The spinning circle */}
      <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-primary animate-spin"></div>
      <p className="mt-4 text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default Loader;
