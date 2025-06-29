# Ultimate AI-Powered Decentralized Creator Platform

A cutting-edge full-stack application that empowers digital content creators to connect with their audience, monetize their work, and engage in novel ways using advanced AI and blockchain technologies.

## 🚀 Features

- **Creator Dashboard** - Comprehensive analytics and content management
- **Subscription Tiers** - Premium content monetization with RevenueCat
- **NFT Marketplace** - Tokenized digital assets on Algorand blockchain
- **AI Video Agents** - Personalized creator interactions with Tavus
- **Voice AI Integration** - Content narration and voice commands with ElevenLabs
- **Community Features** - Reddit integration for fan engagement
- **Responsive Design** - Beautiful, production-ready interface

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Supabase (Database, Auth, Storage)
- **Blockchain**: Algorand
- **AI Services**: Tavus (Video), ElevenLabs (Voice)
- **Payments**: RevenueCat
- **Community**: Reddit API
- **Deployment**: Netlify
- **Domain**: IONOS

## 📋 Configuration Locations

### 1. Environment Variables (.env file)

**Location**: Create `.env` file in the **root directory** (same level as package.json)

```env
# Supabase (Auto-configured when you click "Connect to Supabase")
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# RevenueCat
VITE_REVENUECAT_PUBLIC_KEY=your_revenuecat_public_key
REVENUECAT_SECRET_KEY=your_revenuecat_secret_key

# Algorand
VITE_ALGORAND_NODE_URL=https://testnet-api.algonode.cloud
VITE_ALGORAND_NODE_TOKEN=
VITE_ALGORAND_INDEXER_URL=https://testnet-idx.algonode.cloud

# Tavus AI
VITE_TAVUS_API_KEY=your_tavus_api_key

# ElevenLabs
VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key

# Reddit
VITE_REDDIT_CLIENT_ID=your_reddit_client_id
REDDIT_CLIENT_SECRET=your_reddit_client_secret
VITE_REDDIT_REDIRECT_URI=https://yourdomain.com/auth/reddit/callback
```

### 2. Supabase Configuration

**Location**: Already configured in `src/lib/supabase.ts`

**Action Required**: 
1. Click "Connect to Supabase" button in Bolt interface
2. Create database tables using the SQL in the Supabase dashboard

### 3. Package.json Dependencies

**Location**: `package.json` (root directory)

**Action Required**: Add these dependencies to your existing package.json:

```json
{
  "dependencies": {
    "@revenuecat/purchases-js": "^1.0.0",
    "algosdk": "^2.7.0",
    "@tavus/tavus-js": "^1.0.0",
    "elevenlabs": "^0.4.0",
    "snoowrap": "^1.23.0"
  }
}
```

### 4. Service Configuration Files

**Location**: `src/lib/` directory

These files will contain the configuration for each service:

- `src/lib/revenuecat.ts` - RevenueCat configuration
- `src/lib/algorand.ts` - Algorand blockchain configuration  
- `src/lib/tavus.ts` - Tavus AI video configuration
- `src/lib/elevenlabs.ts` - ElevenLabs voice AI configuration
- `src/lib/reddit.ts` - Reddit API configuration

### 5. Netlify Configuration

**Location**: `netlify.toml` (root directory)

**Action Required**: Create this file for deployment settings

### 6. Database Schema

**Location**: Supabase Dashboard → SQL Editor

**Action Required**: Run the provided SQL commands in your Supabase project

## 📁 Project Structure After Configuration

```
your-project/
├── .env                          # Environment variables
├── netlify.toml                  # Netlify deployment config
├── package.json                  # Dependencies (updated)
├── src/
│   ├── lib/
│   │   ├── supabase.ts          # Already exists
│   │   ├── revenuecat.ts        # RevenueCat config
│   │   ├── algorand.ts          # Algorand config
│   │   ├── tavus.ts             # Tavus AI config
│   │   ├── elevenlabs.ts        # ElevenLabs config
│   │   └── reddit.ts            # Reddit API config
│   ├── components/              # Existing components
│   └── pages/                   # Existing pages
└── supabase/                    # Database migrations (optional)
    └── migrations/
```

## 🔧 Step-by-Step Setup

### Step 1: Environment Variables
1. Create `.env` file in root directory
2. Add the environment variables shown above
3. Replace placeholder values with your actual API keys

