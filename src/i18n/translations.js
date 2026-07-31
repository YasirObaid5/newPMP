import generated from './ar.generated.js';
import overrides from './ar.overrides.js';

const numbered = {};
for (const [source, target] of Object.entries(generated)) {
  const match = source.match(/^\d+(?:\.\d+)*\.?\s+(.+)$/);
  if (match) numbered[match[1]] = target.replace(/^\d+(?:\.\d+)*\.?\s+/, '');
}

export default { ...generated, ...numbered, ...overrides };

export const polishArabic = text => text
  .replace(/رئيس الوزراء/g, 'مدير المشروع')
  .replace(/Sprint Backlog/g, 'قائمة أعمال الدورة')
  .replace(/Product Backlog/g, 'قائمة متطلبات المنتج')
  .replace(/Scrum Master/g, 'ميسّر سكروم')
  .replace(/Sprint/g, 'الدورة');
