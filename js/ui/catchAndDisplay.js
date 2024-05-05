export function catchAndDisplay(container =".loading-indicator", message ="There was an unexpected error", messageType="error"){
  const inside = document.querySelector(container);
  inside.innerHTML =`<div class"message ${messageType}">${message}</div>`;
}