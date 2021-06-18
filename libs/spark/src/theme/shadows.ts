const shadowKeyUmbraOpacity = 0.1;
const shadowKeyPenumbraOpacity = 0.07;
const shadowAmbientShadowOpacity = 0.06;

export function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0, 0, 0, ${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0, 0, 0, ${shadowAmbientShadowOpacity})`,
  ].join(',');
}
