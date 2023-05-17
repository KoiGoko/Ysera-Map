import { useRouter } from "vue-router";
import { useDrawerIcons } from "@/utils/useDrawerIcons";

export const handleClick = (name: string) => {
  const router = useRouter();
  // @ts-ignore
  const { toggleIcon } = useDrawerIcons();
  router.push({
    name
  })
  toggleIcon(name);
};
