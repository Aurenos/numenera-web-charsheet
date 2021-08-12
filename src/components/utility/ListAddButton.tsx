import { PlusIcon } from '@heroicons/react/solid';

interface IListAddButtonProps {
  onClick: () => void;
  label: string;
}

const ListAddButton = (props: IListAddButtonProps) => {
  return (
    <button
      className="inline-flex items-center px-10 py-2 mx-auto mb-2 align-middle focus:bg-blue-300 focus:outline-none focus:text-white sheetButton"
      onClick={(e) => {
        props.onClick();
        e.currentTarget.blur();
      }}>
      <PlusIcon className="w-6 h-6 mr-2 text-green-500" />
      <span className="font-semibold ">{props.label}</span>
    </button>
  );
};

export default ListAddButton;
