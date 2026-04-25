const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const blogsDir = path.resolve(__dirname, '../Blog');
const outputDir = path.resolve(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'blog-posts.json');
const publicBlogDir = path.resolve(__dirname, '../public/Resource/blog');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Ensure public blog directory exists
if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
}

async function processDocs() {
    console.log(`Searching for blog documents in: ${blogsDir}`);
    if (!fs.existsSync(blogsDir)) {
        console.error(`ERROR: Blog directory not found at ${blogsDir}`);
        process.exit(1); // Fail the build explicitly
    }

    const docxFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.docx'));
    const pdfFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.pdf'));

    console.log(`Found ${docxFiles.length} .docx files and ${pdfFiles.length} .pdf files.`);
    const posts = [];

    // Process Docx
    for (const file of docxFiles) {
        const filePath = path.join(blogsDir, file);
        const stats = fs.statSync(filePath);

        const nameParts = file.replace('.docx', '').split(' ');
        const tag = nameParts[0];
        const title = nameParts.slice(1).join(' ');
        const slug = file.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

        try {
            const result = await mammoth.convertToHtml({ path: filePath });
            let html = result.value;

            let writer = 'Mandat Analytics';
            const writerMatch = html.match(/by\s+([^<]+)/i);
            if (writerMatch) {
                writer = writerMatch[1].trim();
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
                excerpt: html.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
                isPdf: false
            });

            console.log(`Processed Docx: ${file}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }

    // Process PDF
    for (const file of pdfFiles) {
        const filePath = path.join(blogsDir, file);
        const stats = fs.statSync(filePath);

        const nameParts = file.replace('.pdf', '').split(' ');
        const tag = nameParts[0];
        const title = nameParts.slice(1).join(' ');
        const slug = file.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

        const publicPath = path.join(publicBlogDir, file);
        fs.copyFileSync(filePath, publicPath);

        posts.push({
            slug,
            tag,
            title,
            writer: 'Mandat Analytics',
            date: stats.mtime.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            timestamp: stats.mtimeMs,
            content: '', // No HTML content for PDF
            excerpt: `PDF Report: ${title}`,
            isPdf: true,
            pdfUrl: `/Resource/blog/${file}`
        });

        console.log(`Processed PDF: ${file}`);
    }

    // Sort by date newest first
    posts.sort((a, b) => b.timestamp - a.timestamp);

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log(`Successfully wrote ${posts.length} posts to ${outputFile}`);
}

processDocs();
