import Map from "./Map";

export const TAB_LIST = 'list';
export const TAB_MAP = 'map';
export const TAB_HEART = 'heart';

export function getComponentForTab(tab) {
    switch (tab) {
        case TAB_MAP:
            return Map;
        default:
            return null;
    }
}
