const normalizedBase = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string) {
  if (!path.startsWith('/')) return path;
  return normalizedBase ? `${normalizedBase}${path}` : path;
}

export function stripBase(pathname: string) {
  if (!normalizedBase) return pathname;
  if (pathname === normalizedBase) return '/';
  if (pathname.startsWith(`${normalizedBase}/`)) {
    return pathname.slice(normalizedBase.length) || '/';
  }
  return pathname;
}
