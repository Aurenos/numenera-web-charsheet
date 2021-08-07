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
    <div className="flex flex-col">
      <span className="flex-shrink mb-4 text-xl sheetLabel">{fieldName}</span>
      <input
        className="flex-grow text-4xl bg-white border-2 statPoolInput rounded-t-xl"
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
      <div
        className={`flex-shrink grid grid-cols-2 grid-rows-1 h-40 rounded-b-xl ${getMaxBG(
          poolType
        )}`}>
        <div className="relative">
          <label className="statPoolLabel">Pool</label>
          <input
            className="border-b-2 border-l-2 border-r-2 statPoolInput rounded-bl-xl"
            type="number"
            value={field.max}
            onChange={(e) =>
              handleChange({ ...field, max: parseInt(e.currentTarget.value) })
            }
          />
        </div>
        <div className="relative">
          <label className="statPoolLabel">Edge</label>
          <input
            className="border-b-2 border-r-2 rounded-br-xl statPoolInput"
            type="number"
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
