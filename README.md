# 3D Aotearoa Test 
Website built to test using locally created elevation models for use with *[procedural-gl.js](https://github.com/felixpalmer/procedural-gl-js)*

This site is not affiliated with any project.

https://xycarto.github.io/3D_Aotearoa/

##Data
<em> Sourced from the LINZ Data Service and licensed for reuse under the CC BY 4.0 licence. </em>

*[8m DEM](https://data.linz.govt.nz/layer/51768-nz-8m-digital-elevation-model-2012/)*

## Steps to create elevation model using LINZ 8m DEM elevation tiles

1. With the VRT, we can gather all the elevation tiles under one file name.  

    *[VRT (mosaic)](https://gdal.org/programs/gdalbuildvrt.html)*

	    gdalbuildvrt elevation.vrt *.tif
	
	Using the VRT, we can preform the noData conversion across all the elevation tiles as if it were a mosaic.  Better yet, the output from this command, will produce a mosaic out the other side.

2. Remove noData

    *[gdalwarp](https://gdal.org/programs/gdalwarp.html)*

	    gdalwarp  -t_srs EPSG:3857 -dstnodata None  -co TILED=YES  -co COMPRESS=DEFLATE  -co BIGTIFF=YES  elevation.vrt elevation_noData_mosaic.tif

3. RGB-ify the elevation mosaic

    *[RGB-ify](https://github.com/mapbox/rio-rgbify)*

	    rio rgbify -b -10000 -i 0.1 /elevation_noData_mosaic.tif elevation_noData_mosaic_rgb.tif

4. GDAL2Tiles is a quick way to render xyz tile caches if you have single layer and are working in Web Mercator.  Be sure to use 3.1 or greater get the functionality of xyz caching and tile size control.  You need these both.  In the end, I used the GDAL Docker developed by perrygeo and got access to GDAL 3.2.  It was a lifesaver, however, I did need to modify the Dockerfile with ``—with-python`` to add GDALs Python bindings and rebuild the Docker.

    *[GDAL2Tiles](https://gdal.org/programs/gdal2tiles.html)*

    *[perrygeo](https://github.com/perrygeo/docker-gdal-base)*

	    gdal2tiles.py --s_srs=EPSG:3857 --zoom=0-16 --xyz --tilesize=512 --processes=7 elevation_noData_mosaic_rgb.tif /data/tile-cache