  import AsyncStorage, { createAsyncStorage } from '@react-native-async-storage/async-storage';

  const storage = createAsyncStorage("groupsDB");
  
  export const loadData = async () => {
    try {
      const data = await JSON.parse(storage.getItem('groupsDB'));
      console.log("Data loaded: ", data);
    } 
    catch (error) {
      console.log("Error loading data", error);
    }
    return data;
  }

  export const saveData = async (groups) => {
    try {
      await storage.setItem('groupsDB', JSON.stringify(groups));
      console.log("Data saved");
    }
    catch (error) {
      console.log("Error saving data", error);
    }

  }
