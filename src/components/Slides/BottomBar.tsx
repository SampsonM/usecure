import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type BottomBarProps = {
  isContinueDisabled: boolean;
  onGoBackPress: () => void;
  onContinuePress: () => void;
}

const BottomBar: FC<BottomBarProps> = ({ isContinueDisabled = true, onGoBackPress, onContinuePress }) => {
  return (
    <div className="w-full bg-gray-100 py-4 px-6 flex items-center justify-between shadow-md">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        onClick={onGoBackPress}
      >
        <ChevronLeftIcon className="h-5 w-5" />
        Go Back
      </button>

      <button
        className={`flex items-center gap-2 px-4 py-2 rounded ${
          isContinueDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        } transition`}
        disabled={isContinueDisabled}
        onClick={onContinuePress}
      >
        Continue
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default BottomBar;
