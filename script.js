var listaFilmes = [
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206284.jpg%27&ImageUrl=%27206284.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=85&ImageId=%27177376.png%27&ImageUrl=%27177376.png",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27151851.jpeg%27&ImageUrl=%27151851.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206254.jpg%27&ImageUrl=%27206254.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27145815.jpeg%27&ImageUrl=%27145815.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144710.jpeg%27&ImageUrl=%27144710.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144820.jpeg%27&ImageUrl=%27144820.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144895.jpeg%27&ImageUrl=%27144895.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144762.jpeg%27&ImageUrl=%27144762.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144572.jpeg%27&ImageUrl=%27144572.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144555.jpeg%27&ImageUrl=%27144555.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144400.jpeg%27&ImageUrl=%27144400.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206268.jpg%27&ImageUrl=%27206268.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206280.jpg%27&ImageUrl=%27206280.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206260.jpg%27&ImageUrl=%27206260.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144592.jpeg%27&ImageUrl=%27144592.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206288.jpg%27&ImageUrl=%27206288.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206264.jpg%27&ImageUrl=%27206264.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27149575.jpeg%27&ImageUrl=%27149575.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27144565.jpeg%27&ImageUrl=%27144565.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206272.jpg%27&ImageUrl=%27206272.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27206276.jpg%27&ImageUrl=%27206276.jpg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27139766.jpeg%27&ImageUrl=%27139766.jpeg",
  "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27204952.jpg%27&ImageUrl=%27204952.jpg"
];

var linkFilmes = [
  "https://www.telecine.com.br/filme/007-contra-spectre_6878",
  "https://www.telecine.com.br/filme/007-operacao-skyfall_6278",
  "https://www.telecine.com.br/filme/007-quantum-of-solace_6789",
  "https://www.telecine.com.br/filme/007-cassino-royale_5347",
  "https://www.telecine.com.br/filme/007-um-novo-dia-para-morrer_4685",
  "https://www.telecine.com.br/filme/007-o-mundo-nao-e-o-bastante_4464",
  "https://www.telecine.com.br/filme/007-o-amanha-nunca-morre_4486",
  "https://www.telecine.com.br/filme/007-contra-goldeneye_4501",
  "https://www.telecine.com.br/filme/007-permissao-para-matar_4475",
  "https://www.telecine.com.br/filme/007-marcado-para-a-morte_4436",
  "https://www.telecine.com.br/filme/007-na-mira-dos-assassinos_4432",
  "https://www.telecine.com.br/filme/007-contra-octopussy_4401",
  "https://www.telecine.com.br/filme/007-somente-para-seus-olhos_4692",
  "https://www.telecine.com.br/filme/007-contra-o-foguete-da-morte_4469",
  "https://www.telecine.com.br/filme/007-o-espiao-que-me-amava_6873",
  "https://www.telecine.com.br/filme/007-contra-o-homem-com-a-pistola-de-ouro_4440",
  "https://www.telecine.com.br/filme/com-007-viva-e-deixe-morrer_17475",
  "https://www.telecine.com.br/filme/007-os-diamantes-sao-eternos_4488",
  "https://www.telecine.com.br/filme/007-a-servico-secreto-de-sua-majestade_6383",
  "https://www.telecine.com.br/filme/com-007-so-se-vive-duas-vezes_4434",
  "https://www.telecine.com.br/filme/007-contra-a-chantagem-atomica_4457",
  "https://www.telecine.com.br/filme/007-contra-goldfinger_6838",
  "https://www.telecine.com.br/filme/moscou-contra-007_3471",
  "https://www.telecine.com.br/filme/007-contra-o-satanico-dr-no_17244"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(
    "<a href=" +
      linkFilmes[i] +
      "target='_blank'><img src=" +
      listaFilmes[i] +
      ">"
  );
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".jpeg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido!");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}