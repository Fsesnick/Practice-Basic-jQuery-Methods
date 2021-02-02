// 1. Mostre a crítica oculta do restaurante ou use um método de animação para revelá-la.
$('.review').fadeIn();
// 2. Defina o título da crítica oculta do restaurante com um nome diferente - o que você quiser.
$('.review h3').text('Dat Dog');
// 3. Altere o texto da crítica oculta do restaurante. A revisão deve conter HTML, como uma tag strong ou um elemento span.
$('.review p').html('The <strong>very</strong> best gator sausage in the nation!');
// 4. Altere o nome do aplicativo. Altere * apenas * o texto dentro do elemento span dentro de h1.
$('h1 span').text('Yodel!');
// 5. Crie uma animação para o parágrafo com a id de "flashMessage." Encadeie uma animação que
$('#flashMessage')
  // desliza a mensagem para baixo por 1 segundo
  .slideDown(1000)
  // atrasa a mensagem por 2 segundos
  .delay(2000)
  // desliza a mensagem para cima por 1 segundo
  .slideUp(1000);
// 6. Dentro do manipulador de cliques, crie um formulário funcional de avaliação do restaurante.
$ ('#submitBtn'). click (function () {
  //  uma. Use o método val () para obter o que foi inserido nos campos de entrada do nome do restaurante e do formulário de avaliação do restaurante. Salve ambos os valores em variáveis.
  const restaurantName = $('#restaurantNameInput').val();
  const restaurantReview = $('#restaurantReviewInput').val();
  // b. Insira o valor do nome do restaurante na tag #newRestaurant h3
    $('#newRestaurant h3').text(restaurantName);
  // c. Insira o valor da avaliação do restaurante na tag de parágrafo #newRestaurant
  $('#newRestaurant p').text(restaurantReview);
}); 