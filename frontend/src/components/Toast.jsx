import { FaCheckCircle } from "react-icons/fa";

// A small toast notification that appears at the bottom of the screen.
// It shows a success message and disappears after a few seconds.
//
// Props:
// - message: the text to show inside the toast
// - show: whether the toast is currently visible
function Toast({ message, show }) {
  // If show is false, don't render anything
  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 animate-[fadeIn_0.3s_ease]">
      <div className="flex items-center gap-2 rounded-full bg-text px-6 py-3 text-white shadow-hover">
        <FaCheckCircle className="text-green-400 text-lg" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

export default Toast;
