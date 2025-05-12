import { google } from 'googleapis';

// Utility function to get Google Sheets data
export async function getSheetData() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1', // Adjust sheet name as needed
    });

    return response.data.values || [];
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return [];
  }
}

// Transform raw sheet data into dashboard-friendly format
export function processSheetData(data: string[][]) {
  // Implement data transformation logic based on your Google Sheet structure
  // This is a placeholder and should be customized to match your actual sheet
  return {
    totalModels: 2000,
    averagePrice: 1.09,
    averageRating: 3.99,
    averageStorage: 378.30,
    sellingPlatforms: [
      { name: 'Walmart', value: 234 },
      { name: 'AliExpress', value: 247 },
      { name: 'Official Store', value: 250 },
      { name: 'Flipkart', value: 258 },
      { name: 'Amazon', value: 251 },
      { name: 'eBay', value: 260 },
      { name: 'Reliance Digital', value: 256 },
      { name: 'Best Buy', value: 244 }
    ],
    brandModels: [
      { brand: 'Samsung', models: 198 },
      { brand: 'Apple', models: 181 },
      // Add more brands as needed
    ]
  };
}
