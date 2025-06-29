import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Filter, 
  Search, 
  Heart, 
  Share2, 
  Eye,
  Zap,
  TrendingUp,
  Star
} from 'lucide-react';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', count: 1247 },
    { id: 'art', name: 'Digital Art', count: 523 },
    { id: 'music', name: 'Music', count: 312 },
    { id: 'video', name: 'Video', count: 198 },
    { id: 'writing', name: 'Writing', count: 156 },
    { id: 'photography', name: 'Photography', count: 98 }
  ];

  const nfts = [
    {
      id: 1,
      title: 'Cosmic Dreams #001',
      creator: 'ArtistAI',
      price: '2.5 ALGO',
      usdPrice: '$485',
      image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'art',
      likes: 234,
      views: 1547,
      rarity: 'Rare'
    },
    {
      id: 2,
      title: 'Synthwave Vibes',
      creator: 'MusicMaker',
      price: '1.8 ALGO',
      usdPrice: '$350',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'music',
      likes: 189,
      views: 892,
      rarity: 'Epic'
    },
    {
      id: 3,
      title: 'Urban Landscape',
      creator: 'PhotoPro',
      price: '3.2 ALGO',
      usdPrice: '$622',
      image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'photography',
      likes: 345,
      views: 2103,
      rarity: 'Legendary'
    },
    {
      id: 4,
      title: 'AI Generated Story',
      creator: 'WordWeaver',
      price: '0.9 ALGO',
      usdPrice: '$175',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'writing',
      likes: 156,
      views: 634,
      rarity: 'Common'
    },
    {
      id: 5,
      title: 'Motion Graphics Pack',
      creator: 'VideoVision',
      price: '4.1 ALGO',
      usdPrice: '$798',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'video',
      likes: 278,
      views: 1892,
      rarity: 'Epic'
    },
    {
      id: 6,
      title: 'Abstract Composition',
      creator: 'DigitalDreamer',
      price: '2.1 ALGO',
      usdPrice: '$408',
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'art',
      likes: 198,
      views: 1234,
      rarity: 'Rare'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400 bg-gray-400/20';
      case 'Rare': return 'text-blue-400 bg-blue-400/20';
      case 'Epic': return 'text-purple-400 bg-purple-400/20';
      case 'Legendary': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const filteredNFTs = nfts.filter(nft => 
    (selectedCategory === 'all' || nft.category === selectedCategory) &&
    (searchTerm === '' || nft.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     nft.creator.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-16 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              NFT Marketplace
              <Sparkles className="inline-block ml-2 h-8 w-8 text-yellow-400" />
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover, collect, and trade unique digital assets created by talented creators worldwide
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search NFTs or creators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white hover:bg-white/20 transition-all duration-200 flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Trending Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              <h2 className="text-xl font-semibold text-white">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">₳ 2.8M</div>
                <div className="text-gray-400 text-sm">Total Volume</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">12.5K</div>
                <div className="text-gray-400 text-sm">Active Traders</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">₳ 3.2</div>
                <div className="text-gray-400 text-sm">Avg. Price</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(nft.rarity)}`}>
                    {nft.rarity}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{nft.views}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{nft.likes}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white truncate">{nft.title}</h3>
                  <button className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200">
                    <Share2 className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <span className="text-gray-400 text-sm">{nft.creator}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">{nft.price}</div>
                    <div className="text-gray-400 text-sm">{nft.usdPrice}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center gap-2"
                  >
                    <Zap className="h-4 w-4" />
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button className="bg-white/10 border border-white/10 rounded-lg px-8 py-3 text-white hover:bg-white/20 transition-all duration-200">
            Load More NFTs
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Marketplace;