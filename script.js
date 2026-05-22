let simulationInterval = null;

function activateLight(color) {
  document.querySelectorAll('.light').forEach(light => {
    light.classList.remove('active');
  });
  document.getElementById(color).classList.add('active');
}

function startSimulation() {
  let sequence = ['red', 'green', 'yellow'];
  let timings = { red: 3000, green: 3000, yellow: 1500 };
  let index = 0;

  function nextLight() {
    let currentColor = sequence[index];
    activateLight(currentColor);
    setTimeout(() => {
      index = (index + 1) % sequence.length;
      nextLight();
    }, timings[currentColor]);
  }

  nextLight();
}

function toggleSimulation() {
  if (simulationInterval) {
    clearInterval(simulationInterval);
    simulationInterval = null;
    document.querySelectorAll('.light').forEach(light => {
      light.classList.remove('active');
    });
  } else {
    startSimulation();
    simulationInterval = setInterval(() => {}, 10000);
  }
}

