import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  Eye, 
  TrendingUp, 
  Plus, 
  Video, 
  Image, 
  FileText, 
  Mic,
  Settings,
  Bell,
  Sparkles
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Earnings', value: '$12,486', change: '+12%', icon: DollarSign, color: 'from-green-400 to-emerald-500' },
    { title: 'Subscribers', value: '2,847', change: '+18%', icon: Users, color: 'from-blue-400 to-cyan-500' },
    { title: 'Total Views', value: '145K', change: '+8%', icon: Eye, color: 'from-purple-400 to-pink-500' },
    { title: 'Growth Rate', value: '24%', change: '+5%', icon: TrendingUp, color: 'from-orange-400 to-red-500' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 4000, subscribers: 240 },
    { month: 'Feb', revenue: 5500, subscribers: 300 },
    { month: 'Mar', revenue: 7200, subscribers: 450 },
    { month: 'Apr', revenue: 8900, subscribers: 580 },
    { month: 'May', revenue: 10200, subscribers: 720 },
    { month: 'Jun', revenue: 12486, subscribers: 847 }
  ];

  const contentTypes = [
    { name: 'Videos', value: 45, color: '#8B5CF6' },
    { name: 'Articles', value: 30, color: '#06B6D4' },
    { name: 'Audio', value: 15, color: '#10B981' },
    { name: 'NFTs', value: 10, color: '#F59E0B' }
  ];

  const recentContent = [
    { title: 'AI Art Creation Tutorial', type: 'Video', views: '12.5K', earnings: '$245', status: 'Published' },
    { title: 'The Future of Web3', type: 'Article', views: '8.2K', earnings: '$89', status: 'Published' },
    { title: 'Meditation Session #15', type: 'Audio', views: '5.1K', earnings: '$156', status: 'Published' },
    { title: 'Digital Landscape NFT', type: 'NFT', views: '892', earnings: '$1,200', status: 'Sold' }
  ];

  return (
    <div className="pt-16 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Creator Dashboard</h1>
              <p className="text-gray-400">Manage your content, track performance, and grow your audience</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200">
                <Settings className="h-5 w-5" />
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Create Content
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Revenue Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="revenue" fill="url(#colorGradient)" />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Content Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Content Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={contentTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {contentTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-4 mt-4">
              {contentTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }}></div>
                  <span className="text-gray-400 text-sm">{type.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Recent Content</h3>
            <button className="text-purple-400 hover:text-purple-300 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentContent.map((content, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    {content.type === 'Video' && <Video className="h-5 w-5 text-white" />}
                    {content.type === 'Article' && <FileText className="h-5 w-5 text-white" />}
                    {content.type === 'Audio' && <Mic className="h-5 w-5 text-white" />}
                    {content.type === 'NFT' && <Sparkles className="h-5 w-5 text-white" />}
                  </div>
                  <div>
                    <div className="font-medium text-white">{content.title}</div>
                    <div className="text-sm text-gray-400">{content.type} • {content.views} views</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-400">{content.earnings}</div>
                  <div className="text-sm text-gray-400">{content.status}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer">
              <Video className="h-8 w-8 text-purple-400 mb-2" />
              <h4 className="font-medium text-white mb-1">AI Video Agent</h4>
              <p className="text-sm text-gray-400">Create personalized video messages for your subscribers</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer">
              <Mic className="h-8 w-8 text-blue-400 mb-2" />
              <h4 className="font-medium text-white mb-1">Voice AI</h4>
              <p className="text-sm text-gray-400">Generate voice narrations and multi-language content</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer">
              <Sparkles className="h-8 w-8 text-yellow-400 mb-2" />
              <h4 className="font-medium text-white mb-1">Smart Analytics</h4>
              <p className="text-sm text-gray-400">AI-powered insights to optimize your content strategy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;