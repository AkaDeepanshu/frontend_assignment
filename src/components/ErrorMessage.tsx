import { BiError } from "react-icons/bi";

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "Something went wrong",
  onRetry,
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <BiError className="mx-auto text-6xl text-red-500 mb-4" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{message}</h2>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
