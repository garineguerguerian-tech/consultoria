// Lista de posts (agregar nuevos .md desde Netlify CMS)
const posts = [
  "posts/ejemplo-post.md"
];

async function loadPosts() {
  const container = document.getElementById('postContainer');
  container.innerHTML = '';

  for (const url of posts) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const html = marked.parse(text);
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = html;
      container.appendChild(div);
    } catch (err) {
      console.error("Error cargando post:", url, err);
    }
  }
}

loadPosts();
