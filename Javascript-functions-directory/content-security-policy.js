const meta = document.createElement('meta');
meta.httpEquiv = 'Content-Security-Policy';
meta.content = "default-src 'self'";

document.head.appendChild(meta);