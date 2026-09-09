import { Stack } from 'expo-router';
import { createContext, useState } from 'react';

export type Dish = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};

type MenuContextType = {
  menu: Dish[];
  addDish: (dish: Dish) => void;
};

export const MenuContext = createContext<MenuContextType>({
  menu: [],
  addDish: () => {},
});

export default function Layout() {
  const [menu, setMenu] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setMenu((oldMenu) => [...oldMenu, dish]);
  };

  return (
    <MenuContext.Provider value={{ menu, addDish }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="chef" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false }} />
      </Stack>
    </MenuContext.Provider>
  );
}