### Step 2: Supabase Setup
1. Click "Connect to Supabase" in Bolt interface
2. Go to your Supabase dashboard
3. Navigate to SQL Editor
4. Run the database schema SQL provided below

### Step 3: Install Dependencies
1. The dependencies will be auto-installed when package.json is updated
2. Or run `npm install` manually

### Step 4: Service Configurations
1. Create the service configuration files in `src/lib/`
2. Each file will contain the setup for that specific service

### Step 5: Netlify Deployment
1. Create `netlify.toml` in root directory
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard

## 📊 Database Schema (Run in Supabase SQL Editor)

```sql
-- Creators table
CREATE TABLE IF NOT EXISTS creators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  avatar TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Content table
CREATE TABLE IF NOT EXISTS content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES creators(id),
  title TEXT NOT NULL,
  description TEXT,
  type TEXT CHECK (type IN ('video', 'article', 'audio', 'nft')),
  price DECIMAL,
  is_premium BOOLEAN DEFAULT FALSE,
  thumbnail TEXT,
  content_url TEXT,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES creators(id),
  subscriber_id UUID REFERENCES creators(id),
  tier TEXT NOT NULL,
  price DECIMAL NOT NULL,
  status TEXT CHECK (status IN ('active', 'cancelled', 'expired')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- NFTs table
CREATE TABLE IF NOT EXISTS nfts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES creators(id),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  price DECIMAL NOT NULL,
  currency TEXT DEFAULT 'ALGO',
  rarity TEXT,
  status TEXT CHECK (status IN ('available', 'sold', 'reserved')),
  blockchain_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE creators ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfts ENABLE ROW LEVEL SECURITY;

-- Basic RLS policies (customize as needed)
CREATE POLICY "Users can read all creators" ON creators FOR SELECT USING (true);
CREATE POLICY "Users can read all content" ON content FOR SELECT USING (true);
CREATE POLICY "Users can read all nfts" ON nfts FOR SELECT USING (true);
```

## 🔑 Where to Get API Keys

### RevenueCat
1. Go to [RevenueCat Dashboard](https://app.revenuecat.com/)
2. Create account → Create project
3. Go to API Keys section
4. Copy Public Key for `VITE_REVENUECAT_PUBLIC_KEY`

### Algorand
1. Visit [AlgoNode](https://algonode.io/) (free API access)
2. Use provided endpoints (no API key needed for basic usage)
3. For advanced features, sign up at [Algorand Developer Portal](https://developer.algorand.org/)

### Tavus AI
1. Sign up at [Tavus.io](https://www.tavus.io/)
2. Go to Dashboard → API Keys
3. Generate new API key for `VITE_TAVUS_API_KEY`

### ElevenLabs
1. Create account at [ElevenLabs.io](https://elevenlabs.io/)
2. Go to Profile → API Key
3. Copy key for `VITE_ELEVENLABS_API_KEY`

### Reddit API
1. Go to [Reddit Apps](https://www.reddit.com/prefs/apps)
2. Click "Create App" → Choose "web app"
3. Set redirect URI to your domain
4. Copy client ID and secret

### IONOS Domain
1. Purchase domain at [IONOS.com](https://www.ionos.com/)
2. Configure DNS in IONOS dashboard
3. Point to Netlify servers

## 🚀 Quick Start Commands

```bash
# 1. Install dependencies (after updating package.json)
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## ⚠️ Important Notes

- **Environment Variables**: All `VITE_` prefixed variables are exposed to the frontend
- **Secret Keys**: Never put secret keys in `VITE_` variables
- **Supabase**: Connection is handled automatically when you click "Connect to Supabase"
- **Development**: Use testnet/sandbox modes for all services during development
- **Production**: Switch to production endpoints before deploying

## 🆘 Troubleshooting

### Common Issues:
1. **Environment variables not loading**: Restart dev server after adding .env
2. **Supabase connection failed**: Ensure you clicked "Connect to Supabase" button
3. **API key errors**: Verify keys are correct and have proper permissions
4. **Build failures**: Check all dependencies are installed correctly

### Getting Help:
- Check service documentation for each API
- Verify API key permissions and quotas
- Ensure environment variables are properly set
- Test each service integration individually

---

**Next Steps**: After setting up these configurations, you'll have a fully functional creator platform with all the advanced features integrated!