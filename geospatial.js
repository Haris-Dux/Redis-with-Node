const client = require("./client");


async function init () {
    await client.geoadd("hospital", -122.27652, 37.805186, 'station:1');
    await client.geoadd("hospital", -122.2674626, 37.8062344, 'station:2');
    await client.geoadd("hospital", -122.2469854, 37.8104049, 'station:3');
    const result = await client.geoSearch(
        'hospital', {
          longitude: -122.27652,
          latitude: 37.805186,
        },
        { radius: 5,
          unit: 'km'
        }
      );
      console.log(result);
};

init();