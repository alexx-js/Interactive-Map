function mostrarInformacion(ubicacion) {
  var contenido = document.getElementById("contenido");
  const gray =
    "https://auteco.vteximg.com.br/arquivos/ids/219043/moto-benelli-180s-gris-2022-foto1.png?v=637944516769130000";
  const red =
    "https://auteco.vteximg.com.br/arquivos/ids/219050/moto-benelli-180s-rojo-2022-foto1.png?v=637944518097400000";
  const blue =
    "https://auteco.vteximg.com.br/arquivos/ids/219057/moto-benelli-180s-azul-2022-foto1.png?v=637944519210970000";
  const img = document.createElement("img");
  img.src = blue;
  const img2 = document.createElement("img");
  img2.src = gray;
  const img3 = document.createElement("img");
  img3.src = red;

  if (ubicacion == 1) {
    contenido.removeChild(contenido.firstChild);
    contenido.appendChild(img);
  }
  if (ubicacion == 2) {
    contenido.removeChild(contenido.firstChild);
    contenido.appendChild(img2);
  }
  if (ubicacion == 3) {
    contenido.removeChild(contenido.firstChild);
    contenido.appendChild(img3);
  }

  if (contenido.childElementCount > 1) {
    contenido.removeChild(contenido.firstChild)
  }
}
