import("./ol.js").then((ol) => {
    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.TileLayer({
          source: new ol.OSM()
        })
      ],
      view: new ol.View({
        center: [0, 0],
        zoom: 2
      })
    });
});
