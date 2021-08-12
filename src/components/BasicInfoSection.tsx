import { ISheetSectionProps } from '../lib/CharacterSheet';
import BasicInfoField from './BasicInfoField';

const BasicInfoSection = (props: ISheetSectionProps) => {
  const { sheet, updateSheet } = props;
  const sectionClasses = `col-span-${
    props.colSpan?.toString() || '1'
  } sheetSection`;

  return (
    <div className={sectionClasses}>
      <div className="grid grid-cols-1 grid-rows-3 gap-3">
        <BasicInfoField
          className="w-full"
          type="text"
          placeholder="Character Name"
          field={sheet.name}
          handleChange={(str) => updateSheet({ ...sheet, name: str })}
        />
        <div className="flex flex-row items-center w-full">
          <span className="flex-shrink mr-2 sheetLabel">is a</span>
          <div className="flex-grow col-span-2">
            <div className="grid grid-cols-2 gap-2">
              <BasicInfoField
                type="text"
                placeholder="Descriptor"
                field={sheet.descriptor}
                handleChange={(str) =>
                  updateSheet({ ...sheet, descriptor: str })
                }
              />
              <BasicInfoField
                type="text"
                placeholder="Type"
                field={sheet.type}
                handleChange={(str) => updateSheet({ ...sheet, type: str })}
              />
            </div>
          </div>
          <span className="ml-2 flex-shink sheetLabel">who</span>
        </div>
        <BasicInfoField
          className="w-full"
          type="text"
          placeholder="Focus"
          field={sheet.focus}
          handleChange={(str) => updateSheet({ ...sheet, focus: str })}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 mt-4 border-t border-gray-200">
        <div className="flex flex-col">
          <span className="mx-auto sheetLabel">Tier</span>
          <BasicInfoField
            placeholder="Tier"
            type="number"
            max={6}
            min={1}
            field={sheet.tier.toString()}
            handleChange={(str) =>
              updateSheet({ ...sheet, tier: parseInt(str) })
            }
          />
        </div>
        <div className="flex flex-col">
          <span className="mx-auto sheetLabel">Effort</span>
          <BasicInfoField
            placeholder="Effort"
            type="number"
            max={6}
            min={1}
            field={sheet.effort.toString()}
            handleChange={(str) =>
              updateSheet({ ...sheet, effort: parseInt(str) })
            }
          />
        </div>
        <div className="flex flex-col">
          <span className="mx-auto sheetLabel">XP</span>
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

export default BasicInfoSection;
