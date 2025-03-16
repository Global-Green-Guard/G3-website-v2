interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}

