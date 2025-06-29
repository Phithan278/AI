import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Award, 
  Zap, 
  TrendingUp, 
  Heart, 
  Share2, 
  Camera,
  Trophy,
  Star,
  Gamepad2
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('challenges');

  const challenges = [
    {
      id: 1,
      title: 'AI Art Revolution',
      description: 'Create stunning AI-generated artwork using the latest tools',
      prize: '500 ALGO',
      participants: 847,
      deadline: '5 days left',
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Voice AI Storytelling',
      description: 'Craft compelling stories using AI voice generation',
      prize: '300 ALGO',
      participants: 432,
      deadline: '12 days left',
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/7915214/pexels-photo-7915214.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Decentralized Music',
      description: 'Compose and tokenize original music on the blockchain',
      prize: '750 ALGO',
      participants: 623,
      deadline: '3 days left',
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'CryptoArtist', points: 2847, avatar: '🎨', badge: 'Legendary' },
    { rank: 2, name: 'AIVoicemaster', points: 2341, avatar: '🎵', badge: 'Epic' },
    { rank: 3, name: 'BlockchainBard', points: 1923, avatar: '📝', badge: 'Epic' },
    { rank: 4, name: 'NFTPhotographer', points: 1654, avatar: '📸', badge: 'Rare' },
    { rank: 5, name: 'MetaverseMaker', points: 1432, avatar: '🌐', badge: 'Rare' }
  ];

  const recentPosts = [
    {
      id: 1,
      author: 'DigitalDreamer',
      avatar: '🎨',
      content: 'Just minted my first AI-generated NFT! The future of art is here 🚀',
      image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 234,
      comments: 45,
      timeAgo: '2h ago'
    },
    {
      id: 2,
      author: 'VoiceAI_Pro',
      avatar: '🎤',
      content: 'Created a multilingual podcast using ElevenLabs. The quality is mind-blowing!',
      likes: 189,
      comments: 32,
      timeAgo: '4h ago'
    },
    {
      id: 3,
      author: 'CommunityBuilder',
      avatar: '👥',
      content: 'Excited to see our creator community growing! 50K members and counting 🎉',
      likes: 567,
      comments: 89,
      timeAgo: '6h ago'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Legendary': return 'text-yellow-400 bg-yellow-400/20';
      case 'Epic': return 'text-purple-400 bg-purple-400/20';
      case 'Rare': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="pt-16 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Creator Community
            <Users className="inline-block ml-2 h-8 w-8 text-purple-400" />
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join challenges, share your work, and connect with fellow creators in our vibrant community
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Members', value: '50.2K', icon: Users, color: 'from-blue-400 to-cyan-500' },
            { label: 'Total Challenges', value: '1,247', icon: Trophy, color: 'from-purple-400 to-pink-500' },
            { label: 'Rewards Distributed', value: '₳ 125K', icon: Award, color: 'from-green-400 to-emerald-500' },
            { label: 'Posts Today', value: '892', icon: MessageCircle, color: 'from-orange-400 to-red-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'challenges', label: 'Active Challenges', icon: Gamepad2 },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
            { id: 'feed', label: 'Community Feed', icon: MessageCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'challenges' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-white">Active Challenges</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Create Challenge
                  </motion.button>
                </div>
                
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="md:flex">
                      <div className="md:w-48 h-48 md:h-auto">
                        <img
                          src={challenge.image}
                          alt={challenge.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold text-white">{challenge.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-4">{challenge.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4" />
                              {challenge.prize}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {challenge.participants} participants
                            </div>
                            <div>{challenge.deadline}</div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium"
                          >
                            Join Challenge
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Community Leaderboard</h2>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <motion.div
                      key={user.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                            user.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
                            user.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-yellow-600' :
                            'bg-gradient-to-r from-purple-500 to-pink-500'
                          } text-white`}>
                            {user.rank}
                          </div>
                          <div className="text-2xl">{user.avatar}</div>
                          <div>
                            <div className="font-semibold text-white">{user.name}</div>
                            <div className="text-sm text-gray-400">{user.points} points</div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(user.badge)}`}>
                          {user.badge}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'feed' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Community Feed</h2>
                <div className="space-y-6">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-lg">
                          {post.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{post.author}</div>
                          <div className="text-sm text-gray-400">{post.timeAgo}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{post.content}</p>
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                      )}
                      <div className="flex items-center gap-6 text-gray-400">
                        <button className="flex items-center gap-2 hover:text-red-400 transition-colors duration-200">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200">
                          <Share2 className="h-4 w-4" />
                          Share
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Trending Topics
              </h3>
              <div className="space-y-3">
                {['#AIArt', '#VoiceAI', '#NFTCreator', '#BlockchainMusic', '#MetaverseArt'].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer">
                    <span className="text-purple-400 font-medium">{topic}</span>
                    <span className="text-gray-400 text-sm">{Math.floor(Math.random() * 500) + 100}K</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reddit Integration */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Reddit Community</h3>
              <p className="text-gray-400 mb-4">Join our Reddit community for more discussions and fan art submissions!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Join r/CreatorAI
              </motion.button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Share Your Work
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Rate Content
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Start Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;