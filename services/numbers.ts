import { OptionsNumber } from '~/types/constans'

export function getRandNumber(options?: OptionsNumber) {
  if (!options) {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
  }

  return Math.random() * (options.max - options.min) + options.min
}
