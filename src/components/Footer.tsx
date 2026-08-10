import { Link } from "react-router";

interface FooterProps {
  accent?: string;
}

export default function Footer({ accent = "#5f7a6e" }: FooterProps) {
  return (
    <footer className="border-t border-[#3a4450] mt-20" style={{ backgroundColor: "#161c25" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="text-sm font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: accent }}>
              Kahvi 2050
            </div>
            <p className="text-xs text-[#e8e6e1]/40 leading-relaxed">
              A futures catalogue exploring what coffee culture might become. Helsinki, Finland.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#e8e6e1]/30 mb-3">Platform</div>
            <ul className="space-y-2 text-xs text-[#e8e6e1]/50">
              <li><span className="cursor-default">About Kahvi 2050</span></li>
              <li><span className="cursor-default">How It Works</span></li>
              <li><span className="cursor-default">Membership</span></li>
              <li><span className="cursor-default">Cooperative</span></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#e8e6e1]/30 mb-3">Legal</div>
            <ul className="space-y-2 text-xs text-[#e8e6e1]/50">
              <li><span className="cursor-default">Terms of Service</span></li>
              <li><span className="cursor-default">Privacy Policy</span></li>
              <li><span className="cursor-default">Data Rights</span></li>
              <li><span className="cursor-default">Accessibility</span></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#e8e6e1]/30 mb-3">Support</div>
            <ul className="space-y-2 text-xs text-[#e8e6e1]/50">
              <li><span className="cursor-default">Help Centre</span></li>
              <li><span className="cursor-default">Contact Us</span></li>
              <li><span className="cursor-default">Vendor Portal</span></li>
              <li><span className="cursor-default">Press Enquiries</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3a4450] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#e8e6e1]/25">
            © 2050 Kahvi 2050 Collective. All offerings subject to availability and applicable regulation.
          </p>
          <p className="text-xs text-[#e8e6e1]/25">
            Prices include VAT at the applicable rate · Registered in Finland · FI-2050-COL-004
          </p>
        </div>
      </div>
    </footer>
  );
}
