interface TagProps {
  tag: string
}

export function Tag({ tag }: TagProps) {
  return (
    <>
      <li
        key={tag}
        className="py-2 px-4 bg-primary text-white font-semibold rounded-full"
      >
        #{tag}
      </li>
    </>
  )
}
