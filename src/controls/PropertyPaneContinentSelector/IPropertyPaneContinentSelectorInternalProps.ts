//Lsn 3.4 Create a merged interface for the control properties

import { IPropertyPaneCustomFieldProps } from '@microsoft/sp-property-pane';
import { IPropertyPaneContinentSelectorProps } from './IPropertyPaneContinentSelectorProps';

export interface IPropertyPaneContinentSelectorInternalProps extends IPropertyPaneCustomFieldProps, IPropertyPaneContinentSelectorProps { }