'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchFriendById } from '@/lib/mock-data';
import { Bell, Archive, Trash2, Phone, MessageSquare, Video } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { addInteraction } from '@/app/actions';

export default function FriendProfile() {
  const params = useParams();
  const router = useRouter();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (typeof params.id === 'string') {
        const data = await fetchFriendById(params.id);
        if (data) {
          setFriend(data);
        }
      }
      setLoading(false);
    }
    load();
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center">
        <div className="w-16 h-16 border-4 border-[#2d5a45]/20 border-t-[#2d5a45] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Friend not found</h2>
        <button onClick={() => router.push('/')} className="text-[#2d5a45] hover:underline">
          Return Home
        </button>
      </div>
    );
  }

  const handleAction = async (action) => {
    toast.success(`Interaction added to timeline!`, {
      icon: action === 'call' ? '📞' : action === 'text' ? '💬' : '🎥',
      duration: 3000,
    });
    
    await addInteraction(friend.id, friend.name, friend.avatar, action);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Left Column */}
        <div className="w-full md:w-[320px] flex-shrink-0 flex flex-col gap-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
            </div>
            
            <h1 className="text-[22px] font-bold text-[#1a202c] mb-3">{friend.name}</h1>
            
            <span className={cn(
              "px-3 py-1 rounded-full text-[11px] font-medium text-white mb-2",
              friend.status === 'On-Track' && "bg-[#2d5a45]",
              friend.status === 'Almost Due' && "bg-[#eab308]",
              friend.status === 'Overdue' && "bg-[#ef4444]"
            )}>
              {friend.status}
            </span>
            
            <div className="flex gap-2 justify-center mb-6">
              {friend.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#cdedd9] text-[#2d5a45] uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 italic text-[14px] mb-2 leading-snug">
              {friend.quote}
            </p>
            <p className="text-gray-400 text-[12px]">
              Preferred: {friend.preferredContact}
            </p>
          </div>

          <button className="w-full bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm text-sm font-semibold text-[#1a202c]">
            <Bell size={18} className="text-gray-600" />
            Snooze 2 Weeks
          </button>
          
          <button className="w-full bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm text-sm font-semibold text-[#1a202c]">
            <Archive size={18} className="text-gray-600" />
            Archive
          </button>
          
          <button className="w-full bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors shadow-sm text-sm font-semibold text-red-500">
            <Trash2 size={18} className="text-red-500" />
            Delete
          </button>
        </div>

        {/* Right Column */}
        <div className="flex-grow flex flex-col gap-6">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-6 text-center">
              <h3 className="text-3xl font-bold text-[#2d5a45] mb-2">{friend.daysSinceContact}</h3>
              <p className="text-[#64748b] text-[13px]">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-6 text-center">
              <h3 className="text-3xl font-bold text-[#2d5a45] mb-2">{friend.goalDays}</h3>
              <p className="text-[#64748b] text-[13px]">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-6 text-center">
              <h3 className="text-[22px] md:text-[26px] font-bold text-[#2d5a45] mb-2 whitespace-nowrap">{friend.nextDue}</h3>
              <p className="text-[#64748b] text-[13px]">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[17px] font-bold text-[#2d5a45]">Relationship Goal</h2>
              <button className="bg-[#f1f5f9] text-gray-700 hover:bg-[#e2e8f0] px-4 py-1.5 rounded-md text-[13px] font-medium transition-colors">
                Edit
              </button>
            </div>
            <p className="text-[15px] text-[#475569]">
              Connect every <span className="font-bold text-[#1e293b]">{friend.goalDays} days</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-[17px] font-bold text-[#2d5a45] mb-6">Quick Check-In</h2>
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => handleAction('call')}
                className="bg-[#f8fafc] border border-gray-100 hover:border-[#cbd5e1] hover:bg-white rounded-xl py-6 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer"
              >
                <Phone size={24} className="text-[#334155] stroke-[1.5]" />
                <span className="text-[14px] font-medium text-[#334155]">Call</span>
              </button>
              
              <button 
                onClick={() => handleAction('text')}
                className="bg-[#f8fafc] border border-gray-100 hover:border-[#cbd5e1] hover:bg-white rounded-xl py-6 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer"
              >
                <MessageSquare size={24} className="text-[#334155] stroke-[1.5]" />
                <span className="text-[14px] font-medium text-[#334155]">Text</span>
              </button>

              <button 
                onClick={() => handleAction('video')}
                className="bg-[#f8fafc] border border-gray-100 hover:border-[#cbd5e1] hover:bg-white rounded-xl py-6 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer"
              >
                <Video size={24} className="text-[#334155] stroke-[1.5]" />
                <span className="text-[14px] font-medium text-[#334155]">Video</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
