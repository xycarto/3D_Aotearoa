

Procedural.init( {
    container: document.getElementById( 'container' ),
    // For further details see:
    // github.com/felixpalmer/procedural-gl-js/wiki/Data-sources
    datasource: {
      elevation: {
        pixelEncoding: 'terrain-rgb', // or 'nasadem', 'terrarium'
        pixelFormat: 'terrain-rgb',
        urlFormat: 'https://xycarto-base-maps.s3.amazonaws.com/nz-elevation-eight/elevationCache/{z}/{x}/{y}.png',
        attribution: 'Online elevation by XYCarto with'
      },
      imagery: {
        urlFormat: 'https://tiles.maps.linz.io/nz_colour_basemap/GLOBAL_MERCATOR/{z}/{x}/{y}.png',
        attribution: ' data sourced from LINZ Data Service CC-BY 4.0'
      },
    }
  } );

  var target = {
    latitude: -41.2924, longitude: 174.7787,
    angle: 30, bearing: 90, distance: 100000
  };

Procedural.displayLocation( target );


