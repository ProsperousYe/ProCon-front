import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWindowSizeMain: (w: number, h: number) => void
      setWindowSizeLogin: (w: number, h: number) => void
    }
  }
}
