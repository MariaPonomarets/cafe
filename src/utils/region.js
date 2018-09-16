export const calDelta = (lat, lon, accuracy) => {
  accuracy = accuracy / 2;
  const circumference = 40075;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const angularDistance = accuracy / circumference;

  const latitudeDelta = accuracy / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(Math.atan2(
    Math.sin(angularDistance) * Math.cos(lat),
    Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)));

  return result = {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta,
  }
};

export const getBoundingBox = (region) => ([
  region.longitude - region.longitudeDelta / 2,
  region.latitude - region.latitudeDelta / 2,
  region.longitude + region.longitudeDelta / 2,
  region.latitude + region.latitudeDelta / 2,
]);
