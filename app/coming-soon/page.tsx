import type { Metadata } from 'next';
import ComingSoon from './ComingSoon';

export const metadata: Metadata = {
    title: 'TechKun — Coming Soon',
    description: "TechKun's new website is launching soon. We're building something great.",
};

export default function ComingSoonPage() {
    return <ComingSoon />;
}
