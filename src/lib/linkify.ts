// Prose on this site is stored as plain strings (bio, news, service). Rather than
// hand-wrapping every mention in an <a>, name the entities once here and let the
// renderer link them. Add a name to this map and it becomes a link everywhere.
//
// Rule of thumb for what belongs here: a proper noun a reader would plausibly
// want to look up — a person, a lab, an institution, a project, a venue. Not
// generic phrases, and nothing whose target is a guess. Every URL is verified.
export const entityLinks: Record<string, string> = {
  // People
  'Tri Dao': 'https://tridao.me/',
  'Ravi Netravali': 'https://www.cs.princeton.edu/~ravian/',
  'Ion Stoica': 'https://people.eecs.berkeley.edu/~istoica/',
  'Joseph E. Gonzalez': 'https://people.eecs.berkeley.edu/~jegonzal/',
  'Matei Zaharia': 'https://people.eecs.berkeley.edu/~matei/',
  'Sewon Min': 'https://www.sewonmin.com/',

  // Places
  'Princeton University': 'https://www.princeton.edu/',
  // Longest-match wins, so the full phrase becomes one link instead of two
  // adjacent underlined runs when the news text spells the lab out in full.
  'UC Berkeley Sky Computing Lab': 'https://sky.cs.berkeley.edu/',
  'Sky Computing Lab': 'https://sky.cs.berkeley.edu/',
  'UC Berkeley': 'https://www.berkeley.edu/',
  'Renmin University of China': 'https://www.ruc.edu.cn/',
  'Gaoling School of AI': 'http://ai.ruc.edu.cn/',

  // Projects — point at the paper for research artifacts, the repo for software
  SkyNomad: 'https://arxiv.org/abs/2601.06520',
  LEANN: 'https://github.com/StarTrail-org/LEANN',
  PixelRAG: 'https://github.com/StarTrail-org/PixelRAG',
  FrontierCS: 'https://frontier-cs.org',
  SkyPilot: 'https://github.com/skypilot-org/skypilot',

  // Venues
  'NSDI 2027': 'https://www.usenix.org/conference/nsdi27',
  'MLSys 2026': 'https://mlsys.org/Conferences/2026',
  'ICML 2026': 'https://icml.cc/Conferences/2026',
  'EuroSys 2026': 'https://2026.eurosys.org/',
  "USENIX ATC '25": 'https://www.usenix.org/conference/atc25',
  "MLSys '26": 'https://mlsys.org/Conferences/2026',
};

export type LinkPart = { text: string; url?: string };

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Longest name first, so "MLSys 2026" wins over a bare "MLSys" and
// "Joseph E. Gonzalez" is never split by a shorter overlapping key.
const pattern = new RegExp(
  `(${Object.keys(entityLinks)
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|')})`,
  'g',
);

/**
 * Split `text` into plain and linkable parts. Only the first mention of an
 * entity within a given string is linked — repeating the same link in one
 * paragraph reads as noise.
 */
export function linkify(text: string): LinkPart[] {
  const linked = new Set<string>();
  return text
    .split(pattern)
    .filter((part) => part !== '')
    .map((part) => {
      const url = entityLinks[part];
      if (!url || linked.has(part)) return { text: part };
      linked.add(part);
      return { text: part, url };
    });
}
