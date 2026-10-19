import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  techStack: string[];
  featuredImage: string;
  category?: string;
  subtitle?: string;
  impact?: string;
  problem?: string;
  solution?: string;
  featuredMetric?: {
    value: string;
    label: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
}

export interface ProjectData {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "content", "projects");

/**
 * Ensures the projects content directory exists.
 */
function ensureDirectoryExists() {
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true });
  }
}

/**
 * Returns all project slugs (filenames without .mdx extension).
 */
export function getAllProjectSlugs(): string[] {
  ensureDirectoryExists();
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.mdx?$/, ""));
}

/**
 * Retrieves a single project by its slug, reading frontmatter and raw MDX body.
 */
export function getProjectBySlug(slug: string): ProjectData | null {
  ensureDirectoryExists();

  const mdxPath = path.join(projectsDirectory, `${slug}.mdx`);
  const mdPath = path.join(projectsDirectory, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter: ProjectFrontmatter = {
    title: data.title || "Untitled Project",
    description: data.description || "",
    date: data.date || "",
    techStack: Array.isArray(data.techStack) ? data.techStack : [],
    featuredImage: data.featuredImage || "/placeholder-project.png",
    category: data.category,
    subtitle: data.subtitle,
    impact: data.impact,
    problem: data.problem,
    solution: data.solution,
    featuredMetric: data.featuredMetric,
    liveUrl: data.liveUrl,
    githubUrl: data.githubUrl,
    isPrivateRepo: data.isPrivateRepo,
  };

  return {
    slug,
    frontmatter,
    content,
  };
}

/**
 * Retrieves all projects, sorted by publication date descending.
 */
export function getAllProjects(): ProjectData[] {
  const slugs = getAllProjectSlugs();

  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectData => project !== null)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA;
    });

  return projects;
}
