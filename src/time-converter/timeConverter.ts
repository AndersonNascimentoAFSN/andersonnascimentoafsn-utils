export class TimeConverter {
  /**
   * Truncates a number to a specified number of decimal places.
   * This function multiplies the number by a precision factor, applies the Math.floor function to truncate
   * the result to the nearest lower integer, and then divides by the same precision factor to return to the original scale.
   *
   * @param {number} num - The number to be truncated.
   * @param {number} precision - The precision factor for truncation, default is 1000 for three decimal places.
   * @returns {number} The truncated number.
   */
  static truncateNumber(num: number, precision: number = 1000): number {
    return Math.trunc(num * precision) / precision
  }

  static isValidTimeFormat(time: string): boolean {
    const timePattern = /^(?:[01]\d|2[0-3]):[0-5]\d$/
    return timePattern.test(time)
  }

  /**
   * Convert decimal to string.
   * @param {Number} decimalHours Number
   * @return {String} '10:30' String.
   * @example
   * const decimal = 10.5;
   * const decimalFormatted = decimalToTime(decimal);
   * console.log(decimalFormatted); // Output: '10:30'
   */
  static decimalToTime(decimalHours: number | undefined | string): string {
    if (typeof decimalHours !== 'number' || isNaN(decimalHours)) {
      console.error('decimalHours must be a number')
      return ''
    }

    const hours = Math.floor(decimalHours)
    const minutes = Math.round((decimalHours - hours) * 60)
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(
      minutes
    ).padStart(2, '0')}`
    return formattedTime
  }

  /**
   * Convert decimal to string.
   * @param {String} timeString String
   * @return {Number} 10.5 Number.
   * @example
   * const time = '10:30;
   * const timeFormatted = timeToDecimal(time);
   * console.log(timeFormatted); // Output: 10.5
   */
  static timeToDecimal(timeString: string | undefined): number {
    const isValid = this.isValidTimeFormat(timeString || '')

    if (!isValid || !timeString) {
      console.error('timeString must be in the format HH:mm')
      return 0
    }

    const [hours, minutes] = timeString?.split(':')?.map(Number)
    const decimalHours = hours + minutes / 60

    return this.truncateNumber(decimalHours, 1000)
  }
}
