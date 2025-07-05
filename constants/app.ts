// 環境
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// URL関連
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// アプリケーション情報
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'NO NAME';
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || '0.1.0';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'NO DESCRIPTION';
export const APP_KEYWORDS = process.env.NEXT_PUBLIC_APP_KEYWORDS?.split(',').map((keyword) => keyword.trim()) || [];
export const APP_AUTHOR = process.env.NEXT_PUBLIC_APP_AUTHOR || 'NO AUTHOR';
export const IS_INDEX = process.env.NEXT_PUBLIC_IS_INDEX === 'true' || false;
export const IS_FOLLOW = process.env.NEXT_PUBLIC_IS_FOLLOW === 'true' || false;
