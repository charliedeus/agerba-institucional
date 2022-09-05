/* eslint-disable prettier/prettier */
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountRegisters: number
  registersPerPage?: number
  currentPage?: number
  totalPages: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountRegisters,
  registersPerPage = 10,
  currentPage = 1,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const lastPage = totalPages

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
        currentPage,
        Math.min(currentPage + siblingsCount, lastPage),
      )
      : []

  return (
    <div className="flex items-center justify-between flex-col laptop:flex-row">
      <div className="flex items-center gap-2">
        <strong>{(currentPage * registersPerPage + 1) - registersPerPage}</strong> - <strong>{(currentPage * registersPerPage) > totalCountRegisters ? totalCountRegisters : (currentPage * registersPerPage)}</strong> de <strong>{totalCountRegisters}</strong> <span>registros</span>
      </div>
      <div className="flex gap-2 justify-end ">
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && <span className='text-gray-300 font-bold flex items-center'>...</span>}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && <span className='text-gray-300 font-bold flex items-center'>...</span>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </div>
    </div>
  )
}
