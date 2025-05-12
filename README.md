# Mobile Sales Dashboard

## Prerequisites
- Node.js (v18+)
- Google Cloud Project
- Google Sheets API enabled
- Vercel Account

## Setup Instructions

### 1. Google Cloud Setup
1. Create a new Google Cloud Project
2. Enable Google Sheets API
3. Create a service account
4. Generate and download a JSON key file

### 2. Prepare Google Sheet
- Create a Google Sheet with your mobile sales data
- Structure your data similarly to the example dashboard
- Share the sheet with the service account email

### 3. Local Development
1. Clone the repository
```bash
git clone https://github.com/yourusername/mobile-sales-dashboard.git
cd mobile-sales-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` file
```
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email
GOOGLE_SHEETS_PRIVATE_KEY=your-private-key-from-json
GOOGLE_SHEET_ID=your-google-sheet-id
```

4. Run development server
```bash
npm run dev
```

### 4. Deployment to Vercel
1. Push your code to GitHub
2. Connect Vercel to your GitHub repository
3. Set environment variables in Vercel project settings
   - GOOGLE_SHEETS_CLIENT_EMAIL
   - GOOGLE_SHEETS_PRIVATE_KEY
   - GOOGLE_SHEET_ID

4. Deploy!

## Customization
- Modify `lib/sheets.ts` to match your Google Sheet structure
- Adjust dashboard components in `components/Dashboard.tsx`

## Technologies
- Next.js
- React
- Recharts
- Tailwind CSS
- Google Sheets API
