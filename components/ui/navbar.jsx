import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

function Navbar() {
  console.log("Navbar rendered");
  return (
    <header className="section-header bg-black sticky top-0 left-0 right-0 z-30 py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="text-secondary font-bold text-2xl">
            Zenith
          </Link>
          <div className="flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="py-3 px-8">
                  <Image
                    src="/english.png"
                    width={24}
                    height={24}
                    alt="flag-english"
                  />
                  EN
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Image
                    src="/english.png"
                    width={24}
                    height={24}
                    alt="flag-english"
                  />
                  ENG
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Image
                    src="/indonesia.png"
                    width={24}
                    height={24}
                    alt="flag-indonesia"
                  />
                  IND
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
