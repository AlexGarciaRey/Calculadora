const input = document.getElementById('input');

function appendInput(value) {
input.value += value;
}

function clearInput() {
input.value = '';
}

function deleteInput() {
input.value = input.value.slice(0, -1);
}

function calculate() {
try {
input.value = eval(input.value);
} catch (error) {
input.value = 'Error';
}
}
const data = [5, 3]; // Los números a sumar

const svg = d3.select('#graph')
  .append('svg')
  .attr('width', '100%')
  .attr('height', '100%');

// Dibujamos un rectángulo para representar el primer número
svg.append('rect')
  .attr('x', 10)
  .attr('y', 10)
  .attr('width', 100)
  .attr('height', 100)
  .attr('fill', 'blue');

// Dibujamos un rectángulo para representar el segundo número
svg.append('rect')
  .attr('x', 150)
  .attr('y', 10)
  .attr('width', 100)
  .attr('height', 100)
  .attr('fill', 'red');

// Dibujamos un rectángulo para representar la suma
svg.append('rect')
  .attr('x', 290)
  .attr('y', 10)
  .attr('width', 100)
  .attr('height', 100)
  .attr('fill', 'green');

// Dibujamos el signo de suma
svg.append('text')
  .attr('x', 120)
  .attr('y', 60)
  .text('+')
  .attr('font-size', '60px');

// Dibujamos el signo igual
svg.append('text')
  .attr('x', 260)
  .attr('y', 60)
  .text('=')
  .attr('font-size', '60px');

// Animamos la suma
svg.select('rect:nth-child(3)')
  .transition()
  .duration(2000)
  .attr('x', 430)
  .attr('fill', 'purple');