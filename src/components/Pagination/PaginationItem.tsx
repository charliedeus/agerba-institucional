interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        disabled
        className="rounded-lg text-md py-2 px-4 bg-gray-300 hover:bg-primary disabled:bg-gray-900 disabled:text-gray-50 hover:text-gray-50 disabled:cursor-not-allowed transition-colors duration-75 ease-in-out"
      >
        {number}
      </button>
    )
  }

  return (
    <button
      onClick={() => onPageChange(number)}
      className="rounded-lg text-md py-2 px-4 bg-gray-300 hover:bg-primary hover:text-gray-50 disabled:cursor-default transition-colors duration-75 ease-in-out"
    >
      {number}
    </button>
  )
}
