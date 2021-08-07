import StatPool from '../lib/StatPool';
import { StatPoolType } from '../lib/StatPool';

interface IStatPoolProps {
  fieldName: string;
  field: StatPool;
  handleChange: (val: StatPool) => void;
  poolType: StatPoolType;
}

function getMaxBG(poolType: StatPoolType): string {
  switch (poolType) {
    case StatPoolType.MIGHT:
      return 'bg-red-300';
    case StatPoolType.SPEED:
      return 'bg-yellow-300';
    case StatPoolType.INTELLECT:
      return 'bg-blue-300';
  }
}

const StatPoolField = (props: IStatPoolProps) => {
  const { fieldName, field, handleChange, poolType } = props;

  return (
    <div
      className={`flex flex-row items-center ${
        poolType == StatPoolType.MIGHT ? '' : 'border-t-2' // Jank, but I couldn't get the `even` pseudo-selector to work
      }`}>
      <span className="w-1/3 mr-4 text-xl sheetLabel">{fieldName}</span>
      <div className="flex flex-row w-full">
        <div className="grid w-1/2 grid-cols-2 gap-0 mr-4 statPoolFrame">
          <input
            className="w-full statPoolInput"
            type="number"
            placeholder="Current"
            value={field.current}
            onChange={(e) =>
              handleChange({
                ...field,
                current: parseInt(e.currentTarget.value),
              })
            }
          />
          <div className={`${getMaxBG(poolType)} -skew-x-12`}>
            <input
              className="w-full text-xl font-semibold statPoolInput focus:ring-0"
              type="number"
              placeholder="Maximum"
              value={field.max}
              onChange={(e) =>
                handleChange({ ...field, max: parseInt(e.currentTarget.value) })
              }
            />
          </div>
        </div>
        <label className="ml-4 text-left">
          <span className="mr-2 sheetLabel">Edge</span>
          <input
            className="w-1/6 text-center sheetInput"
            type="number"
            placeholder="Edge"
            value={field.edge}
            onChange={(e) =>
              handleChange({ ...field, edge: parseInt(e.currentTarget.value) })
            }
          />
        </label>
      </div>
    </div>
  );
};

export default StatPoolField;
