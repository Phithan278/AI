import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { 
  Users, 
  Eye, 
  Heart, 
  Share2, 
  Play, 
  Download, 
  Star,
  Crown,
  Zap,
  MessageCircle,
  Calendar,
  Award
} from 'lucide-react';

const CreatorProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('content');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const creator = {
    name: 'DigitalDreamer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    cover: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bio: 'AI artist pushing the boundaries of digital creativity. Specializing in generative art, voice synthesis, and blockchain innovation.',
    subscribers: 15420,
    totalViews: '2.4M',
    joinedDate: 'January 2023',
    verified: true,
    tier: 'Legendary',
    nftsCreated: 247,
    totalEarnings: '₳ 45,892'
  };

  const subscriptionTiers = [
    {
      name: 'Supporter',
      price: '₳ 5',
      description: 'Access to exclusive posts and early content',
      benefits: ['Exclusive posts', 'Early access', 'Creator updates']
    },
    {
      name: 'Premium',
      price: '₳ 15',
      description: 'All supporter benefits plus premium content',
      benefits: ['All Supporter benefits', 'Premium tutorials', 'Direct messaging', 'Monthly video calls']
    },
    {
      name: 'VIP',
      price: '₳ 50',
      description: 'Ultimate access with personalized content',
      benefits: ['All Premium benefits', 'Custom AI art requests', '1-on-1 mentoring', 'Exclusive NFT drops']
    }
  ];

  const content = [
    {
      id: 1,
      title: 'AI Art Generation Tutorial',
      type: 'Video',
      thumbnail: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '15:32',
      views: 45200,
      likes: 1234,
      price: 'Free',
      isPremium: false
    },
    {
      id: 2,
      title: 'Voice Synthesis Masterclass',
      type: 'Course',
      thumbnail: 'https://images.pexels.com/photos/7915214/pexels-photo-7915214.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2h 45m',
      views: 23100,
      likes: 892,
      price: '₳ 25',
      isPremium: true
    },
    {
      id: 3,
      title: 'Cosmic Dreams Collection',
      type: 'NFT',
      thumbnail: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 8900,
      likes: 567,
      price: '₳ 12.5',
      isPremium: false
    },
    {
      id: 4,
      title: 'Advanced AI Techniques',
      type: 'Article',
      thumbnail: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '8 min read',
      views: 15600,
      likes: 423,
      price: 'Premium',
      isPremium: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video': return Play;
      case 'Course': return Award;
      case 'NFT': return Zap;
      case 'Article': return MessageCircle;
      default: return Eye;
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Cover Image */}
      <div className="relative h-64 sm:h-80 lg:h-96">
        <img
          src={creator.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-20 sm:-mt-24 lg:-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
              <div className="relative">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-4 border-white/20"
                />
                {creator.verified && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Crown className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl sm:text-3xl font-bold text-white">{creator.name}</h1>
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-medium rounded-full">
                        {creator.tier}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-2 max-w-2xl">{creator.bio}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubscribed(!isSubscribed)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isSubscribed
                          ? 'bg-white/20 text-white hover:bg-white/30'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      }`}
                    >
                      {isSubscribed ? 'Subscribed' : 'Subscribe'}
                    </motion.button>
                    <button className="p-3 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{creator.subscribers.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{creator.totalViews}</div>
                    <div className="text-gray-400 text-sm">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{creator.nftsCreated}</div>
                    <div className="text-gray-400 text-sm">NFTs Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{creator.totalEarnings}</div>
                    <div className="text-gray-400 text-sm">Total Earnings</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subscription Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Subscription Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionTiers.map((tier, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{tier.price}</div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <Star className="h-4 w-4 text-yellow-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content Tabs */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'content', label: 'Content' },
              { id: 'nfts', label: 'NFTs' },
              { id: 'about', label: 'About' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          {activeTab === 'content' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.map((item, index) => {
                const IconComponent = getTypeIcon(item.type);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        {item.isPremium && (
                          <Crown className="h-5 w-5 text-yellow-400" />
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 text-white text-sm">
                        {item.duration || item.readTime}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2 line-clamp-2">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {item.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {item.likes}
                          </div>
                        </div>
                        <div className="font-medium text-purple-400">{item.price}</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                      >
                        {item.isPremium ? 'Premium Access' : 'View Content'}
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {activeTab === 'about' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">About {creator.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {creator.bio} I've been creating digital art for over 5 years and have recently embraced AI tools to push the boundaries of what's possible in creative expression. My work spans from traditional digital painting to cutting-edge AI generation, voice synthesis, and blockchain-based NFTs.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>Joined {creator.joinedDate}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;