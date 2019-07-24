import 'jquery';
import 'bootstrap';
import 'lodash';
const Pokedex = require('pokeapi-js-wrapper');

$(function() {
  const P = new Pokedex.Pokedex();

  function testing() {
    P.getPokemonByName('eevee') // with Promise
      .then(function(response) {
        var detailsT = _.template("<ul><li><%=name%></li><li><%=height%></li><li><%=weight%></li></ul>")
        $("#poke-details").html(detailsT(response));
      });
  }

  $("#myButton").click(testing);
})