import { ChangeEvent, Fragment, useState } from 'react'
import { Combobox as ComboboxPrimitive, Transition } from '@headlessui/react'
import { FileSearch } from 'phosphor-react'

const items = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export function Combobox() {
  const [selectedItem, setSelectedItem] = useState('')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState()

  const filteredItem =
    query === ''
      ? items
      : items.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <>
      <label className="flex items-center gap-2 py-2 border border-zinc-500 bg-zinc-200 rounded-md relative cursor-pointer">
        <FileSearch size={16} weight="light" className="ml-2 text-gray-500" />
        <ComboboxPrimitive value={selectedItem} onChange={setSelectedItem}>
          <ComboboxPrimitive.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por linha, origem ou destino"
            className="w-full bg-transparent outline-none"
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxPrimitive.Options className="absolute border border-zinc-500 -top-8 w-full py-1 mt-20 overflow-hidden bg-white px-8 rounded-sm">
              {filteredItem.map((item) => (
                <ComboboxPrimitive.Option key={item.id} value={item.name}>
                  {item.name}
                </ComboboxPrimitive.Option>
              ))}
            </ComboboxPrimitive.Options>
          </Transition>
        </ComboboxPrimitive>
      </label>
    </>
  )
}
