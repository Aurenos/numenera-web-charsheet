import { TrashIcon } from '@heroicons/react/solid';

interface ITrashButtonProps {
  onClick: () => void;
}

const TrashButton = (props: ITrashButtonProps) => {
  return (
    <button
      className="h-10 p-2 text-gray-500 focus:text-white focus:bg-gray-400 sheetButton"
      onClick={(e) => {
        props.onClick();
        e.currentTarget.blur();
      }}>
      <TrashIcon className="w-6 h-6" />
    </button>
  );
};

export default TrashButton;
