import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./icons/MoonIcon";
import {SunIcon} from "./icons/SunIcon";

interface TheamSwitchProps {
  setTheme: (theme: boolean) => void;
}

export const TheamSwitch = ({setTheme}:TheamSwitchProps) => {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
      onValueChange={(val)=>setTheme(val)}
    >
    </Switch>
  );
}
