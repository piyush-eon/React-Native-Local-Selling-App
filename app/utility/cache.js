import { AsyncStorage } from "@react-native-community/async-storage";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem("cache" + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const isExpired = now.diff(storedTime, "minutes") > 5;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem("cache" + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      AsyncStorage.removeItem("cache" + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store };
