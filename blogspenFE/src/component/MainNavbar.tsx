import { Input, Link, Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarItem, NavbarBrand, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import { TheamSwitch } from "./TheamSwitch";
import { useState } from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { NotificationIcon } from "./icons/NotificationIcon";
import { WriteIcon } from "./icons/WriteIcon";
import { useRecoilValue } from "recoil";
import { authState } from "../state/authState";
import { useLocation, useNavigate } from "react-router-dom";
interface MainNavbarProps {
  theme: boolean
  setTheme: (theme: boolean) => void;
}
export default function MainNavbar({ theme, setTheme }: MainNavbarProps) {

  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = useRecoilValue(authState);
  const location = useLocation();

  console.log("Current Path:", location.pathname);

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} maxWidth={"full"}>
      <NavbarContent justify="start" className="!flex-grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarBrand >
        <div className="font-bold cursor-pointer" onClick={() => navigate("/")}>Blogspen</div>
      </NavbarBrand>

      <NavbarMenu style={{ backgroundColor: "inherit", zIndex: "100" }} >
        <NavbarMenuItem >
          <Link href="#" color="success" className="gap-2 font-medium">
            <WriteIcon />
            Write
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" color="success" className="gap-2 font-medium">
            <NotificationIcon size={24} />
            Notifications
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      <NavbarContent className="gap-4 !flex-grow-0" justify="end">

        <NavbarItem className="hidden sm:flex"> {/* write */}
          <div color="foreground" className="cursor-pointer" onClick={()=> navigate("/new-story")}>
            <WriteIcon />
          </div>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">{/* notification */}
          <div aria-current="page" color="foreground" className="cursor-pointer" >
            <NotificationIcon size={24} />
          </div>
        </NavbarItem>

        <NavbarItem className={`${!(location.pathname === "/new-story") && `sm:w-40`} items-center`}>{/* search bar */}
          {(location.pathname === "/new-story") ? 
          <Button 
            variant="flat"
            size="md"
            color="success"  
            className="text-lg text-left rounded-full">
              Publish
          </Button>
          : <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />}
        </NavbarItem>

        <NavbarItem >{/* change theam */}
          <TheamSwitch theme={theme} setTheme={setTheme} />
        </NavbarItem>

        <NavbarItem >
          {auth.isAuthenticated ? <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="success"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> : <Button variant="flat" size="md" color="primary" onPress={() => navigate("/signup")} className="text-lg text-left">Sign Up</Button>}
        </NavbarItem>

      </NavbarContent>

    </Navbar>
  );
}