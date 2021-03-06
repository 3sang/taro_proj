import moment from 'moment'

export const getWeekTime = (time) =>{
  const map = {
    0:'星期日',
    1:'星期一',
    2:'星期二',
    3:'星期三',
    4:'星期四',
    5:'星期五',
    6:'星期六',
  }

  time = typeof time !== 'number' ? Number(time) :time
  return moment(time).format('MM-DD') + map[moment(time).day()]
}