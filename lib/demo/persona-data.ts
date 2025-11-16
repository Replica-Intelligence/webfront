
import { FullPersonaData } from './types';

export const personaData: FullPersonaData = {
  "metadata": {
    "version": "1.0",
    "config_hash": "phase_a2_80a804b3_20251109_195600",
    "domain": "trump_twitter",
    "generated_at": "2025-11-10T21:05:18.576983",
    "total_personas": 11
  },
  "personas": [
    {
      "persona_id": 0,
      "name": "Tech Builders",
      "description": "Payment gateway developers and security researchers focused on technical infrastructure, often discussing return policies and system integrations.",
      "size": 337,
      "demographics": {
        "occupation": "IT Professional (Software Engineer)",
        "education": "Bachelor's/Master's in Computer Science",
        "family_structure": "Single or Married, no children",
        "behavioralClues": {
          "occupation": "Discusses technical topics like 'return policy,' 'payment gateways,' and system integrations. Active during business hours.",
          "education": "Uses precise, technical language common in software development and IT fields.",
          "family_structure": "Focus on professional topics suggests a lifestyle with fewer family commitments, typical of younger professionals in demanding tech roles."
        },
        "hypothesis": {
          "occupation": "Their vocabulary and activity patterns strongly suggest their profession involves building or maintaining e-commerce systems.",
          "education": "A formal education in a technical field is highly probable given their comfort with complex system-related terminology.",
          "family_structure": "The persona's online focus is career-centric, aligning with the demographics of many early-to-mid-career tech workers."
        }
      },
       "marketing_strategy": {
        "primary_angle": "Focus on technical superiority, reliability, and clear documentation.",
        "key_themes": ["API performance", "Security compliance", "Ease of integration", "Transparent return policies"],
        "recommended_channels": ["Developer Forums (e.g., Stack Overflow)", "Tech Blogs", "LinkedIn", "GitHub"]
      },
      "behavior_fingerprint": {
        "temporal": {
          "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ],
          "peak_hour": 15,
          "weekday_weekend_ratio": 2.68,
          "total_tweets": 337,
          "note": "Using aggregate dataset patterns (cluster-specific data unavailable)"
        },
        "style": { "avg_text_length": 177.8, "avg_word_count": 30.8, "question_density": 0.1, "exclam_density": 0.1, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "return", "tfidf": 0.5752 }, { "term": "policy", "tfidf": 0.4 }, { "term": "new", "tfidf": 0.1626 }, { "term": "days", "tfidf": 0.1427 }, { "term": "items", "tfidf": 0.1251 } ],
        "top_ngrams": [ { "ngram": "return policy", "tfidf": 0.5 } ],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_0_sample_0", "text": "Hi! We apologize for the inconvenience caused. We endeavor to provide you with consistently high-quality products. We regret the inconvenience caused to you, however, we would not be able to raise the dispute as the duration for a return and refund has closed. We strive (1/2)", "source_id": "phase_a5_sample_0_0" },
        { "snippet_id": "cluster_0_sample_1", "text": "Amazon’s free and easy return policy for the vast majority of its items is a key part of its pitch to consumers, but a new feature the company is rolling out shows it’s trying to get customers to send purchases back less often.", "source_id": "phase_a5_sample_0_1" },
        { "snippet_id": "cluster_0_sample_2", "text": "Return policy states you cannot return it after posting on X about owning it (read the fine print)", "source_id": "phase_a5_sample_0_2" }
      ],
      "copy_hints": { "do_say": [ "Reference return and policy explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference return and policy explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576361",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 1,
      "name": "UX Shoppers",
      "description": "Design-aware consumers who value seamless online shopping experiences and beautiful UX. They are the most verbose group, providing articulate feedback.",
      "size": 100,
       "demographics": {
        "occupation": "Creative Professional (UX Designer)",
        "education": "Bachelor's/Master's in Design",
        "family_structure": "Single or Married",
        "behavioralClues": {
          "occupation": "Highly verbose and articulate feedback on 'commerce,' 'brands,' and user experience. They notice and comment on the nuances of online shopping.",
          "education": "Well-structured, long-form critiques suggest a higher education level, likely in a field that values communication and design thinking.",
          "family_structure": "Focus is on individual experience and product design rather than family needs, fitting the profile of a single professional or a couple without children."
        },
        "hypothesis": {
          "occupation": "Their detailed feedback on user experience aligns perfectly with the mindset of a UX designer, marketer, or product manager.",
          "education": "The high average word count (89.4) and quality of writing point towards a background in humanities, design, or a related professional field.",
          "family_structure": "Their concerns are more about aesthetics and functionality than household management, suggesting a lifestyle less centered around immediate family logistics."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Highlight beautiful design, seamless user flow, and a premium brand story.",
        "key_themes": ["Aesthetic value", "User experience", "Brand narrative", "Quality craftsmanship"],
        "recommended_channels": ["Instagram", "Pinterest", "Design-focused blogs", "Behance"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 100, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 615.0, "avg_word_count": 89.4, "question_density": 0.0, "exclam_density": 0.1, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "commerce", "tfidf": 0.2475 }, { "term": "brands", "tfidf": 0.2175 }, { "term": "india", "tfidf": 0.1656 }, { "term": "quick", "tfidf": 0.1654 }, { "term": "like", "tfidf": 0.1576 } ],
        "top_ngrams": [ { "ngram": "quick commerce", "tfidf": 0.286 }, { "ngram": "local kirana", "tfidf": 0.0622 } ],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_1_sample_2", "text": "Government Has Flagged Concerns Over The Surge of Quick Commerce Apps in India\n\nBlinkit, Zepto, Swiggy Instamart Seem To Be Impacting Small Businesses & Local Kirana\n\nConvenience and Discounts are The Biggest Reasons Why People Like Quick Commerce", "source_id": "phase_a5_sample_1_2" },
        { "snippet_id": "cluster_1_sample_3", "text": "India's retail sector is a tale of two distinct consumer segments, each with its unique characteristics and preferences. On one side, we have the traditional value-conscious shoppers—primarily low to mid-income households—who rely on their local neighbourhood stores for daily ...", "source_id": "phase_a5_sample_1_3" },
        { "snippet_id": "cluster_1_sample_4", "text": "I ordered a Dell laptop for my sister from \n[USER]\n for ₹43,158, her very first. What should’ve been an exciting and proud moment quickly turned into an absolute nightmare\n\nTime to expose the mess. A thread", "source_id": "phase_a5_sample_1_4" }
      ],
      "copy_hints": { "do_say": [ "Reference commerce and brands explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference commerce and brands explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576396",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 2,
      "name": "Delivery Trackers",
      "description": "Anxious package trackers obsessed with delivery timelines and shipping transparency, often discussing delays and scams.",
      "size": 98,
      "demographics": {
        "occupation": "Freelancer or Small Business Owner",
        "education": "Bachelor's Degree",
        "family_structure": "Married with young children",
        "behavioralClues": {
          "occupation": "High anxiety around order delivery timelines ('issues,' 'alert'). Their time is valuable, and delays directly impact their work or personal commitments.",
          "education": "Clear, direct communication style focused on problem-solving, indicative of a professional or degree-level background.",
          "family_structure": "Concern over scams ('Grandparent Scam Alert!') and delivery reliability suggests they are managing purchases for a household, not just themselves."
        },
        "hypothesis": {
          "occupation": "Dependence on timely deliveries is characteristic of freelancers or SBOs who rely on shipments for their business operations.",
          "education": "They are educated enough to navigate complex return processes and articulate their issues clearly online.",
          "family_structure": "The protective stance against scams suggests they are likely looking out for vulnerable family members, such as children or elderly parents."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Provide reassurance through transparency, speed, and reliable support.",
        "key_themes": ["Real-time tracking", "Proactive delivery alerts", "Responsive customer support", "Scam protection"],
        "recommended_channels": ["Transactional Emails", "SMS Alerts", "Customer Support Forums", "Facebook Groups"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 98, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 255.2, "avg_word_count": 43.2, "question_density": 0.1, "exclam_density": 0.4, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "order", "tfidf": 0.2002 }, { "term": "delhi", "tfidf": 0.1602 }, { "term": "alert", "tfidf": 0.1447 }, { "term": "issues", "tfidf": 0.1425 }, { "term": "online", "tfidf": 0.1421 } ],
        "top_ngrams": [ { "ngram": "scam alert", "tfidf": 0.2 } ],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_2_sample_2", "text": "Grandparent Scam Alert!\n\nScammers are calling seniors pretending to be family or lawyers, claiming a loved one’s been arrested and needs bail money.\n\nPolice and lawyers will never ask for money or send someone to collect cash.\n\nIf you get a call like this — hang up and verify", "source_id": "phase_a5_sample_2_2" },
        { "snippet_id": "cluster_2_sample_3", "text": "Even though you made the video, they still didn't offer a refund in my case. It's the same issue, but they committed fraud. In your case, you didn't make a video, so they have an excuse. In my Case : deals4daily site from Delhi is also a fraudulent website.", "source_id": "phase_a5_sample_2_3" },
        { "snippet_id": "cluster_2_sample_1", "text": "No matter who endorses , every business in India does have a tadka of spam in it…  the very second tweet of \n[USER]\n features \n[USER]\n . Not sure if the product was fake or the buyer but it hurts the business for sure .", "source_id": "phase_a5_sample_2_1" }
      ],
      "copy_hints": { "do_say": [ "Reference order and delhi explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference order and delhi explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576423",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 3,
      "name": "Return Scrutinizers",
      "description": "Rights-aware consumers who scrutinize return policies and demand clear refund terms, often discussing fake products.",
      "size": 80,
      "demographics": {
        "occupation": "Accountant or Legal Assistant",
        "education": "Bachelor's in Commerce",
        "family_structure": "Living with parents",
        "behavioralClues": {
          "occupation": "Detail-oriented language, focus on policies, and awareness of consumer rights ('fake,' 'genuine'). They treat purchases like transactions that must be verified.",
          "education": "Their approach is methodical, suggesting training in a field that requires careful review of terms and conditions, like commerce or law.",
          "family_structure": "Often purchase from platforms like Myntra. This, combined with their financial caution, could indicate a younger adult living at home, managing their own discretionary income carefully."
        },
        "hypothesis": {
          "occupation": "The meticulous nature of their complaints points to a profession where attention to detail is paramount.",
          "education": "A commerce or related degree would equip them with the knowledge and confidence to challenge policies and verify authenticity.",
          "family_structure": "They behave like careful spenders, possibly because they have a limited income or are saving for future independence."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Emphasize fairness, clarity, and a hassle-free customer experience.",
        "key_themes": ["Easy returns", "Authenticity guarantee", "Clear terms of service", "Consumer rights"],
        "recommended_channels": ["FAQ Pages", "Consumer Rights Forums", "YouTube explainers", "Transparent policy pages"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 80, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 149.1, "avg_word_count": 25.6, "question_density": 0.2, "exclam_density": 0.0, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "fake", "tfidf": 0.256 }, { "term": "products", "tfidf": 0.1688 }, { "term": "genuine", "tfidf": 0.1515 }, { "term": "myntra", "tfidf": 0.1515 }, { "term": "amazonin", "tfidf": 0.1496 } ],
        "top_ngrams": [ { "ngram": "culture circle", "tfidf": 0.2 } ],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_3_sample_1", "text": "almost ordered a pair of sambas from them last month but was unsure about their authenticity. ended up buying from \n[USER]\n , and honestly, i’m glad i choose myntra.", "source_id": "phase_a5_sample_3_1" },
        { "snippet_id": "cluster_3_sample_2", "text": "[USER]\n \n[USER]\n \n[USER]\n \n[USER]\n \n[USER]\n All these websites are hub of fakes and sells fake items", "source_id": "phase_a5_sample_3_2" },
        { "snippet_id": "cluster_3_sample_3", "text": "Most products bought through online platforms are fake, that you can’t even recognise.", "source_id": "phase_a5_sample_3_3" }
      ],
      "copy_hints": { "do_say": [ "Reference fake and products explicitly", "Target business hours for maximum engagement" ], "dont_say": [ "Avoid excessive exclamation marks" ] },
      "grounding": [ { "hint": "Reference fake and products explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" }, { "hint": "Avoid excessive exclamation marks", "grounded_by": "style_fingerprint.exclam_density=0.0" } ],
      "last_updated": "2025-11-10T21:05:18.576448",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 4,
      "name": "India Watchers",
      "description": "India-focused e-commerce watchers tracking market dynamics, delivery times, and quick commerce trends.",
      "size": 213,
      "demographics": {
        "occupation": "Business Analyst or MBA Student",
        "education": "Master's Degree (MBA)",
        "family_structure": "Single, living in a metro city",
        "behavioralClues": {
          "occupation": "Analyzes market trends, 'quick commerce,' and logistics ('delivery,' 'days'). Their perspective is often high-level and analytical.",
          "education": "Conversations mirror case-study discussions found in business schools. They understand market dynamics and competitive landscapes.",
          "family_structure": "Focus is on macro trends rather than personal household needs. This, combined with their likely age, points to a single status."
        },
        "hypothesis": {
          "occupation": "Their language and topics of interest align with professionals or students who are paid to analyze and understand market behavior.",
          "education": "An MBA or similar advanced degree provides the framework for this type of market analysis.",
          "family_structure": "Living in a metro city, they are at the heart of the e-commerce trends they are observing, with the time and inclination to discuss them online."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Position your brand as a key player in the evolving Indian market.",
        "key_themes": ["Market insights", "Quick commerce trends", "Logistics efficiency", "Local market adaptation"],
        "recommended_channels": ["Business Publications (e.g., Livemint)", "LinkedIn Articles", "Market analysis reports", "Industry webinars"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 213, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 226.2, "avg_word_count": 39.0, "question_density": 0.1, "exclam_density": 0.1, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "days", "tfidf": 0.2948 }, { "term": "delivery", "tfidf": 0.2912 }, { "term": "order", "tfidf": 0.1845 }, { "term": "orders", "tfidf": 0.1431 }, { "term": "product", "tfidf": 0.1268 } ],
        "top_ngrams": [],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_4_sample_0", "text": "this is such a retarded company-delayed diwali gifts sent by me citing \"diwali rush\", now telling me that one of the orders is out of stock..2 days after diwali. orders were supposed to be delivered on 16th oct", "source_id": "phase_a5_sample_4_0" },
        { "snippet_id": "cluster_4_sample_3", "text": "Water update ~ still no access to water.  \nEven Ribbon and Regalo say it’s ridiculous. \nOur emergency delivery was cancelled a few days ago due to it being needed elsewhere. \nWe are having to be so careful but we remain positive for now. Hopefully we will get a lorry today!", "source_id": "phase_a5_sample_4_3" },
        { "snippet_id": "cluster_4_sample_4", "text": "Yeah, they’ve been dropping the ball lately. Stuff that’s “in stock” at the distribution centre near me taking 10 days to arrive and when it arrived they got the order wrong. \n[USER]", "source_id": "phase_a5_sample_4_4" }
      ],
      "copy_hints": { "do_say": [ "Reference days and delivery explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference days and delivery explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576469",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 5,
      "name": "Counterfeit Warriors",
      "description": "Brand-conscious consumers wary of counterfeit products and demanding authenticity. They are vocal about delivery and customer service issues.",
      "size": 102,
      "demographics": {
        "occupation": "College Student",
        "education": "Pursuing Bachelor's Degree",
        "family_structure": "Living with parents",
        "behavioralClues": {
          "occupation": "Highly emotional and expressive language ('suffering!', 'disgusted!!!'). Concern with brand authenticity but less focus on technical details.",
          "education": "Conversations are passionate but less structured than other personas, fitting the communication style common on social media among younger adults.",
          "family_structure": "Likely making purchases with family money or part-time income, making them highly sensitive to getting value and authenticity for their spend."
        },
        "hypothesis": {
          "occupation": "The high emotional valence and focus on consumer brands are characteristic of students who are forming their brand loyalties.",
          "education": "They are digitally native and comfortable using social media as a primary channel for customer service complaints.",
          "family_structure": "Living with parents may mean less personal financial risk, but a stronger desire to ensure their purchases meet expectations."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Build trust by guaranteeing authenticity and showcasing brand integrity.",
        "key_themes": ["Brand protection", "Genuine products", "User-generated content", "Responsive customer service"],
        "recommended_channels": ["Instagram/TikTok influencer collaborations", "Brand ambassador programs", "X (Twitter) for public support"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 102, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 246.1, "avg_word_count": 40.1, "question_density": 0.4, "exclam_density": 0.7, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "delivery", "tfidf": 0.3354 }, { "term": "product", "tfidf": 0.2604 }, { "term": "customer", "tfidf": 0.24 }, { "term": "issues", "tfidf": 0.2292 }, { "term": "service", "tfidf": 0.1853 } ],
        "top_ngrams": [ { "ngram": "customer service", "tfidf": 0.3228 }, { "ngram": "social media", "tfidf": 0.1789 }, { "ngram": "product delivery", "tfidf": 0.1789 } ],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_5_sample_0", "text": "Amazon's delivery process is in shambles, deliveries are severely delayed, and their Social Media team has changed internal processes, so you won't get any help from them. \n\nPlus, layoffs are coming.", "source_id": "phase_a5_sample_5_0" },
        { "snippet_id": "cluster_5_sample_2", "text": "[USER]\n, \n[USER]\n Please take action!\nRepeated delivery & replacement issues for one small product.\nI’m a Prime member, still suffering!\nWaste of money taking Prime.\nNon-Prime users must be facing even worse. \n#AmazonIndia #CustomerServiceFail", "source_id": "phase_a5_sample_5_2" },
        { "snippet_id": "cluster_5_sample_4", "text": "Exactly. And even before this, Amazon’s customer service had collapsed - no working phone support, chat agents disconnect six or seven times before resolving anything, and half of them don’t even understand their own coupon terms. If this is how it was before 30,000 layoffs,", "source_id": "phase_a5_sample_5_4" }
      ],
      "copy_hints": { "do_say": [ "Reference delivery and product explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference delivery and product explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576488",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 6,
      "name": "Platform Complainers",
      "description": "Frustrated customers who publicly complain about platform issues and warn about scams, often using non-English phrases.",
      "size": 38,
      "demographics": {
        "occupation": "Self-employed",
        "education": "High School or Vocational Training",
        "family_structure": "Married, joint family",
        "behavioralClues": {
          "occupation": "Language includes informal and regional terms ('bhai'). They are direct and use social media as a public forum to resolve issues.",
          "education": "The mix of languages and direct, sometimes unpolished, communication style suggests a background outside of formal higher education.",
          "family_structure": "The use of familiar terms like 'bhai' can indicate a community or family-oriented social structure, common in joint family setups."
        },
        "hypothesis": {
          "occupation": "A self-employed individual (e.g., a shop owner) would be more likely to use social media for direct, public recourse when they feel wronged by a platform.",
          "education": "Their communication is effective and direct but lacks the formal structure seen in other personas, pointing to practical experience over academic training.",
          "family_structure": "Their community-oriented language suggests they operate within a close-knit social or family network."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Demonstrate that you are listening and actively solving problems.",
        "key_themes": ["We heard you", "Feature updates based on feedback", "Community support", "Public acknowledgements"],
        "recommended_channels": ["X (Twitter) replies", "Community Forums", "Facebook comments", "Direct Messaging"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 38, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 201.6, "avg_word_count": 30.6, "question_density": 0.1, "exclam_density": 0.2, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "https", "tfidf": 0.2 }, { "term": "bhai", "tfidf": 0.1447 }, { "term": "policy", "tfidf": 0.1154 }, { "term": "return", "tfidf": 0.1154 }, { "term": "na", "tfidf": 0.1154 } ],
        "top_ngrams": [ { "ngram": "return policy", "tfidf": 0.2 } ],
        "salient_phrases": [ "here’s how bjp makes" ]
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_6_sample_0", "text": "Customer service unavailable. \n\nReturn policy: TIDAK BERLAKU. \n\nSide effects: ketawa sampai perut sakit, gregetan level maksimal, tapi somehow— makin sayang.", "source_id": "phase_a5_sample_6_0" },
        { "snippet_id": "cluster_6_sample_2", "text": "Liat-liat barang di online shop lebih enak dari pada di mall. Gak bakal risih diikutin mbak/mas pegawainya, bisa liat-liat sepuasnya tanpa takut ga enakan ga jadi beli.", "source_id": "phase_a5_sample_6_2" },
        { "snippet_id": "cluster_6_sample_4", "text": "Bhai ne return policy ko Netflix trial samaj liya tha — “use karo, pasand na aaye to wapas!”", "source_id": "phase_a5_sample_6_4" }
      ],
      "copy_hints": { "do_say": [ "Reference https and bhai explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference https and bhai explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576506",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 7,
      "name": "Payment Gateway Shoppers",
      "description": "Comparison shoppers evaluating payment gateways and fintech solutions for transactions, with a focus on digital and cross-border payments.",
      "size": 95,
      "demographics": {
        "occupation": "Startup Founder or Tech Professional",
        "education": "Bachelor's in Technology/Business",
        "family_structure": "Single or co-living",
        "behavioralClues": {
          "occupation": "Discusses 'payment gateway,' 'fintech,' 'paypal,' and 'cross-border payments.' They are comparing solutions, not just using them.",
          "education": "Understanding of technical and business concepts like 'webhooks' and 'integration simplicity' points to a relevant educational background.",
          "family_structure": "Their focus is on business and technology solutions, a common trait for young professionals in the startup ecosystem who are often single or living with peers."
        },
        "hypothesis": {
          "occupation": "This persona is likely building something—a product or a business—that requires payment processing, hence their comparative analysis.",
          "education": "A degree in tech or business provides the foundational knowledge to evaluate and discuss these financial technologies.",
          "family_structure": "The professional, solution-oriented nature of their conversations suggests they are in a life stage focused on career-building."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Target B2B needs by highlighting efficiency, security, and developer-friendliness.",
        "key_themes": ["Low transaction fees", "Global reach", "Developer-friendly APIs", "Webhook support"],
        "recommended_channels": ["Fintech blogs", "Startup communities (e.g., Indie Hackers)", "Product Hunt", "API comparison websites"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 95, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 198.7, "avg_word_count": 31.3, "question_density": 0.3, "exclam_density": 0.2, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "gateway", "tfidf": 0.303 }, { "term": "payment", "tfidf": 0.2931 }, { "term": "payments", "tfidf": 0.172 }, { "term": "digital", "tfidf": 0.1608 }, { "term": "paypal", "tfidf": 0.1572 } ],
        "top_ngrams": [ { "ngram": "payment gateway", "tfidf": 0.5 }, { "ngram": "cross border", "tfidf": 0.1414 } ],
        "salient_phrases": [ "which payment gateway to" ]
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_7_sample_3", "text": "Interesting!  \nChoosing the right payment gateway can make a huge difference in app development and user experience. Webhooks and integration simplicity are other level!", "source_id": "phase_a5_sample_7_3" },
        { "snippet_id": "cluster_7_sample_4", "text": "Your digital wallet is about to go global. Say hello to PayPal World. PayPal and \n[USER]\n  are partnering with some of the world's largest payment systems and digital wallets - starting with \n[USER]\n, \n[USER]\n, and Tenpay Global - to make cross-border payments a breeze. Shop", "source_id": "phase_a5_sample_7_4" },
        { "snippet_id": "cluster_7_sample_9", "text": "if you are confused\n\nwhich payment gateway to choose\n\ngo for \n@polar_sh\n\n\nby the team you setup, you'll be surprised by how simple they and powerful are\n\n(this is not paid btw)", "source_id": "phase_a5_sample_7_9" }
      ],
      "copy_hints": { "do_say": [ "Reference gateway and payment explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference gateway and payment explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576526",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 8,
      "name": "Trust-First Buyers",
      "description": "Security-conscious buyers prioritizing trust, authenticity, and verified sellers. They avoid tempting offers and stick to official websites.",
      "size": 93,
      "demographics": {
        "occupation": "Homemaker",
        "education": "Bachelor's Degree",
        "family_structure": "Married with children",
        "behavioralClues": {
          "occupation": "Highly risk-averse behavior ('avoid fake links,' 'buy from trusted websites'). They prioritize safety and reliability over discounts.",
          "education": "Clear and cautionary communication style. They understand the risks of online shopping and advise others.",
          "family_structure": "Their cautiousness is often driven by a need to protect family finances and ensure product safety for household members."
        },
        "hypothesis": {
          "occupation": "This profile aligns with a household manager (homemaker) who is responsible for the family's budget and well-being, making them naturally cautious.",
          "education": "A degree-level education provides the critical thinking skills to assess risks and make informed decisions.",
          "family_structure": "Being married with children provides a strong motivation to be a 'Trust-First Buyer,' as the consequences of a bad purchase affect the whole family."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Build confidence by showcasing safety, security, and social proof.",
        "key_themes": ["Customer testimonials", "Security badges (SSL, etc.)", "Transparent policies", "Verified seller programs"],
        "recommended_channels": ["Review sites (e.g., Trustpilot)", "On-site testimonials", "PR in reputable media", "Community forums"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 93, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 158.0, "avg_word_count": 26.1, "question_density": 0.3, "exclam_density": 0.1, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "trust", "tfidf": 0.2069 }, { "term": "online", "tfidf": 0.1596 }, { "term": "order", "tfidf": 0.147 }, { "term": "product", "tfidf": 0.147 }, { "term": "customer", "tfidf": 0.1253 } ],
        "top_ngrams": [ { "ngram": "genuine products", "tfidf": 0.2 } ],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_8_sample_0", "text": "If it’s a ridiculous discount never purchase! \nI always trust official websites not some platform.", "source_id": "phase_a5_sample_8_0" },
        { "snippet_id": "cluster_8_sample_2", "text": "Due to these reasons people don't even buy from new sites even though they sell genuine products", "source_id": "phase_a5_sample_8_2" },
        { "snippet_id": "cluster_8_sample_4", "text": "While shopping online, always buy from trusted and verified websites. Avoid fake links or tempting offers, as one wrong click can put your personal information and money at risk. Stay alert.\n\n#BeCyberSmart", "source_id": "phase_a5_sample_8_4" }
      ],
      "copy_hints": { "do_say": [ "Reference trust and online explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference trust and online explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576545",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 9,
      "name": "Customer Service Critics",
      "description": "Vocal critics of customer service quality, especially automated chatbots and support systems. They represent a key pain point.",
      "size": 104,
      "demographics": {
        "occupation": "IT Support Specialist",
        "education": "Diploma or Bachelor's Degree",
        "family_structure": "Single, living with roommates",
        "behavioralClues": {
          "occupation": "Extreme frustration with 'chat bots' and automated 'customer service.' They know what good support should look like and are angered by inefficiency.",
          "education": "They are technically proficient enough to identify the failings of automated systems and articulate their complaints clearly.",
          "family_structure": "Their complaints are individual-focused and reflect personal frustration, typical of a single person dealing with service providers on their own."
        },
        "hypothesis": {
          "occupation": "Someone working in IT support would have very low tolerance for poor customer service systems because they are experts in that domain.",
          "education": "A technical diploma or degree provides the background to understand why these systems fail, fueling their specific critiques.",
          "family_structure": "Living with roommates or alone, they are self-reliant for problem-solving and have high expectations for service efficiency."
        }
      },
      "marketing_strategy": {
        "primary_angle": "Win them over by marketing your superior, human-centric customer support.",
        "key_themes": ["24/7 human support", "Fast response times", "No chatbots", "Effective problem resolution"],
        "recommended_channels": ["Customer service blogs", "Helpdesk forums (e.g., Zendesk, Intercom)", "Case studies on successful support interactions"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 104, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 194.3, "avg_word_count": 31.6, "question_density": 0.1, "exclam_density": 0.1, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "service", "tfidf": 0.3226 }, { "term": "chat", "tfidf": 0.3124 }, { "term": "customer", "tfidf": 0.2951 }, { "term": "ai", "tfidf": 0.2215 }, { "term": "voice", "tfidf": 0.1433 } ],
        "top_ngrams": [ { "ngram": "customer service", "tfidf": 0.5854 }, { "ngram": "service chat", "tfidf": 0.233 }, { "ngram": "chat bots", "tfidf": 0.1587 } ],
        "salient_phrases": []
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_9_sample_0", "text": "Worst ever customer service. Best of luck with the refund/replacement service requests. Chat with service executive gets closed within a minute without proper resolution. They are using 2&3 tier cities as dumping ground of old expired products.", "source_id": "phase_a5_sample_9_0" },
        { "snippet_id": "cluster_9_sample_3", "text": "I want to inform businesses great customer service matters. With that say \n[USER]\n has horrible chat . After answering all the questions I still can’t reach a human.", "source_id": "phase_a5_sample_9_3" },
        { "snippet_id": "cluster_9_sample_4", "text": "i can’t wait till i lose this check mark in Nov. bought it in hopes to speak with the grok customer service chat that comes with it. \n\nOfc the chat bot didn’t fix shit. Elon i want my 11 dollars back h0", "source_id": "phase_a5_sample_9_4" }
      ],
      "copy_hints": { "do_say": [ "Reference service and chat explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference service and chat explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576563",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    },
    {
      "persona_id": 10,
      "name": "Conversational Commerce Users",
      "description": "Tech-savvy shoppers interested in AI-driven commerce and conversational shopping experiences. Represents a significant emerging trend.",
      "size": 194,
      "demographics": {
        "occupation": "Product Manager (Tech)",
        "education": "Master's Degree (STEM/MBA)",
        "family_structure": "Married, Dual Income No Kids (DINK)",
        "behavioralClues": {
          "occupation": "Forward-looking conversations about 'AI,' 'conversational experience,' and the future of 'online shopping.' They see technology as a tool for innovation.",
          "education": "Their vocabulary and understanding of how AI can 'revolutionize' business processes suggest an advanced degree and familiarity with tech strategy.",
          "family_structure": "As early adopters of new technology, they likely have the disposable income and lifestyle flexibility to experiment, which aligns with a DINK household."
        },
        "hypothesis": {
          "occupation": "Product managers are tasked with understanding market trends and imagining future product experiences, which matches this persona's focus perfectly.",
          "education": "An advanced degree in a field like technology management or business is common for product managers and would provide the context for their conversations.",
          "family_structure": "The DINK lifestyle often correlates with higher discretionary spending and a greater appetite for cutting-edge products and services."
        }
      },
       "marketing_strategy": {
        "primary_angle": "Appeal to their desire for innovation, convenience, and a futuristic experience.",
        "key_themes": ["AI-powered personalization", "Conversational shopping", "Cutting-edge technology", "The future of e-commerce"],
        "recommended_channels": ["Tech News sites (e.g., TechCrunch)", "AI-focused communities (e.g., on Reddit)", "Product Hunt", "X (Twitter) tech circles"]
      },
      "behavior_fingerprint": {
        "temporal": { "activity_by_hour": [ 35, 38, 46, 61, 56, 54, 73, 67, 43, 57, 60, 50, 55, 73, 68, 128, 91, 71, 84, 61, 50, 42, 55, 35 ], "peak_hour": 15, "weekday_weekend_ratio": 2.68, "total_tweets": 194, "note": "Using aggregate dataset patterns (cluster-specific data unavailable)" },
        "style": { "avg_text_length": 190.0, "avg_word_count": 26.4, "question_density": 0.5, "exclam_density": 0.1, "note": "Style metrics derived from sample texts only" }
      },
      "language_fingerprint": {
        "top_terms": [ { "term": "shopping", "tfidf": 0.3116 }, { "term": "online", "tfidf": 0.3044 }, { "term": "experience", "tfidf": 0.2115 }, { "term": "ai", "tfidf": 0.1658 }, { "term": "like", "tfidf": 0.1639 } ],
        "top_ngrams": [ { "ngram": "online shopping", "tfidf": 0.5068 }, { "ngram": "shopping experience", "tfidf": 0.1691 } ],
        "salient_phrases": [ "the online shopping experience" ]
      },
      "evidence_snippets": [
        { "snippet_id": "cluster_10_sample_3", "text": "Shopify has announced an innovative partnership with OpenAI, revolutionizing the online shopping experience for small businesses. This collaboration introduces AI-driven conversations, allowing shoppers to receive tailored product recommendations through tools like ChatGPT.", "source_id": "phase_a5_sample_10_3" },
        { "snippet_id": "cluster_10_sample_4", "text": "How do you make online shopping feel like walking into a \n[USER]\n store?\n\nWith Agentforce. Pandora uses AI-powered recommendations and instant answers to grow sales, build loyalty, and recreate the sparkle of in-store.\n\nExperience the magic: \nhttps://\nsforce.co/3WgRb7C", "source_id": "phase_a5_sample_10_4" },
        { "snippet_id": "cluster_10_sample_5", "text": "Carmela Gómez: \n\n“AI will turn online shopping into a conversational experience” \n\n\nhttps://\nbbva.com/en/innovation/\ncarmela-gomez-ai-will-turn-online-shopping-into-a-conversational-experience/\n… \n@bbva", "source_id": "phase_a5_sample_10_5" }
      ],
      "copy_hints": { "do_say": [ "Reference shopping and online explicitly", "Target business hours for maximum engagement" ], "dont_say": [] },
      "grounding": [ { "hint": "Reference shopping and online explicitly", "grounded_by": "language_fingerprint.top_terms" }, { "hint": "Target business hours for maximum engagement", "grounded_by": "temporal_fingerprint.peak_hour=15" } ],
      "last_updated": "2025-11-10T21:05:18.576737",
      "config_hash": "phase_a2_80a804b3_20251109_195600"
    }
  ]
};

export const personaDistribution = {
    "0": { "name": "Tech Builders", "count": 339, "percentage": 23.31 },
    "1": { "name": "UX Shoppers", "count": 101, "percentage": 6.95 },
    "2": { "name": "Delivery Trackers", "count": 98, "percentage": 6.74 },
    "3": { "name": "Return Scrutinizers", "count": 79, "percentage": 5.43 },
    "4": { "name": "India Watchers", "count": 214, "percentage": 14.72 },
    "5": { "name": "Counterfeit Warriors", "count": 104, "percentage": 7.15 },
    "6": { "name": "Platform Complainers", "count": 39, "percentage": 2.68 },
    "7": { "name": "Payment Gateway Shoppers", "count": 94, "percentage": 6.46 },
    "8": { "name": "Trust-First Buyers", "count": 93, "percentage": 6.4 },
    "9": { "name": "Customer Service Critics", "count": 102, "percentage": 7.02 },
    "10": { "name": "Conversational Commerce Users", "count": 191, "percentage": 13.14 }
};