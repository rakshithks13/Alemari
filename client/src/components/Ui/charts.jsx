import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts"

import { Card, CardHeader, CardTitle, CardContent } from "./Card"

const COLORS = ["#10B981", "#F59E0B", "#EF4444", "#6366F1"]

const ChartContainer = ({ title, data = [] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-400 text-center py-12">No data available</p>
        )}
      </CardContent>
    </Card>
  )
}

const ChartTooltip = Tooltip
const ChartTooltipContent = () => null

export { ChartContainer, ChartTooltip, ChartTooltipContent }
