import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for the database
export interface Creator {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

export interface Content {
  id: string;
  creator_id: string;
  title: string;
  description?: string;
  type: 'video' | 'article' | 'audio' | 'nft';
  price?: number;
  is_premium: boolean;
  thumbnail?: string;
  content_url?: string;
  views: number;
  likes: number;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  creator_id: string;
  subscriber_id: string;
  tier: string;
  price: number;
  status: 'active' | 'cancelled' | 'expired';
  created_at: string;
  updated_at: string;
}

export interface NFT {
  id: string;
  creator_id: string;
  title: string;
  description?: string;
  image_url: string;
  price: number;
  currency: string;
  rarity: string;
  status: 'available' | 'sold' | 'reserved';
  blockchain_hash?: string;
  created_at: string;
  updated_at: string;
}