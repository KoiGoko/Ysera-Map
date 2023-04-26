import { reactive } from 'vue';

interface Icons {
  [key: string]: string;
}

interface DrawerOptions {
  icons: Icons;
  activeIcons: Icons;
  temp: Icons;
}
export function useDrawerIcons(initialOptions: DrawerOptions) {
  const { icons, activeIcons,temp} = reactive(initialOptions);
  function toggleIcon(buttonName: string) {
    Object.keys(icons).forEach((key) => {
      if (key === buttonName) {
        icons[key] = activeIcons[key];
      } else {
        icons[key] = temp[key];
      }
    });
  }
  return { icons, toggleIcon };
}
