import { useState, useEffect } from 'react';
declare const ymaps: any


export function useMaps() {

  const [Map, setMap] = useState<any>()
  const [center, setCenter] = useState([55.75139408476754,37.61883632759299])
  const [searchControl, setSearchControl] = useState<any>()

  const init = () => {
    let map = new ymaps.Map('map', {
      center,
      zoom: 16
    })
    setSearchControl(map.controls._controlsByKey.searchControl)
    setMap(map)
  }
  useEffect(() => {
    !Map && ymaps && ymaps.ready(init)
  }, [])


  return {
    searchControl
  }
}