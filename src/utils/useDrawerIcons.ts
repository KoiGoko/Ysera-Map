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
  const activeIconName = Object.keys(activeIcons)[0]; // 假设只有一个激活图标，取第一个
  const inactiveIcons = Object.keys(icons).reduce((obj, key) => {
    if (key !== activeIconName) {
      obj[key] = `mdi-${key}-outline`;
    }
    return obj;
  }, {} as Icons);

  function toggleIcon(buttonName: string) {
    Object.keys(icons).forEach((key) => {
      if (key === buttonName) {
        icons[key] = activeIcons[key];
      } else {
        icons[key] = temp[key];
        console.log(temp[key]);
      }
    });
    // console.log(icons);
  }
  return { icons, toggleIcon };
}
