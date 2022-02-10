import { remark } from 'remark';
import html from 'remark-html';
import { readFileSync } from 'fs';

export async function getMarkdownHTML(path: string) {
  const fileContents = readFileSync(path, 'utf8');

  // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(fileContents);
  return processedContent.toString();

  // Combine the data with the id and contentHtml
}
