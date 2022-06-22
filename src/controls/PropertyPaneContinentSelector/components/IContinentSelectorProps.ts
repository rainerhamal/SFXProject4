// Lsn 3.4 Create an interface for the component properties
import {IDropdownOption} from 'office-ui-fabric-react/lib/components/Dropdown';

export interface IContinentSelectorProps {
    label: string;
    onChanged: (option: IDropdownOption, index?: number) => void;
    selectedKey: string | number;
    disabled: boolean;
    stateKey: string;
}
