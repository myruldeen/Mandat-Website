const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const blogsDir = path.resolve(__dirname, '../Blog');
const outputDir = path.resolve(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'blog-posts.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function processDocs() {
    console.log(`Searching for blog documents in: ${blogsDir}`);
    if (!fs.existsSync(blogsDir)) {
        console.error(`ERROR: Blog directory not found at ${blogsDir}`);
        process.exit(1); // Fail the build explicitly
    }

    const files = fs.readdirSync(blogsDir).filter(file => file.endsWith('.docx'));
    console.log(`Found ${files.length} .docx files.`);
    const posts = [];

    if (files.length === 0) {
        console.warn('WARNING: No .docx files found in the Blog directory.');
    }

    for (const file of files) {
        const filePath = path.join(blogsDir, file);
        const stats = fs.statSync(filePath);

        // Naming structure: "TAG Title.docx"
        const nameParts = file.replace('.docx', '').split(' ');
        const tag = nameParts[0];
        const title = nameParts.slice(1).join(' ');
        const slug = file.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

        try {
            const result = await mammoth.convertToHtml({ path: filePath });
            let html = result.value;
            const messages = result.messages;

            // Extract writer from structure: Heading and under that by <writer>
            // Mammoth usually wraps paragraphs in <p>
            // We look for "by [Name]" or "By [Name]"
            let writer = 'Mandat Analytics';
            const writerMatch = html.match(/by\s+([^<]+)/i);
            if (writerMatch) {
                writer = writerMatch[1].trim();
                // Remove the "by writer" line from content if desired, or keep it.
                // For now, let's keep it but extract it for metadata.
            }

            posts.push({
                slug,
                tag,
                title,
                writer,
                date: stats.mtime.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                timestamp: stats.mtimeMs,
                content: html,
                excerpt: html.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
            });

            console.log(`Processed: ${file}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }

    // Sort by date newest first
    posts.sort((a, b) => b.timestamp - a.timestamp);

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log(`Successfully wrote ${posts.length} posts to ${outputFile}`);
}

processDocs();
