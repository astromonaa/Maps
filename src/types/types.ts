export interface ILocationProps {
  point: IPoint,
  index: number
}

export interface IPoint {
  address: string
  budgets: string[]
  latitude: number
  longitude: number
}


export interface IDropResult {
  draggableId: string
  type: string
  source: Source
  reason: string
  mode: string
  destination: Destination
  combine: any
}

export interface Source {
  index: number
  droppableId: string
}

export interface Destination {
  droppableId: string
  index: number
}