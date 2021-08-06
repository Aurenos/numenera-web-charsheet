import BasicInfoField from './BasicInfoField';
import CharacterSheet from '../lib/CharacterSheet';

interface BasicInfoProps {
  sheet: CharacterSheet;
  updateSheet: (s: CharacterSheet) => void;
}

const BasicInfo = (props: BasicInfoProps) => {
  const { sheet, updateSheet } = props;

  return (
    <div className="col-span-2 p-2 border-2 border-gray-300 rounded">
      <div className="grid grid-cols-2 gap-1">
        <div className="col-span-2">
          <BasicInfoField
            type="text"
            placeholder="Character Name"
            field={sheet.name}
            handleChange={(str) => updateSheet({ ...sheet, name: str })}
          />
        </div>
        <span className="col-span-2 mx-auto text-lg text-gray-600">is a</span>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <BasicInfoField
              type="text"
              placeholder="Descriptor"
              field={sheet.descriptor}
              handleChange={(str) => updateSheet({ ...sheet, descriptor: str })}
            />
            <BasicInfoField
              type="text"
              placeholder="Type"
              field={sheet.type}
              handleChange={(str) => updateSheet({ ...sheet, type: str })}
            />
          </div>
        </div>
        <span className="col-span-2 mx-auto text-lg text-gray-600">who</span>
        <div className="col-span-2">
          <BasicInfoField
            type="text"
            placeholder="Focus"
            field={sheet.focus}
            handleChange={(str) => updateSheet({ ...sheet, focus: str })}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 mt-4 border-t-2">
        <div className="flex flex-col">
          <span className="mx-auto text-lg font-semibold">Tier</span>
          <BasicInfoField
            placeholder="Tier"
            type="number"
            field={sheet.tier.toString()}
            handleChange={(str) =>
              updateSheet({ ...sheet, tier: parseInt(str) })
            }
          />
        </div>
        <div className="flex flex-col">
          <span className="mx-auto text-lg font-semibold">Effort</span>
          <BasicInfoField
            placeholder="Effort"
            type="number"
            field={sheet.effort.toString()}
            handleChange={(str) =>
              updateSheet({ ...sheet, effort: parseInt(str) })
            }
          />
        </div>
        <div className="flex flex-col">
          <span className="mx-auto text-lg font-semibold">XP</span>
          <BasicInfoField
            placeholder="XP"
            type="number"
            field={sheet.xp.toString()}
            handleChange={(str) => updateSheet({ ...sheet, xp: parseInt(str) })}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
