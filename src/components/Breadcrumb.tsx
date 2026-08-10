import { Link } from "react-router";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
  accent: string;
}

export default function Breadcrumb({ crumbs, accent }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-xs text-[#e8e6e1]/40 mb-8">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          {crumb.href ? (
            <Link
              to={crumb.href}
              className="hover:text-[#e8e6e1] transition-colors"
              style={{ color: i === crumbs.length - 1 ? "#e8e6e1" : undefined }}
            >
              {crumb.label}
            </Link>
          ) : (
            <span style={{ color: i === crumbs.length - 1 ? "#e8e6e1" : undefined }}>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
