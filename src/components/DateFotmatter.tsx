import { format, parseISO } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy年MM月d日')}</time>
}

export default DateFormatter
