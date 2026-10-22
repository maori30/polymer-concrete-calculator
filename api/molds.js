export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-github-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const owner = 'maori30';
  const repo = 'polymer-concrete-calculator';
  const path = 'molds.json';

  const token = process.env.GITHUB_TOKEN || req.headers['x-github-token'] || req.headers['authorization']?.replace('Bearer ', '');

  if (req.method === 'GET') {
    try {
      const ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=main`, {
        headers: {
          'User-Agent': 'Vercel-Serverless-Molds',
          'Accept': 'application/vnd.github+json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
      });

      if (!ghRes.ok) {
        if (ghRes.status === 404) {
          return res.status(200).json({ molds: [], sha: null });
        }
        return res.status(ghRes.status).json({ error: 'Failed to fetch from GitHub' });
      }

      const data = await ghRes.json();
      const contentBuffer = Buffer.from(data.content, 'base64');
      const jsonContent = JSON.parse(contentBuffer.toString('utf8'));
      return res.status(200).json({ molds: jsonContent, sha: data.sha });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === 'POST') {
    if (!token) {
      return res.status(401).json({ error: 'Missing GitHub token', requiresToken: true });
    }

    try {
      const { molds, sha } = req.body || {};
      if (!Array.isArray(molds)) {
        return res.status(400).json({ error: 'molds must be an array' });
      }

      let currentSha = sha;
      if (!currentSha) {
        const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=main`, {
          headers: {
            'User-Agent': 'Vercel-Serverless-Molds',
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (getRes.ok) {
          const getData = await getRes.json();
          currentSha = getData.sha;
        }
      }

      const contentBase64 = Buffer.from(JSON.stringify(molds, null, 2)).toString('base64');
      const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
          'User-Agent': 'Vercel-Serverless-Molds',
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Update saved molds [skip ci]',
          content: contentBase64,
          ...(currentSha ? { sha: currentSha } : {})
        })
      });

      if (!putRes.ok) {
        const errData = await putRes.json();
        return res.status(putRes.status).json({ error: errData.message || 'GitHub commit failed' });
      }

      const putData = await putRes.json();
      return res.status(200).json({ success: true, sha: putData.content?.sha, molds });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
