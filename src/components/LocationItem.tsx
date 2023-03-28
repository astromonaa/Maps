import React, {FC} from "react";
import { ILocationProps } from '../types/types';
import { useActions } from '../hooks/actions';
import { Draggable } from 'react-beautiful-dnd'

const LocationItem: FC<ILocationProps> = ({ point, index }) => {
  const { setSearchPosition } = useActions()

  return (
    <Draggable key={point.address} draggableId={point.address} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="location-item" onClick={() => setSearchPosition(point.address)}>
            <div>{point.address}</div>
            <div className="budgets">
              {
                point.budgets.map(item => <span key={item} >{item}</span>)
              }
            </div>
          </div>
        </div>
      )}
    </Draggable>

  );
};

export default LocationItem;