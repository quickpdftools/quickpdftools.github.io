# QuickPDFTools 🚀

Free online PDF tools website — built for GitHub Pages deployment.

## 🚀 How to Deploy on GitHub Pages

### Step 1: Create GitHub Account & Repository
1. Go to [github.com](https://github.com) and sign up / log in
2. Click **"New repository"**
3. Name it: `quickpdftools` (your URL will be `yourusername.github.io/quickpdftools`)
   - OR name it `yourusername.github.io` for root URL (recommended!)
4. Set to **Public**
5. Click **Create repository**

### Step 2: Upload Files
**Option A – GitHub Web UI (easiest):**
1. Open your new repo
2. Click **"uploading an existing file"**
3. Drag ALL files and folders from this zip into the upload area
4. Click **"Commit changes"**

**Option B – Git CLI:**
```bash
git init
git add .
git commit -m "Initial commit – QuickPDFTools"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **main** branch, **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://YOURUSERNAME.github.io` in ~2 minutes!

---

## 💰 AdSense Setup (Get Monetized!)

### Step 1: Apply for AdSense
1. Go to [adsense.google.com](https://adsense.google.com)
2. Sign up with your Google account
3. Enter your website URL: `https://yourusername.github.io`
4. Submit for review

### Step 2: Add AdSense Code
Once approved, Google gives you a code like:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

Add this to the `<head>` section of every HTML file (index.html, all tool pages).

### Step 3: Replace Ad Placeholders
Find all `<div class="ad-placeholder">Advertisement</div>` in the HTML files and replace with:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### AdSense Approval Tips
- ✅ Privacy Policy page: `privacy.html` (already included)
- ✅ Terms of Service: `terms.html` (already included)
- ✅ About page: `about.html` (already included)
- ✅ Contact page: `contact.html` (already included)
- ✅ Original content on all pages
- ✅ Sitemap: `sitemap.xml` (already included)
- ✅ robots.txt (already included)
- Add some blog posts to `blog.html` for more content
- Wait 2-4 weeks after site is live before applying

---

## 🔍 SEO Tips (Rank on Google!)

### Submit Sitemap to Google
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Go to **Sitemaps** → Submit `https://yourusername.github.io/sitemap.xml`

### Submit to Bing
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site and submit sitemap

### Build Backlinks
- Share on Reddit (r/webdev, r/productivity, r/pdf)
- Post on Product Hunt
- Share on Twitter/X and LinkedIn
- Create YouTube videos showing the tools

---

## 📁 File Structure
```
/
├── index.html          ← Homepage
├── about.html
├── privacy.html        ← Required for AdSense!
├── terms.html
├── contact.html
├── sitemap.xml         ← Submit to Google!
├── robots.txt
├── css/
│   └── style.css
├── js/
│   └── main.js
└── tools/
    ├── merge-pdf.html  ← FULLY WORKING
    ├── split-pdf.html  ← FULLY WORKING
    ├── compress-pdf.html ← FULLY WORKING
    ├── rotate-pdf.html ← FULLY WORKING
    ├── jpg-to-pdf.html ← FULLY WORKING
    └── ... (stubs for remaining tools)
```

## 🛠️ Tools Status
| Tool | Status |
|------|--------|
| Merge PDF | ✅ Fully Working |
| Split PDF | ✅ Fully Working |
| Compress PDF | ✅ Fully Working |
| Rotate PDF | ✅ Fully Working |
| JPG to PDF | ✅ Fully Working |
| All others | 🔧 Page exists, needs JS implementation |

---

Built with ❤️ using PDF-lib.js — no server required.
