export function formartDate (date, formart) {
  if (date instanceof Date) {
    if (formart == 'YYYY-MM-dd') {
      let year = new Date(date).getFullYear()
      let mounth = new Date(date).getMonth() + 1
      if (mounth < 10) {
        mounth = '0' + mounth
      }
      let day = new Date(date).getDate()
      if (day < 10) {
        day = '0' + day
      }
      return year + '-' + mounth + '-' + day
    }
  } else {
    return ''
  }
}
