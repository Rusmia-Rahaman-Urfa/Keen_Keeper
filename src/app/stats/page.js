'use client';
import { useFriends } from '@/context/FriendContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function StatsPage() {
  const { timeline } = useFriends();
  
  const data = [
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ];

  const COLORS = ['#1D3D33', '#10B981', '#6366F1'];

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-8">Friendship Analytics</h1>
      <div className="bg-white p-8 rounded-3xl shadow-sm border h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={80} outerRadius={120} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}