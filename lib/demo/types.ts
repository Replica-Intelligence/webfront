
export interface TemporalFingerprint {
  activity_by_hour: number[];
  peak_hour: number;
  weekday_weekend_ratio: number;
  total_tweets: number;
  note: string;
}

export interface StyleFingerprint {
  avg_text_length: number;
  avg_word_count: number;
  question_density: number;
  exclam_density: number;
  note: string;
}

export interface BehaviorFingerprint {
  temporal: TemporalFingerprint;
  style: StyleFingerprint;
}

export interface Term {
  term: string;
  tfidf: number;
}

export interface NGram {
  ngram: string;
  tfidf: number;
}

export interface LanguageFingerprint {
  top_terms: Term[];
  top_ngrams: NGram[];
  salient_phrases: string[];
}

export interface EvidenceSnippet {
  snippet_id: string;
  text: string;
  source_id: string;
}

export interface CopyHints {
  do_say: string[];
  dont_say: string[];
}

export interface Grounding {
  hint: string;
  grounded_by: string;
}

export interface Demographics {
  occupation: string;
  education: string;
  family_structure: string;
  behavioralClues: {
    occupation: string;
    education: string;
    family_structure: string;
  };
  hypothesis: {
    occupation: string;
    education: string;
    family_structure: string;
  };
}

export interface MarketingStrategy {
    primary_angle: string;
    key_themes: string[];
    recommended_channels: string[];
}

export interface Persona {
  persona_id: number;
  name: string;
  description: string;
  size: number;
  demographics: Demographics;
  behavior_fingerprint: BehaviorFingerprint;
  language_fingerprint: LanguageFingerprint;
  evidence_snippets: EvidenceSnippet[];
  copy_hints: CopyHints;
  marketing_strategy: MarketingStrategy;
  grounding: Grounding[];
  last_updated: string;
  config_hash: string;
}

export interface PersonaDistributionInfo {
  name: string;
  count: number;
  percentage: number;
}

export interface PersonaDistribution {
  [key: string]: PersonaDistributionInfo;
}

export interface FullPersonaData {
  metadata: {
    version: string;
    config_hash: string;
    domain: string;
    generated_at: string;
    total_personas: number;
  };
  personas: Persona[];
}
