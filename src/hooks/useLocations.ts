import state from '../utils/state'
import { useEffect, useState } from 'react';
import { IPoint } from '../types/types';

export function useLocations() {
  const [locations, setlocations] = useState<IPoint[]>([])

  const onDragEnd = (result:any) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      locations,
      result.source.index,
      result.destination.index
    );
    setlocations(items)
  }

  const reorder = (result:IPoint[], startIndex:number, endIndex:number) => {
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  useEffect(() => {
    setlocations(state.pickPoints)
  }, [])

  return {
    locations, onDragEnd
  }
}