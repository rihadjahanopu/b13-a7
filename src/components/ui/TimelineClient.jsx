'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function TimelineClient({ initialInteractions }) {
  const [filter, setFilter] = useState('All');

  const filteredInteractions = initialInteractions.filter(interaction => {
    if (filter === 'All') return true;
    if (filter === 'Meetups') return interaction.type === 'meetup';
    if (filter === 'Calls') return interaction.type === 'call';
    if (filter === 'Texts') return interaction.type === 'text';
    if (filter === 'Videos') return interaction.type === 'video';
    return true;
  });

  const getEmoji = (type) => {
    switch (type) {
      case 'call': return '📞';
      case 'text': return '💬';
      case 'video': return '📹';
      case 'meetup': return '🤝';
      default: return '💬';
    }
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-[#1a202c] mb-6 tracking-tight">Timeline</h1>
      
      <div className="mb-10">
        <div className="relative inline-block w-48">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-full appearance-none bg-white border border-gray-200 text-sm rounded-md px-4 py-2.5 text-gray-700 outline-none focus:border-brand-500 shadow-sm cursor-pointer"
          >
            <option value="All">Filter timeline</option>
            <option value="Meetups">Meetups</option>
            <option value="Calls">Calls</option>
            <option value="Texts">Texts</option>
            <option value="Videos">Videos</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredInteractions.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No interactions found for this filter.
          </div>
        ) : (
          filteredInteractions.map((interaction) => (
            <div 
              key={interaction.id} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex items-center gap-4 transition-colors hover:border-gray-200"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-2xl">
                {getEmoji(interaction.type)}
              </div>
              
              <div className="flex-grow">
                <p className="text-[15px] text-[#1a202c]">
                  <span className="font-semibold">{capitalize(interaction.type)}</span>
                  <span className="text-gray-500 mx-1">with</span>
                  <Link href={`/friend/${interaction.friendId}`} className="text-[#64748b] hover:text-[#2d5a45] transition-colors">
                    {interaction.friendName}
                  </Link>
                </p>
                <p className="text-[#64748b] text-[13px] mt-0.5 font-medium">
                  {interaction.date}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
