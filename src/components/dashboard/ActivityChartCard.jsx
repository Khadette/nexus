import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { FiChevronDown } from 'react-icons/fi'
import { activityData } from '../../data/activityData'

const periods = ['This year', 'Last year']

/**
 * Activity Chart card. The period dropdown is presentational only —
 * it swaps a label, not the underlying mock series.
 */
export default function ActivityChartCard() {
  const [period, setPeriod] = useState(periods[0])
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="rounded-card border border-border bg-surface p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-textPrimary">Activity Chart</h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-1.5 text-sm text-textSecondary hover:text-primary"
          >
            {period}
            <FiChevronDown size={14} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-7 z-10 w-36 rounded-card border border-border bg-surface py-1 shadow-card">
              {periods.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setPeriod(option)
                    setMenuOpen(false)
                  }}
                  className="block w-full px-3 py-1.5 text-left text-sm text-textPrimary hover:bg-page"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activityData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
            <CartesianGrid vertical={false} stroke="#E9ECEF" strokeDasharray="4 6" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8A92A6', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8A92A6', fontSize: 12 }}
              tickFormatter={(value) => `${value} GB`}
              domain={[30, 90]}
            />
            <Tooltip
              formatter={(value) => [`${value} GB`, 'Storage']}
              contentStyle={{
                borderRadius: 10,
                border: '1px solid #E9ECEF',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            />
            <Line
              type="monotone"
              dataKey="storageGb"
              stroke="#3A57E8"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
