const VECTOR_LAYERS_CONFIG = [
    
    {
        id: 'vector-1',
        name: 'Vector layer 1 (PUWG 2000)',
        url: 'https://geoportal-data.web.app/data/6/vectors/2472/2472.geojson',
        dataProjection: 'EPSG:2176',
        featureProjection: 'EPSG:3857',
        fillColor: 'rgba(0, 0, 255, 0.3)',
        strokeColor: '#0000ff',
        strokeWidth: 2,
    },
    {
        id: 'vector-2',
        name: 'Vector layer 2 (WGS84)',
        url: 'https://geoportal-data.web.app/data/vectors_response.json',
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857',
        fillColor: 'rgba(255, 0, 0, 0.3)',
        strokeColor: '#ff0000',
        strokeWidth: 2,
    },
];

export default VECTOR_LAYERS_CONFIG;