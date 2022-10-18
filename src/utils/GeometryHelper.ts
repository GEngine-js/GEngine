import {positionNormalUv,positionCorlorUv,PositionNormalCorlorUv} from "./GeometryAttributes"
export default class GeometryHelper {
    static getGeoMetryAttributes(GeometryType: string) {
        let attributes = [];
        switch (GeometryType) {
            case 'box':
            case 'polygon':
            case 'polyline':
                attributes = positionNormalUv;
                break;
            default:
                break;
        }
        return attributes;
    }
}