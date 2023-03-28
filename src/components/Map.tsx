import React from 'react'
import { useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { useMaps } from '../hooks/useMaps';
import '../styles/Map.scss'

declare const ymaps: any

const Map = () => {
  const {searchPosition} = useAppSelector(state => state.locations)
  const {searchControl} = useMaps()

  useEffect(() => {
    ymaps.ready(() => {
      const geoCoder = ymaps.geocode(searchPosition);
      geoCoder.then((res:any) => {
        const addressLine = res.geoObjects.get(0).getAddressLine()
        searchControl.search(addressLine)
      })
      .catch((e:Error) => console.log(e))
    })
  }, [searchPosition])

  return (
    <div id='map' className='map'></div>
  );
};

export default Map;