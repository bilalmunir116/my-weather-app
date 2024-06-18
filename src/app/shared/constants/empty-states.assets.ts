import { EmptyStateTypes } from '../enums/empty-states.enum';
import { EmptyState } from '../models/empty-state.model';

export const emptyStates: EmptyState[] = [
  
  {
    id: EmptyStateTypes.NOT_IMPLEMENTED,
    imageSrc: 'assets/icons/global/not-implemented.svg',
    imageAlt: 'Feature not implemented',
    buttonText: 'Go to Dashboard'
  }
];
