interface MissionItemProps {
  title: string
}

export function MissionItem({ title }: MissionItemProps) {
  return (
    <div className="border-t border-gray-800 py-4">
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  )
}

