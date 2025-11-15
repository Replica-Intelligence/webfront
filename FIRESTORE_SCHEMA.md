# Firestore Schema Documentation

## Collections

### `users`
Stores user information for authenticated users.

**Document ID**: User's email or UID from authentication provider

**Fields**:
- `email` (string): User's email address
- `name` (string, optional): User's display name
- `createdAt` (timestamp): When the user first logged in
- `lastLoginAt` (timestamp): Last login timestamp

**Example**:
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2025-01-15T10:30:00Z",
  "lastLoginAt": "2025-01-15T14:20:00Z"
}
```

---

### `articles`
Stores knowledge base articles with extended metadata.

**Document ID**: Auto-generated or slug

**Fields**:

#### Basic Information
- `title` (string): Article title
- `subtitle` (string, optional): Article subtitle/description
- `slug` (string): URL-friendly slug for the article
- `excerpt` (string): Short summary for card display (1-2 sentences)
- `content` (string): Full article content (HTML or Markdown)

#### Metadata
- `badge` (string): Article type badge ('Concept', 'How-to', 'Architecture', 'Playbook', 'Troubleshooting')
- `area` (string): Topic area ('RI Overview & Concepts', 'Persona Intelligence', 'Data & Signals', 'Models & Embeddings', 'Pipelines & Automation', 'Deployment & Monitoring', 'Account & Governance')
- `difficulty` (string): Difficulty level ('Overview', 'In-depth', 'Advanced')
- `readTime` (string): Estimated read time (e.g., '12 min')

#### Dates
- `date` (string or timestamp): Original publication date
- `updatedDate` (string or timestamp, optional): Last update date
- `createdAt` (timestamp): Document creation timestamp

#### Author Information
- `author` (object, optional):
  - `name` (string): Author's name
  - `role` (string, optional): Author's role/title
  - `avatar` (string, optional): URL to author's avatar image

#### Content Features
- `hasCode` (boolean): Whether article contains code snippets
- `hasVideo` (boolean): Whether article contains embedded videos
- `hasNotebook` (boolean): Whether article has linked Jupyter notebooks

#### Analytics & Usage
- `views` (number): Total view count
- `rating` (number, optional): Average rating (0-5)
- `ratingCount` (number, optional): Number of ratings
- `lastOpened` (string, optional): Display text for last opened time (e.g., '3 days ago')
- `usedByTeammates` (number, optional): Number of team members who have viewed this

#### Series & Relationships
- `seriesInfo` (string, optional): Series information (e.g., 'Part 2 of the series: Building RI Persona Intelligence')
- `relatedArticles` (array of objects, optional): Related article references
  - `id` (string): Related article ID
  - `title` (string): Related article title
  - `slug` (string): Related article slug
  - `badge` (string): Relationship type ('Prerequisite', 'Follow-up', 'Related')
  - `area` (string): Topic area

#### Table of Contents
- `tableOfContents` (array of objects, optional): Section headings for TOC
  - `id` (string): Anchor ID for the section
  - `title` (string): Section title

**Example**:
```json
{
  "title": "Understanding Attention in Transformers",
  "subtitle": "A deep dive into how attention mechanisms power modern AI models",
  "slug": "attention-mechanisms-transformers",
  "excerpt": "Learn how attention mechanisms enable transformers to process and understand context in AI applications.",
  "content": "<article content HTML>",
  "badge": "Concept",
  "area": "Models & Embeddings",
  "difficulty": "In-depth",
  "readTime": "15 min",
  "date": "2025-01-10",
  "updatedDate": "2025-01-15",
  "author": {
    "name": "Dr. Sarah Chen",
    "role": "ML Research Lead",
    "avatar": "https://example.com/avatars/sarah.jpg"
  },
  "hasCode": true,
  "hasVideo": true,
  "hasNotebook": false,
  "views": 1247,
  "rating": 4.8,
  "ratingCount": 23,
  "lastOpened": "2 hours ago",
  "usedByTeammates": 12,
  "seriesInfo": "Part 2 of the series: Modern Deep Learning Architectures",
  "relatedArticles": [
    {
      "id": "intro-transformers",
      "title": "Introduction to Transformers",
      "slug": "intro-transformers",
      "badge": "Prerequisite",
      "area": "Models & Embeddings"
    },
    {
      "id": "bert-implementation",
      "title": "Implementing BERT for RI",
      "slug": "bert-implementation",
      "badge": "Follow-up",
      "area": "Models & Embeddings"
    }
  ],
  "tableOfContents": [
    { "id": "overview", "title": "Overview" },
    { "id": "intuition", "title": "Intuition" },
    { "id": "mathematical-formulation", "title": "Mathematical Formulation" },
    { "id": "implementation", "title": "Implementation" },
    { "id": "ri-considerations", "title": "RI-specific Considerations" }
  ],
  "createdAt": "2025-01-10T09:00:00Z"
}
```

---

### `article_feedback` (new collection)
Stores user feedback for articles.

**Document ID**: Auto-generated

**Fields**:
- `articleId` (string): Reference to the article
- `userId` (string): Reference to the user who provided feedback
- `helpful` (boolean): Whether the user found the article helpful
- `comment` (string, optional): Additional feedback comments
- `createdAt` (timestamp): When the feedback was submitted

**Example**:
```json
{
  "articleId": "attention-mechanisms-transformers",
  "userId": "user@example.com",
  "helpful": true,
  "comment": "Great explanation of self-attention!",
  "createdAt": "2025-01-15T14:30:00Z"
}
```

---

## Indexes

Recommended Firestore indexes for optimal query performance:

### `articles` collection:
1. Composite index: `area` (ASC), `date` (DESC)
2. Composite index: `difficulty` (ASC), `date` (DESC)
3. Composite index: `badge` (ASC), `date` (DESC)
4. Composite index: `area` (ASC), `difficulty` (ASC), `date` (DESC)

---

## Migration Notes

If you have existing articles in Firestore with the old schema, you'll need to migrate them to include the new fields. The minimum required fields for backward compatibility are:
- `title`
- `slug`
- `excerpt`
- `content`
- `date`

All other fields are optional and will gracefully degrade if not present.

---

## Sample Data Setup

To populate your Firestore with sample articles for testing:

```javascript
const sampleArticles = [
  {
    title: "Getting Started with RI Personas",
    subtitle: "Learn the fundamentals of persona intelligence",
    slug: "getting-started-personas",
    excerpt: "An introduction to building and managing AI personas in Replica Intelligence.",
    content: "<p>Article content here...</p>",
    badge: "Concept",
    area: "Persona Intelligence",
    difficulty: "Overview",
    readTime: "8 min",
    date: "2025-01-15",
    hasCode: true,
    hasVideo: false,
    hasNotebook: false,
    author: {
      name: "RI Team",
      role: "Product Team"
    },
    views: 523,
    usedByTeammates: 8
  },
  // Add more sample articles...
];
```
