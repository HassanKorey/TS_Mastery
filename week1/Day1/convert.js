const RATE = 1550;

function nairaToUsd(amount) {
  return amount / RATE;
  }

  function usdToNaira(amount) {
    return amount * RATE;
    }

    function celsiusToFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
      }

      function kgToPounds(kg) {
        return kg * 2.20462;
        }
        const sampleNgn = 5000;
        const convertedUsd = nairaToUsd(sampleNgn);
        const convertedNgn = usdToNaira(convertedUsd);

        console.log(`₦${sampleNgn.toFixed(2)} is $${convertedUsd.toFixed(2)}`);
        console.log(`$10.00 is ₦${usdToNaira(10).toFixed(2)}`);
        console.log(`0°C is ${celsiusToFahrenheit(0)}°F`);
        console.log(`100°C is ${celsiusToFahrenheit(100)}°F`);
        console.log(`50 kg is ${kgToPounds(50).toFixed(2)} lbs`);

        console.log(`Round-trip result: ${convertedNgn}`);
        console.log(`Is it exactly 5000? ${convertedNgn === 5000}`);
        