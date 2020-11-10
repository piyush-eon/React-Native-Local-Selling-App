import {
  getLastKnownPositionAsync,
  requestPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
