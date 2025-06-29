# Configuration Checklist

Use this checklist to ensure all services are properly configured.

## ✅ Configuration Steps

### 1. Environment Variables
- [ ] Created `.env` file in root directory
- [ ] Copied variables from `.env.example`
- [ ] Replaced placeholder values with actual API keys

### 2. Supabase Setup
- [ ] Clicked "Connect to Supabase" button in Bolt interface
- [ ] Verified `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- [ ] Ran database schema SQL in Supabase dashboard
- [ ] Verified tables are created: `creators`, `content`, `subscriptions`, `nfts`

### 3. RevenueCat (Subscription Management)
- [ ] Created account at [RevenueCat](https://app.revenuecat.com/)
- [ ] Created new project
- [ ] Copied Public Key to `VITE_REVENUECAT_PUBLIC_KEY`
- [ ] Copied Secret Key to `REVENUECAT_SECRET_KEY`

### 4. Algorand Blockchain
- [ ] Set `VITE_ALGORAND_NODE_URL` to testnet URL
- [ ] Set `VITE_ALGORAND_INDEXER_URL` to testnet indexer
- [ ] (Optional) Created Algorand developer account for advanced features

### 5. Tavus AI (Video Agents)
- [ ] Created account at [Tavus.io](https://www.tavus.io/)
- [ ] Generated API key from dashboard
- [ ] Set `VITE_TAVUS_API_KEY`

### 6. ElevenLabs (Voice AI)
- [ ] Created account at [ElevenLabs.io](https://elevenlabs.io/)
- [ ] Copied API key from profile
- [ ] Set `VITE_ELEVENLABS_API_KEY`

### 7. Reddit API (Community Features)
- [ ] Created Reddit app at [Reddit Apps](https://www.reddit.com/prefs/apps)
- [ ] Set app type to "web app"
- [ ] Configured redirect URI
- [ ] Set `VITE_REDDIT_CLIENT_ID` and `REDDIT_CLIENT_SECRET`

### 8. IONOS Domain (Custom Domain)
- [ ] Purchased domain from [IONOS](https://www.ionos.com/)
- [ ] Configured DNS settings
- [ ] Added CNAME record for www
- [ ] Added A record for root domain

### 9. Netlify Deployment
- [ ] Created `netlify.toml` file
- [ ] Connected repository to Netlify
- [ ] Added all environment variables in Netlify dashboard
- [ ] Configured custom domain in Netlify

### 10. Dependencies
- [ ] Updated `package.json` with new dependencies
- [ ] Ran `npm install` to install packages
- [ ] Verified all packages installed successfully

## 🔧 Testing Configuration

### Local Development
- [ ] `npm run dev` starts without errors
- [ ] Environment variables are loaded correctly
- [ ] Supabase connection works
- [ ] No console errors related to missing configurations

### Production Build
- [ ] `npm run build` completes successfully
- [ ] All environment variables are available in build
- [ ] No build warnings about missing configurations

## 📋 File Locations Summary

```
your-project/
├── .env                     ✅ Environment variables
├── .env.example            ✅ Environment template
├── netlify.toml            ✅ Netlify configuration
├── package.json            ✅ Dependencies (updated)
├── CONFIGURATION_CHECKLIST.md ✅ This checklist
├── src/
│   ├── lib/
│   │   ├── config.ts       ✅ Centralized configuration
│   │   └── supabase.ts     ✅ Already exists
│   └── ...
└── README.md               ✅ Updated with instructions
```

## 🚨 Common Issues & Solutions

### Environment Variables Not Loading
- **Issue**: Variables not available in app
- **Solution**: Restart dev server after adding .env file
- **Check**: Ensure variables start with `VITE_` for frontend access

### Supabase Connection Failed
- **Issue**: Cannot connect to Supabase
- **Solution**: Click "Connect to Supabase" button in Bolt interface
- **Check**: Verify URL and key are correct in .env

### API Key Errors
- **Issue**: 401/403 errors from APIs
- **Solution**: Verify API keys are correct and active
- **Check**: Ensure keys have proper permissions

### Build Failures
- **Issue**: Build fails with dependency errors
- **Solution**: Run `npm install` to install all dependencies
- **Check**: Verify all packages in package.json are available

### Deployment Issues
- **Issue**: App doesn't work after deployment
- **Solution**: Add all environment variables to Netlify dashboard
- **Check**: Ensure production URLs are used for APIs

## 🎯 Next Steps After Configuration

1. **Test Each Service**: Verify each integration works individually
2. **Implement Features**: Start building the actual functionality
3. **Add Error Handling**: Implement proper error handling for each service
4. **Security Review**: Ensure all API keys and secrets are properly secured
5. **Performance Optimization**: Optimize API calls and loading times
6. **User Testing**: Test the complete user flow
7. **Production Deployment**: Deploy to production with production API keys

## 📞 Support Resources

- **Supabase**: [Documentation](https://supabase.com/docs)
- **RevenueCat**: [Documentation](https://docs.revenuecat.com/)
- **Algorand**: [Developer Portal](https://developer.algorand.org/)
- **Tavus**: [API Documentation](https://docs.tavus.io/)
- **ElevenLabs**: [API Reference](https://docs.elevenlabs.io/)
- **Reddit**: [API Documentation](https://www.reddit.com/dev/api/)
- **Netlify**: [Documentation](https://docs.netlify.com/)

---

**Remember**: Keep your API keys secure and never commit them to version control!