const fs = require('fs');
const path = require('path');

// Read the article data
const articleData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../article-data/automated-persona-discovery-article.json'),
    'utf8'
  )
);

// Prepare the payload
const payload = {
  ...articleData,
  date: new Date().toISOString().split('T')[0],
  relatedArticleIds: []
};

// Post to the API
async function createArticle() {
  try {
    const response = await fetch('http://localhost:3000/api/articles/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Success! Article created:', data);
      console.log('📝 Article ID:', data.id);
      console.log('🔗 Slug:', data.slug);

      // Save the article ID for reference
      fs.writeFileSync(
        path.join(__dirname, '../article-data/persona-article-id.txt'),
        data.id
      );
      console.log('\n✅ Article ID saved to article-data/persona-article-id.txt');
    } else {
      console.error('❌ Error:', data.error);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Failed to create article:', error.message);
    process.exit(1);
  }
}

createArticle();
