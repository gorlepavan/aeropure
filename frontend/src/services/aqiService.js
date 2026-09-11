export const getAQIData = async (city) => {
  const data = {
    Vijayawada: {
      aqi: 74,
      pm25: 31,
      pm10: 45,
      co: 0.6,
      no2: 12,
    },
    Hyderabad: {
      aqi: 102,
      pm25: 52,
      pm10: 78,
      co: 0.9,
      no2: 22,
    },
    Delhi: {
      aqi: 188,
      pm25: 96,
      pm10: 145,
      co: 1.2,
      no2: 35,
    },
  };

  return data[city] || null;
};