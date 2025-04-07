const RASTER_LAYERS_CONFIG = [
    {
        id: 'height-raster',
        name: 'Height Raster',
        type: 'height' as const,
        url: 'https://geoportal-data.web.app/data/6/rasters/499/499',
        metadataUrl: 'https://geoportal-data.web.app/data/6/rasters/499/499/metadata.json',
        tileUrlTemplate: 'https://geoportal-data.web.app/data/6/rasters/499/499/{z}/{y}/{x}.lerc',
        zIndex: 1,
        projection: 'EPSG:2176'
    },
    {
        id: 'rgb-raster',
        name: 'RGB Raster',
        type: 'height' as const,
        url: 'https://geoportal-data.web.app/data/6/rasters/500/500',
        metadataUrl: 'https://geoportal-data.web.app/data/6/rasters/500/500/metadata.json',
        tileUrlTemplate: 'https://geoportal-data.web.app/data/6/rasters/500/500/{z}/{y}/{x}.lerc',
        zIndex: 1,
        projection: 'EPSG:2176'
    }
];

export default RASTER_LAYERS_CONFIG;