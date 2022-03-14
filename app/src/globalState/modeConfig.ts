import { atom } from 'recoil'

export const modeConfigState = atom<boolean>({
  key: 'modeConfigState',
  default: true,
})
