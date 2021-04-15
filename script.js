

Procedural.init( {
    container: document.getElementById( 'container' ),
    // For further details see:
    // github.com/felixpalmer/procedural-gl-js/wiki/Data-sources
    datasource: {
      elevation: {
        pixelEncoding: 'terrain-rgb', // or 'nasadem', 'terrarium'
        pixelFormat: 'terrain-rgb',
        urlFormat: 'https://xycarto-base-maps.s3-ap-southeast-2.amazonaws.com/nz-elevation-eight/elevationCache/{z}/{x}/{y}.png',
        attribution: 'Elevation attribution'
      },
      imagery: {
        urlFormat: 'https://tiles.maps.linz.io/nz_colour_basemap/GLOBAL_MERCATOR/{z}/{x}/{y}.png',
        attribution: 'Imagery attribution'
      },
    }
  } );

  var target = {
    latitude: -46.061612354797795, longitude: 167.13911036209228,
    angle: 45, bearing: 0, distance: 100000
  };

Procedural.displayLocation( target );


