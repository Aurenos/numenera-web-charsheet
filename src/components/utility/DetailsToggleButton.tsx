import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { makeBasicTooltip } from '../../helpers';

interface IDetailsToggleButtonProps {
  toggleClick: (b: boolean) => void;
  showDetails: boolean;
}

const DetailsToggleButton = (props: IDetailsToggleButtonProps) => {
  const getDetailToggleBtnClasses = () => {
    return `h-10 p-2 rounded-tr-none rounded-br-none border-r-0 sheetButton shadow-open-r ${
      props.showDetails
        ? 'text-white bg-gray-400 focus:text-gray-500 focus:bg-gray-100 hover:bg-gray-400'
        : 'text-gray-500 focus:text-white focus:bg-gray-400 hover:bg-gray-100'
    }`;
  };

  const getIcon = () => {
    return props.showDetails ? (
      <ChevronDownIcon className="w-6 h-6" />
    ) : (
      <ChevronRightIcon className="w-6 h-6" />
    );
  };

  return (
    <button
      className={getDetailToggleBtnClasses()}
      onClick={(e) => {
        props.toggleClick(!props.showDetails);
        e.currentTarget.blur();
      }}
      data-tip={props.showDetails ? 'Hide Details' : 'Show Details'}>
      {getIcon()}
      {makeBasicTooltip(500)}
    </button>
  );
};

export default DetailsToggleButton;
