export default function cardMarkerComponent(mark){
    const marker = document.createElement('div');
    marker.classList.add('card-marker');
    marker.style.cssText = `background-color: ${mark};`
    return marker;
}