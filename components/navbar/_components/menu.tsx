"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

import { FaMagnifyingGlass, FaPeopleGroup, FaPeopleArrows } from "react-icons/fa6";

import { FaBook, FaLightbulb } from "react-icons/fa";

import { PiArrowRight } from "react-icons/pi";

import { RiMoneyRupeeCircleFill } from "react-icons/ri";

import { BiTrendingUp, BiSolidMessageSquareDetail } from "react-icons/bi";

const ResourcesComponent: { title: string; href: string; description: string }[] = [
  {
    title: "Demo",
    href: "/resources/demo",
    description:
      "See Coriscus Workspace in action.",
  },
  {
    title: "FAQs",
    href: "/resources/faqs",
    description:
      "Find answers to common queries.",
  },
  {
    title: "Tutorials",
    href: "/resources/tutorial",
    description:
      "Guides to help you get started.",
  },
  {
    title: "Tips",
    href: "/tips",
    description:
      "Enhance your experience.",
  },

];

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <FaPeopleGroup className="text-xl mr-2" />
                  <div className="">
                    <a href="/">Community and Networking</a>
                    <p className="text-gray-400 text-sm font-light">
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <RiMoneyRupeeCircleFill  className="text-xl mr-2" />
                  <div className="">
                    <a>Funding Opportunities and Guidance</a>
                    <p className="text-gray-400 text-sm font-light">
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <FaPeopleArrows className="text-xl mr-2" />
                  <div className="">
                    <a>Team Building and Talent Acquisition</a>
                    <p className="text-gray-400 text-sm font-light">
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <FaMagnifyingGlass className="text-xl mr-2" />
                  <div className="">
                    <a>Market Research and Trends</a>
                    <p className="text-gray-400 text-sm font-light">
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <BiTrendingUp className="text-xl mr-2" />
                  <div className="">
                    <a>Scalability and Growth Strategies</a>
                    <p className="text-gray-400 text-sm font-light">
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <FaLightbulb className="text-xl mr-2" />
                  <div className="">
                    <a>Experimentation and Innovation</a>
                    <p className="text-gray-400 text-sm font-light">
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <BiSolidMessageSquareDetail className="text-xl mr-2" />
                  <div className="">
                    <a>Customer Engagement and Feedback</a>
                    <p className="text-gray-400 text-sm font-light">
                    </p>
                  </div>
                </div>

              </ul>
              <div>
                <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                    <div>
                      <a className="">Template gallery</a>
                      <p className="text-gray-400 text-sm font-light">
                        Setups to get you started
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                    <div>
                      <a>Customer Stories</a>
                      <p className="text-gray-400 text-sm font-light">
                        See how teams use workspace
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                    <div>
                      <a>Connections</a>
                      <p className="text-gray-400 text-sm font-light">
                        Connect your tools
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {ResourcesComponent.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

