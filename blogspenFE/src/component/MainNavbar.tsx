import { Input, Link, Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarItem, NavbarBrand, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { TheamSwitch } from "./TheamSwitch";
import { useState } from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { NotificationIcon } from "./icons/NotificationIcon";
import { WriteIcon } from "./icons/WriteIcon";


interface MainNavbarProps {
  setTheme: (theme: boolean) => void;
}
export default function MainNavbar({setTheme}:MainNavbarProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} maxWidth={"full"}>
      <NavbarContent justify="start" className="!flex-grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarBrand >
        <div className="font-bold">Blogspen</div>
      </NavbarBrand>

      <NavbarMenu style={{ backgroundColor: "inherit" }} >
        <NavbarMenuItem >
          <Link href="#" color="success">
          <WriteIcon/>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" color="success">
          <NotificationIcon size={18} />
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      <NavbarContent className="gap-4 !flex-grow-0" justify="end">

        <NavbarItem className="hidden sm:flex"> {/* write */}
          <Link color="foreground" href="#">
          <WriteIcon/>
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">{/* notification */}
          <Link href="#" aria-current="page" color="foreground">
          <NotificationIcon size={24} />
          </Link>
        </NavbarItem>

        <NavbarItem className="sm:w-40 items-center">{/* search bar */}
          <Input
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
          />
        </NavbarItem>

        <NavbarItem >{/* change theam */}
          <TheamSwitch setTheme={setTheme}/>
        </NavbarItem>

        <NavbarItem >
          <Dropdown placement="bottom-end">
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
          </Dropdown>
        </NavbarItem>

      </NavbarContent>

    </Navbar>
  );
}
