import { atom } from 'recoil'

export const menuOpneState = atom<boolean>({
  key: 'menuOpenState',
  default: true,
})
