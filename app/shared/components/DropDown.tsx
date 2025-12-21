"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'

export default function Example() {
  return (
    <Menu>
      <MenuButton className="border cursor-pointer">My account</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          
          
        </MenuItem>
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}