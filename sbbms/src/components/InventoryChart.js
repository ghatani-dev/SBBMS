import React from 'react';
import { View, Text } from 'react-native';

// Pure JS chart — no native dependencies needed (replaces victory-native for web compat)
export default function InventoryChart({ data = {}, type = 'bar', className = '' }) {
  const entries = Object.entries(data);
  if (!entries.length) return null;

  const maxVal = Math.max(...Object.values(data), 1);

  // Color map for blood groups
  const COLORS = {
    'O+': '#C62828', 'O-': '#8B0000',
    'A+': '#1565C0', 'A-': '#0D47A1',
    'B+': '#2E7D32', 'B-': '#1B5E20',
    'AB+': '#6A1B9A', 'AB-': '#4A148C',
  };

  if (type === 'pie') {
    // Simple colour-coded grid for pie-like display
    return (
      <View className={`${className}`}>
        <Text className="text-lg font-bold text-accent mb-3">Blood Group Summary</Text>
        <View className="flex-row flex-wrap">
          {entries.map(([group, count]) => (
            <View
              key={group}
              className="w-[23%] m-[1%] rounded-xl p-3 items-center justify-center"
              style={{ backgroundColor: COLORS[group] || '#C62828' }}
            >
              <Text className="text-white font-black text-xl">{group}</Text>
              <Text className="text-white font-bold text-lg mt-1">{count}</Text>
              <Text className="text-white opacity-80 text-xs">units</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  // Bar chart
  return (
    <View className={`${className}`}>
      <Text className="text-lg font-bold text-accent mb-3">Inventory Levels</Text>
      <View className="flex-row items-end justify-around h-40 bg-white rounded-xl p-3 border border-gray-200">
        {entries.map(([group, count]) => {
          const barHeight = Math.max((count / maxVal) * 100, 4);
          return (
            <View key={group} className="items-center flex-1 mx-0.5">
              <Text className="text-xs text-accent font-bold mb-1">{count}</Text>
              <View
                style={{
                  height: `${barHeight}%`,
                  backgroundColor: COLORS[group] || '#C62828',
                  borderRadius: 4,
                  width: '80%',
                }}
              />
              <Text className="text-xs text-gray-500 mt-1">{group}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
