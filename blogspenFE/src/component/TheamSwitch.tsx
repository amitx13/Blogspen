import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./icons/MoonIcon";
import {SunIcon} from "./icons/SunIcon";

interface TheamSwitchProps {
  theme:boolean
  setTheme: (theme: boolean) => void;
}

export const TheamSwitch = ({theme, setTheme}:TheamSwitchProps) => {
  return (
    <Switch
      isSelected={theme}
      size="lg"
      color="success"
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
      onValueChange={(val)=>setTheme(val)}
    >
    </Switch>
  );
}
