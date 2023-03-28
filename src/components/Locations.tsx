import React from 'react'
import LocationItem from './LocationItem';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import '../styles/locations.scss'
import { useLocations } from '../hooks/useLocations';

const Locations = () => {
 const {locations, onDragEnd} = useLocations()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className='locations'>
              {
                locations.map((point, index) => <LocationItem key={point.address} point={point} index={index} />)
              }
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Locations;