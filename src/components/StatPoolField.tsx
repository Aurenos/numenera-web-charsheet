import { SparklesIcon } from '@heroicons/react/solid';
import { clamp, makeBasicTooltip } from '../helpers';
import StatPool, { StatPoolType } from '../lib/StatPool';

interface IStatPoolProps {
  fieldName: string;
  field: StatPool;
  handleChange: (val: StatPool) => void;
  poolType: StatPoolType;
}

function getMaxBG(poolType: StatPoolType): string {
  switch (poolType) {
    case StatPoolType.Might:
      return 'bg-red-300';
    case StatPoolType.Speed:
      return 'bg-yellow-300';
    case StatPoolType.Intellect:
      return 'bg-blue-300';
  }
}

const StatPoolField = (props: IStatPoolProps) => {
  const { fieldName, field, handleChange, poolType } = props;

  return (
    <div className="relative flex flex-col">
      <span className="flex-shrink mb-4 text-2xl sheetLabel">{fieldName}</span>
      <button
        data-tip={'Restore'}
        className="absolute p-1 text-gray-500 top-14 right-3 rounded-2xl hover:bg-green-400 hover:text-white"
        onClick={(e) => {
          handleChange({ ...field, current: field.max });
          e.currentTarget.blur();
        }}>
        <SparklesIcon className="w-5 h-5" />
        {makeBasicTooltip()}
      </button>
      <input
        className="flex-grow text-4xl bg-white border-2 statPoolInput rounded-t-xl"
        type="number"
        min="0"
        max={field.max}
        placeholder="Current"
        value={field.current}
        onChange={(e) => {
          handleChange({
            ...field,
            current: clamp(parseInt(e.currentTarget.value), 0, field.max),
          });
        }}
      />

      <div
        className={`flex-shrink grid grid-cols-2 grid-rows-1 h-40 rounded-b-xl ${getMaxBG(
          poolType
        )}`}>
        <div className="relative">
          <label className="statPoolLabel">Pool</label>
          <input
            className="border-b-2 border-l-2 border-r-2 statPoolInput rounded-bl-xl"
            type="number"
            min="1"
            value={field.max}
            onChange={(e) => {
              let newMax = parseInt(e.currentTarget.value);
              let current = clamp(field.current, 0, newMax);
              handleChange({ ...field, max: newMax, current: current });
            }}
          />
        </div>
        <div className="relative">
          <label className="statPoolLabel">Edge</label>
          <input
            className="border-b-2 border-r-2 rounded-br-xl statPoolInput"
            type="number"
            min="0"
            value={field.edge}
            onChange={(e) =>
              handleChange({ ...field, edge: parseInt(e.currentTarget.value) })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StatPoolField;
