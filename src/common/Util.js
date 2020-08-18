import {googleKey} from '../config/Environment';

export async function getLatLong(address) {
  const response = await fetch(
    'https://maps.google.com/maps/api/geocode/json?address=' +
      address +
      '&key=' +
      googleKey,
    {
      method: 'GET',
    },
  );
  if (response.status >= 200 && response.status < 300) {
    const json = await response.json();
    if (json.status !== 'OK') {
      throw new Error(
        'Can not determine location from the address: ' + address,
      );
    }
    return json.results[0].geometry.location;
  } else {
    let message;
    try {
      const json = await response.json();
      message = json.message || json.error_description;
    } catch (err) {
      message = `Code: ${response.status} ${response.statusText}`;
    }
    throw new Error(message);
  }
}
