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
    <div className="flex flex-row items-center p-2">
      <span className="w-1/4 mr-4 text-lg font-semibold">{fieldName}</span>
      <div className="grid w-full grid-cols-3">
        <div className="grid w-full grid-cols-2 gap-0 mr-4 transform -skew-x-12 bg-white border border-gray-400 rounded shadow focus-within:ring-2">
          <input
            className="w-full skew-x-12 statPoolInputBasic focus:ring-0"
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
              className="w-full text-xl font-semibold skew-x-12 statPoolInputBasic focus:ring-0"
              type="number"
              placeholder="Maximum"
              value={field.max}
              onChange={(e) =>
                handleChange({ ...field, max: parseInt(e.currentTarget.value) })
              }
            />
          </div>
        </div>
        <label>
          <span className="mr-2 font-semibold">Edge</span>
          <input
            className="w-1/4 text-lg text-center bg-white border border-gray-400 shadow statPoolInputBasic"
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
